import React from 'react';
import { SingleColor } from './SingleColor';
import { nanoid } from 'nanoid';

export function ColorList({ colors, numOfShades }) {
  return (
    <div className='colors'>
      {colors.map((color, index) => {
        return (
          <SingleColor
            key={nanoid()}
            color={color}
            index={index}
            numOfShades={numOfShades}
          />
        );
      })}
    </div>
  );
}
