
import React from 'react'; 
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Table from '../components/Table';

// Define the type for a table object
type TableType = {
    id: number;
    reserved: boolean;
    // Add other properties as needed
};

export default function Home() {
    const [tables, setTables] = useState<TableType[]>([]); // Explicitly type the state

    useEffect(() => {
        const fetchTables = async () => {
            const { data } = await supabase.from('tables').select('*');
            setTables(data || []); // Ensure data is not null
        };
        fetchTables();
    }, []);

    const reserveTable = async (tableId: number) => {
        const { error } = await supabase
            .from('reservations')
            .insert([{ table_id: tableId }]);
        if (error) {
            alert('Failed to reserve table.');
        } else {
            alert('Table reserved!');
            // Refresh table state
            const { data } = await supabase.from('tables').select('*');
            setTables(data || []); // Ensure data is not null
        }
    };

    return (
        <div>
            <h1>Reserve a Table</h1>
            <div>
                {tables.map((table) => (
                    <Table key={table.id} table={table} onReserve={reserveTable} />
                ))}
            </div>
        </div>
    );
}