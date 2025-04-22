import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Table from '../components/Table';
import Header from '../components/Header';
import Hero from '../components/Hero';

type TableType = {
  id: number;
  reserved: boolean;
};

export default function Home() {
  const [tables, setTables] = useState<TableType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const restaurantId = 1;

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
        user_id,
      },
    ]);

    if (error) {
      alert('Failed to reserve table: ' + error.message);
    } else {
      alert('Table reserved!');
      await fetchTables();
    }
  };

  if (loading)
    return (
      <p className="text-center text-xl dark:text-white">Loading tables...</p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 dark:text-red-400">{`Error: ${error}`}</p>
    );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header />
      <Hero />
      <main id="reserve" className="container mx-auto px-4 mt-24 mb-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Reserve a Table
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tables.map((table) => (
            <Table key={table.id} table={table} onReserve={reserveTable} />
          ))}
        </div>
      </main>
    </div>
  );
}

