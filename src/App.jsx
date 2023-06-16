import { ColorList } from './ColorList';
import Values from 'values.js';

import { Form } from './Form';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [numOfShades, setNumOfShades] = useState(10);
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  function addColorShade(color, percentOfShade) {
    try {
      setColors(new Values(color).all(percentOfShade));
      console.log(colors, percentOfShade);
    } catch (error) {
      toast.error('Invalid color ---- ' + error);
    }
  }

  return (
    <main>
      <Form addColorShade={addColorShade} numOfShades={numOfShades} />
      <ColorList colors={colors} numOfShades={numOfShades} />
      <ToastContainer position='top-center' />;
    </main>
  );
};
export default App;
