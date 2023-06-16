import React from 'react';
import { toast } from 'react-toastify';
export function SingleColor({ color, index, numOfShades }) {
  const { hex, weight } = color;
  async function copy() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('color copied');
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error('Clipboard access not available');
    }
  }
  return (
    <div
      className={index > 100 / numOfShades ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copy}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{'#' + hex}</p>
    </div>
  );
}
