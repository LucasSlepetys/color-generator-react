import { ColorList } from './ColorList';
import Values from 'values.js';

import { Form } from './Form';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// toast.error('error message');

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  function addColor(color) {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error('Invalid color ---- ' + error);
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />;
    </main>
  );
};
export default App;
