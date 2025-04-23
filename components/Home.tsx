import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Table from '../components/Table';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Footer from '../components/footer';
import { motion } from 'framer-motion';

export default function Home() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTables = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('restaurant_id', 1);

    if (error) setError(error.message);
    else setTables(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const reserveTable = async (tableId: number) => {
    const reservation_time = prompt('Enter reservation time (YYYY-MM-DD HH:mm):');
    if (!reservation_time) return;

    const existing = await supabase
      .from('reservations')
      .select('*')
      .eq('table_id', tableId)
      .eq('reservation_time', reservation_time);

    if (existing.data && existing.data.length > 0) {
      alert('This table is already reserved at that time.');
      return;
    }

    const { data: userData } = await supabase.auth.getUser();
    const user_id = userData.user?.id;

    const { error } = await supabase.from('reservations').insert([
      { table_id: tableId, user_id, reservation_time },
    ]);

    if (error) {
      alert('Failed to reserve: ' + error.message);
    } else {
      alert('Reserved!');
      await fetchTables();
    }
  };

  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center text-gray-900 dark:text-white">
      <Navbar />
      <Hero />

      <motion.section
        className="py-20 bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Features />
      </motion.section>

      <motion.section
        className="py-20 bg-gray-100 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <AboutUs />
      </motion.section>

      <main id="reserve" className="container mx-auto py-20 px-4 bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-semibold text-center mb-6">Reserve a Table</h1>

        {loading ? (
          <p className="text-center text-xl">Loading tables...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tables.map((table: any) => (
              <Table key={table.id} table={table} onReserve={() => reserveTable(table.id)} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
