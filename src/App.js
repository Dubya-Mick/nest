import './App.css';
import { Nest } from './components/Nest';
import { useState } from 'react';

import { Slider, Select, MenuItem } from '@mui/material';

function App() {
  const [depth, setDepth] = useState(40);
  const [scale, setScale] = useState(0.8);
  const [speed, setSpeed] = useState(40);
  const [size, setSize] = useState(25);
  const [shape, setShape] = useState('square');
  const [inputDisplay, setInputDisplay] = useState(true);

  const handleDepthChange = (newDepth) => {
    setDepth(newDepth);
  };

  const handleScaleChange = (newScale) => {
    setScale(newScale);
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleShapeChange = (newShape) => {
    setShape(newShape);
  };

  return (
    <div>
      <div className="input-container">
        <div>
          <span>Size</span>
          <Slider
            min={10}
            max={50}
            step={1}
            value={size}
            onChange={(e) => handleSizeChange(e.target.value)}
          />
          <span>Depth</span>
          <Slider
            min={1}
            max={60}
            step={1}
            value={depth}
            onChange={(e) => handleDepthChange(e.target.value)}
          />
          <span>Scale</span>
          <Slider
            min={0.7}
            max={0.9}
            step={0.01}
            value={scale}
            onChange={(e) => handleScaleChange(e.target.value)}
          />
          <span>Time to Rotate</span>
          <Slider
            min={5}
            max={50}
            step={1}
            value={speed}
            onChange={(e) => handleSpeedChange(e.target.value)}
          />
        </div>
        <Select
          value={shape}
          onChange={(e) => handleShapeChange(e.target.value)}
        >
          <MenuItem value={'square'}>Square</MenuItem>
          <MenuItem value={'ellipse'}>Ellipse</MenuItem>
        </Select>
      </div>
      <div className="centered">
        <Nest
          depth={depth}
          size={size}
          speed={speed}
          scale={scale}
          shape={shape}
        />
      </div>
    </div>
  );
}

export default App;
