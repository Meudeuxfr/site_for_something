import React from 'react';
import { motion } from 'framer-motion';

type TableProps = {
  table: {
    id: number;
    reserved: boolean;
  };
  onReserve: (tableId: number) => void;
};

const Table = ({ table, onReserve }: TableProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white rounded-2xl shadow-xl text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
  >
    <h3 className="text-xl font-bold mb-2 font-serif">Table #{table.id}</h3>
    <p className="mb-4 text-gray-600 dark:text-gray-300 font-medium">
      {table.reserved ? 'Reserved' : 'Available'}
    </p>
    <button
      onClick={() => onReserve(table.id)}
      disabled={table.reserved}
      className={`px-4 py-2 rounded-full text-white font-semibold transition duration-200 ease-in-out ${
        table.reserved
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 shadow-md'
      }`}
    >
      {table.reserved ? 'Unavailable' : 'Reserve'}
    </button>
  </motion.div>
);

export default Table;