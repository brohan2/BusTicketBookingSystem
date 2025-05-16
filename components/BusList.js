import React from 'react';
import SeatSelector from './SeatSelector';

function BusList({ buses, onSeatSelect }) {
  return (
    <div>
      <h2>Available Buses</h2>
      {buses.map(bus => (
        <div key={bus.id}>
          <h3>{bus.name}</h3>
          <SeatSelector
            busId={bus.id}
            totalSeats={bus.seats}
            onSelect={onSeatSelect}
          />
        </div>
      ))}
    </div>
  );
}

export default BusList;
