import './App.css';
import { Nest } from './components/Nest';
import { useState, useEffect } from 'react';

import { Slider, Select, MenuItem, TextField } from '@mui/material';

function App() {
  const [depth, setDepth] = useState(40);
  const [scale, setScale] = useState(0.8);
  const [speed, setSpeed] = useState(40);
  const [size, setSize] = useState(25);
  const [radius, setRadius] = useState(0);
  const [shape, setShape] = useState('square');
  const [squat, setSquat] = useState(2);
  const [text, setText] = useState('');

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

  const handleSquatChange = (newSquat) => {
    setSquat(newSquat);
  };

  const handleRadiusChange = (newRadius) => {
    setRadius(newRadius);
  };

  const handleTextInput = (textInput) => {
    setText(textInput);
  };

  useEffect(() => {
    if (shape === 'ellipse') {
      setRadius(50);
      setSquat(2);
    }
    if (shape === 'square') {
      setRadius(0);
      setSquat(1);
    }
  }, [shape]);

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

          <span>Squat</span>
          <Slider
            min={1}
            max={10}
            value={squat}
            step={0.2}
            onChange={(e) => handleSquatChange(e.target.value)}
          />
          <span>Border Radius</span>
          <Slider
            min={0}
            max={50}
            value={radius}
            step={2}
            onChange={(e) => handleRadiusChange(e.target.value)}
          />
        </div>
        <Select
          value={shape}
          onChange={(e) => handleShapeChange(e.target.value)}
        >
          <MenuItem value={'square'}>Square</MenuItem>
          <MenuItem value={'ellipse'}>Ellipse</MenuItem>
        </Select>
        <TextField
          value={text}
          variant="outlined"
          onChange={(e) => handleTextInput(e.target.value)}
        />
      </div>
      <div className="centered">
        <Nest
          depth={depth}
          size={size}
          speed={speed}
          scale={scale}
          shape={shape}
          text={text}
          squat={squat}
          radius={radius}
        />
      </div>
    </div>
  );
}

export default App;
