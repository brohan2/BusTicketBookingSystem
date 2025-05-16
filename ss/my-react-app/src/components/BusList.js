import React from 'react';

function BusList({ buses, onSeatSelect }) {
  return (
    <>
      {buses.map((bus) => (
        <div key={bus.id} className="bus-card">
          <h2>{bus.name}</h2>
          <p>Total Seats: {bus.seats}</p>
          <input
            type="number"
            min="1"
            max={bus.seats}
            placeholder="Seats to book"
            onChange={(e) => onSeatSelect(bus.id, e.target.value)}
          />
        </div>
      ))}
    </>
  );
}

export default BusList;
