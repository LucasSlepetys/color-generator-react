import React, { useState } from 'react';
import Values from 'values.js';

export function Form({ addColor }) {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className='container'>
      <h4>Color generator</h4>

      <form className='color-form' onSubmit={handleSubmit}>
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
