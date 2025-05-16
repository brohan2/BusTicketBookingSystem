import React, { useState } from 'react';

function SeatSelector({ busId, totalSeats, onSelect }) {
  const [seatCount, setSeatCount] = useState(1);

  const handleChange = (e) => {
    const count = parseInt(e.target.value);
    setSeatCount(count);
    onSelect(busId, count);
  };

  return (
    <div>
      <label>Seats:
        <input
          type="number"
          min="1"
          max={totalSeats}
          value={seatCount}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default SeatSelector;
