import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './PaletteBox.css';

const PaletteBox = () => {
  

  const randomKey = () => {
    return '_' + Math.random().toString(36).substring(2, 9);
  };

  const generateColor = () => {
    let r = generateRandomRGB();
    let g = generateRandomRGB();
    let b = generateRandomRGB();
    return `rgb(${r},${g},${b})`;
  };

  const generateRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  };

  const RGBToHex = (rgb) => {
    let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    rgb = rgb.substr(4).split(')')[0].split(sep);

    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return `#${r}${g}${b}`.toUpperCase();
  };

  const newColor = (id) => {
    const updatedColors = colors.map((el) =>
      el.id === id ? { ...el, color: RGBToHex(generateColor()) } : el
    );
    setColors(updatedColors);
  };

  const copyColorCode = (id) => {
    const selectedColor = colors.find((el) => el.id === id);
    const colorIndex = colors.findIndex((el) => el.id === id);
    navigator.clipboard.writeText(selectedColor.color);
    setColors((prevColors) => {
      const updatedColors = [...prevColors];
      updatedColors[colorIndex].isCopied = true;
      return updatedColors;
    });
    setTimeout(() => {
      setColors((prevColors) => {
        const updatedColors = [...prevColors];
        updatedColors[colorIndex].isCopied = false;
        return updatedColors;
      });
    }, 500);
  };
   
  const [colors, setColors] = useState([
    {
      id: randomKey(),
      color: RGBToHex(generateColor()),
      isCopied: false
    },
    {
      id: randomKey(),
      color: RGBToHex(generateColor()),
      isCopied: false
    },
    {
      id: randomKey(),
      color: RGBToHex(generateColor()),
      isCopied: false
    },
    {
      id: randomKey(),
      color: RGBToHex(generateColor()),
      isCopied: false
    },
    {
      id: randomKey(),
      color: RGBToHex(generateColor()),
      isCopied: false
    }
  ]);

  return (
    <div className="PaletteBox">
      {colors.map((el) => (
        <ColorBox
          key={el.id}
          id={el.id}
          color={el.color}
          isCopied={el.isCopied}
          newColor={newColor}
          copyColorCode={copyColorCode}
        />
      ))}
    </div>
  );
};

export default PaletteBox;
