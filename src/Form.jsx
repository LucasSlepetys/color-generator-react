import React, { useState } from 'react';
import Values from 'values.js';

export function Form({ addColorShade, numOfShades }) {
  const [color, setColor] = useState('#f15025');
  const [percentOfShade, setPercentOfShade] = useState(numOfShades);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color, percentOfShade);
    addColorShade(color, percentOfShade);
  };
  return (
    <section className='container'>
      <h4>Color generator</h4>

      <form className='color-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='percentOfShades'>Select percentage of shade:</label>
          <input
            type='number'
            max={100}
            min={0}
            step={10}
            value={percentOfShade}
            onChange={(e) => {
              setPercentOfShade(e.target.value);
            }}
          />
        </div>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button type='submit' className='btn' style={{ background: color }}>
          Generate
        </button>
      </form>
    </section>
  );
}
