import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import BusList from './components/BusList';

function App() {
  const [buses, setBuses] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState({});

  const fetchBuses = (searchData) => {
    // Simulate API call
    const fakeBuses = [
      { id: 1, name: "Volvo Express", seats: 40 },
      { id: 2, name: "AC Deluxe", seats: 35 }
    ];
    setBuses(fakeBuses);
  };

  const handleSeatSelection = (busId, seatCount) => {
    setSelectedSeats({ ...selectedSeats, [busId]: seatCount });
  };

  const confirmBooking = () => {
    alert("Booking confirmed!\n" + JSON.stringify(selectedSeats, null, 2));
  };

  return (
    <div>
      <h1>Redbus Clone</h1>
      <SearchForm onSearch={fetchBuses} />
      <BusList buses={buses} onSeatSelect={handleSeatSelection} />
      {Object.keys(selectedSeats).length > 0 && (
        <button onClick={confirmBooking}>Confirm Booking</button>
      )}
    </div>
  );
}

export default App;
