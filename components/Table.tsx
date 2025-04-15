import React from 'react';

const Table = ({ table, onReserve }) => {
    return (
        <div className={`table ${table.reserved ? 'reserved' : ''}`} onClick={() => !table.reserved && onReserve(table.id)}>
            Table {table.id}
        </div>
    );
};

export default Table;