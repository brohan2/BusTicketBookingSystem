import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import BusList from './components/BusList';
import './App.css';

function App() {
  const [buses, setBuses] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState({});
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const fetchBuses = (searchData) => {
    const fakeBuses = [
      { id: 1, name: "Volvo Express", seats: 40 },
      { id: 2, name: "AC Deluxe", seats: 35 }
    ];
    setBuses(fakeBuses);
    setConfirmationVisible(false); // Hide confirmation on new search
  };

  const handleSeatSelection = (busId, seatCount) => {
    setSelectedSeats({ ...selectedSeats, [busId]: parseInt(seatCount, 10) });
  };

  const confirmBooking = () => {
    setConfirmationVisible(true);
  };

  const handleBackToSearch = () => {
    setConfirmationVisible(false);
    setSelectedSeats({});
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🚌 Redbus Clone</h1>

      {!confirmationVisible ? (
        <>
          <div className="card">
            <SearchForm onSearch={fetchBuses} />
          </div>
          <div className="bus-list">
            <BusList buses={buses} onSeatSelect={handleSeatSelection} />
          </div>
          {Object.keys(selectedSeats).length > 0 && (
            <button className="confirm-btn" onClick={confirmBooking}>
              ✅ Confirm Booking
            </button>
          )}
        </>
      ) : (
        <div className="confirmation-page card">
          <h2>🎉 Booking Confirmed!</h2>
          <p>Thank you for booking with us.</p>
          <h3>Booking Details:</h3>
          {Object.keys(selectedSeats).map((busId) => {
            const bus = buses.find((b) => b.id === parseInt(busId, 10));
            return (
              <div key={busId} className="bus-confirmation">
                <p><strong>Bus:</strong> {bus.name}</p>
                <p><strong>Seats Booked:</strong> {selectedSeats[busId]}</p>
              </div>
            );
          })}
          <button className="search-btn" onClick={handleBackToSearch}>🔙 Book Another</button>
        </div>
      )}
    </div>
  );
}

export default App;
