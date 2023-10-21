import React from 'react';
import './App.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = React.useState(null);
  const [displayColorList, setDisplayColorList] = React.useState(false);

  const handleButtonClick = () => {
    setDisplayColorList(!displayColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setDisplayColorList(false);
  };

  const colorSquares = colors.map((color, index) => (
    <div
      key={index}
      className="color-square"
      style={{ backgroundColor: color }}
      onClick={() => handleColorClick(color)}
    ></div>
  ));

  const colorList = displayColorList ? (
    <div className="color-list">
      {colorSquares}
    </div>
  ) : null;

  return (
    <div className="app">
      <div className="color-picker" style={{ backgroundColor: selectedColor || 'purple' }}>
        {colorList}
        <button onClick={handleButtonClick} style={{ backgroundColor: 'green' }}>
          Pick a color
        </button>
      </div>
    </div>
  );
};

function App() {
  const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'purple', 'brown', 'gray', 'cyan', 'magenta', 'violet', 'indigo', 'teal', 'lime', 'olive', 'maroon', 'navy', 'fuchsia', 'aqua'];

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

