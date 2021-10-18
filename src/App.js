import './App.css';
import { Nest } from './components/Nest';
import { useState } from 'react';

import { Slider, Select, MenuItem, TextField } from '@mui/material';

function App() {
  const [depth, setDepth] = useState(40);
  const [animation, setAnimation] = useState('spin');
  const [scale, setScale] = useState(0.8);
  const [speed, setSpeed] = useState(40);
  const [size, setSize] = useState(25);
  const [radius, setRadius] = useState(0);
  const [squat, setSquat] = useState(1);
  const [text, setText] = useState('');
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

  const handleSquatChange = (newSquat) => {
    setSquat(newSquat);
  };

  const handleRadiusChange = (newRadius) => {
    setRadius(newRadius);
  };

  const handleTextInput = (textInput) => {
    setText(textInput);
  };

  const handleAnimationChange = (newAnimation) => {
    setAnimation(newAnimation);
  };

  const handleToggleInput = () => {
    setInputDisplay(!inputDisplay);
  };

  const handleEllipse = () => {
    setRadius(50);
    setSquat(2);
  };

  const handleSquare = () => {
    setRadius(0);
    setSquat(1);
  };

  const handleCircle = () => {
    setRadius(50);
    setSquat(1);
  };

  const handleRose = () => {
    setRadius(50);
    setSquat(1.2);
  };

  return (
    <div>
      {inputDisplay ? null : (
        <i
          onClick={handleToggleInput}
          class="fas fa-paint-brush display-input"
        ></i>
      )}
      <div className={`input-container ${inputDisplay ? '' : 'hidden'}`}>
        <button className="toggle-input-button" onClick={handleToggleInput}>
          Hide
        </button>
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
          <span>Loop Time</span>
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
        <div className="shape-buttons">
          <button onClick={handleSquare}>Square</button>
          <button onClick={handleEllipse}>Ellipse</button>
          <button onClick={handleCircle}>Circle</button>
          <button onClick={handleRose}>Rose</button>
        </div>
        <Select
          value={animation}
          onChange={(e) => handleAnimationChange(e.target.value)}
        >
          <MenuItem value={'spin'}>Spin</MenuItem>
          <MenuItem value={'scan'}>Scan</MenuItem>
          <MenuItem value={'coil'}>Coil</MenuItem>
        </Select>
        <TextField
          placeholder={'Add a word...'}
          value={text}
          variant="outlined"
          onChange={(e) => handleTextInput(e.target.value)}
        />
      </div>

      <div className={inputDisplay ? 'centered-with-input' : 'centered'}>
        <Nest
          depth={depth}
          size={size}
          speed={speed}
          scale={scale}
          text={text}
          squat={squat}
          radius={radius}
          animation={animation}
        />
      </div>
    </div>
  );
}

export default App;
