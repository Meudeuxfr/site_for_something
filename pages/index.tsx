import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Table from '../components/Table';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';

export default function Home() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const reserveTable = async (tableId) => {
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

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />

      <main id="reserve" className="container mt-20 px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Reserve a Table</h1>
        {loading ? (
          <p className="text-center text-xl">Loading tables...</p>
        ) : error ? (
          <p className="text-center text-red-500">{`Error: ${error}`}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tables.map((table) => (
              <Table key={table.id} table={table} onReserve={reserveTable} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
