import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(null);

  function handleChange(event) {
    setColor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValidHexColor(color)) {
      document.body.style.backgroundColor = color;
      setError(null);
    } else {
      document.body.style.backgroundColor = 'bisque';
      setColor('')
      document.getElementById('upis').value = '';
      setError('Invalid color');
    }
  }

  function handleReset(event) {
    event.preventDefault();
    document.body.style.backgroundColor = 'bisque';
    setColor('')
    document.getElementById('upis').value = '';
    setError(null);
  }

  function isValidHexColor(color) {
    // Check if the color is a 6-digit hex code
    // console.log(color)
    return /^#[0-9a-fA-F]{6}$/.test(color);
  }

  return (
    <div className="App">
      <div>
        <h1>&nbsp;&nbsp;Upiši hex boju&nbsp;&nbsp;</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={handleChange} id='upis' />&nbsp;&nbsp;
          <button type="submit">&nbsp;Change color&nbsp;</button>

        </form>&nbsp;&nbsp;
        <form onSubmit={handleReset}>
          <button type="submit">&nbsp;Reset&nbsp;</button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;