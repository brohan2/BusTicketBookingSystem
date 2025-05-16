import React, { useState } from 'react';

const locations = ["Mumbai", "Delhi", "Bangalore", "Hyderabad"];

function SearchForm({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from && to && date) {
      onSearch({ from, to, date });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>From:
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="">Select</option>
          {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
      </label>

      <label>To:
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="">Select</option>
          {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
      </label>

      <label>Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      <button type="submit">Search Buses</button>
    </form>
  );
}

export default SearchForm;
