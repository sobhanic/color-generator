import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";

function ColorGenerator() {
  const [isHexColor, setIsHexColor] = useState(true);
  const [color, setColor] = useState("#000");

  function randomSelect(lenght) {
    return Math.floor(Math.random() * lenght);
  }

  function handleGenerateHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomSelect(hex.length)];
    }
    setColor(hexColor);
  }

  function handleGenerateRGB() {
    const r = randomSelect(256);
    const g = randomSelect(256);
    const b = randomSelect(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(
    function () {
      isHexColor ? handleGenerateHex() : handleGenerateRGB();
    },
    [isHexColor]
  );

  document.body.style = `background: ${color}`;

  return (
    <div className='container'>
      <div className='btn-container'>
        <button
          className='btn btn--secondary'
          onClick={() => setIsHexColor((curColor) => !curColor)}
        >
          {`generate ${isHexColor ? "RGB" : "HEX"} Color`}
        </button>
        <button
          className='btn btn--primary'
          onClick={isHexColor ? handleGenerateHex : handleGenerateRGB}
        >
          Generate
        </button>
      </div>
      <p className='type'>{`${isHexColor ? "HEX" : "RGB"} Color`}</p>
      <h1>{color}</h1>
    </div>
  );
}

export default ColorGenerator;
