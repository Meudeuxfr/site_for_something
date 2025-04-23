// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Table from '../components/Table';

type TableType = {
  id: number;
  reserved: boolean;
};

const Home: React.FC = () => {
  const [tables, setTables] = useState<TableType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const restaurantId = 1; // You can make this dynamic later

  const fetchTables = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('restaurant_id', restaurantId);

    if (error) {
      setError(error.message);
    } else {
      setTables(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const reserveTable = async (tableId: number) => {
    const user = await supabase.auth.getUser();
    const user_id = user.data.user?.id ?? null;

    const { error } = await supabase.from('reservations').insert([
      {
        table_id: tableId,
        user_id, // This can be null if you're testing without auth
      },
    ]);

    if (error) {
      alert('Failed to reserve table: ' + error.message);
    } else {
      alert('Table reserved!');
      await fetchTables(); // Refresh table list
    }
  };

  if (loading) return <p>Loading tables...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <Header />
      <Hero />
      <main className="container mt-20">
        <h1 className="text-3xl font-bold text-center mb-10">Reserve a Table</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tables.map((table) => (
            <Table key={table.id} table={table} onReserve={() => reserveTable(table.id)} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
