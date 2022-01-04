import './App.css';
import { Nest } from './components/Nest';
import { Input } from './components/Input';
import { useState } from 'react';

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
    <div className="app-wrapper">
      {inputDisplay ? null : (
        <i
          onClick={handleToggleInput}
          className="fas fa-paint-brush display-input"
        ></i>
      )}
      <div className="main-container">
        <Input
          inputDisplay={inputDisplay}
          handleToggleInput={handleToggleInput}
          size={size}
          handleSizeChange={handleSizeChange}
          depth={depth}
          handleDepthChange={handleDepthChange}
          scale={scale}
          handleScaleChange={handleScaleChange}
          speed={speed}
          handleSpeedChange={handleSpeedChange}
          squat={squat}
          handleSquatChange={handleSquatChange}
          radius={radius}
          handleRadiusChange={handleRadiusChange}
          handleSquare={handleSquare}
          handleEllipse={handleEllipse}
          handleCircle={handleCircle}
          handleRose={handleRose}
          animation={animation}
          handleAnimationChange={handleAnimationChange}
          text={text}
          handleTextInput={handleTextInput}
        />
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
    </div>
  );
}

export default App;
