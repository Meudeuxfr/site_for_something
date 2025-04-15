import React from 'react';

type TableProps = {
  table: {
    id: number;
    reserved: boolean;
  };
  onReserve: (id: number) => void;
};

export default function Table({ table, onReserve }: TableProps) {
  return (
    <div
      style={{
        padding: '1rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: 8,
        background: table.reserved ? '#ffe6e6' : '#e6ffe6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 400,
      }}
    >
      <span>Table #{table.id}</span>
      {table.reserved ? (
        <span style={{ color: 'red' }}>Reserved</span>
      ) : (
        <button onClick={() => onReserve(table.id)}>Reserve</button>
      )}
    </div>
  );
}