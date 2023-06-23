import React, { useState } from 'react';
import PaletteBox from './PaletteBox';
import './ColorPalette.css';

const Palette = () => {
  const [reRendered, setReRendered] = useState(0);

  const handleNewPalette = () => {
    setReRendered(prevState => prevState + 1);
  };

  const randomKey = () => {
    return '_' + Math.random().toString(36).substring(2, 9);
  };

  return (
    <div className="Palette">
      <h1>Palette Generator</h1>
      <PaletteBox key={randomKey()} />
      <button className="button-6" onClick={handleNewPalette}>
        Generate a new random palette
      </button>
    </div>
  );
};

export default Palette;
