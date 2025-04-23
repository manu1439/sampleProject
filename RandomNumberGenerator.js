import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minNum = parseInt(min, 10);
    const maxNum = parseInt(max, 10);
    if (isNaN(minNum) || isNaN(maxNum) || minNum > maxNum) {
      alert('Please enter valid min and max values, with min less than or equal to max.');
      return;
    }
    const rand = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    setRandomNumber(rand);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Random Number Generator</h2>
      <div>
        <label>Min:</label>
        <input type="number" value={min} onChange={(e) => setMin(e.target.value)} />
      </div>
      <div>
        <label>Max:</label>
        <input type="number" value={max} onChange={(e) => setMax(e.target.value)} />
      </div>
      <button onClick={generateRandomNumber}>Generate</button>
      {randomNumber !== null && (
        <div>
          <h3>Generated Number: {randomNumber}</h3>
        </div>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
