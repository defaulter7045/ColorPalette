import React from 'react';
import chroma from 'chroma-js';
import './ColorBox.css';

const ColorBox = ({ color, isCopied, id, newColor, copyColorCode }) => {
  const handleBoxClick = () => {
    newColor(id);
  };

  const handleNameClick = (e) => {
    e.stopPropagation();
    copyColorCode(id);
  };

  const isLightColor = chroma(color).luminance() >= 0.6;

  return (
    <div className="ColorBox" style={{ backgroundColor: color }} onClick={handleBoxClick}>
      <div className={`ColorBox-ColorName ${isLightColor && 'dark-text'}`} onClick={handleNameClick}>
        {isCopied ? 'Copied!' : color}
      </div>
    </div>
  );
};

export default ColorBox;
