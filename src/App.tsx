import { useEffect } from 'react';
import './App.css';
import { Nest } from './components/Nest';
import { Input } from './components/Input';
import { useState } from 'react';
import { Microphone } from './components/Microphone';
import { useSpeechContext, SpeechSegment } from '@speechly/react-client';
import {
  IntentType,
  parseIntent,
  parseAttributeEntity,
  parseShapeEntity,
} from './parser';

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

  const { toggleRecording, speechState, segment } = useSpeechContext();

  useEffect(() => {
    if (segment === undefined) return;

    parseSegment(segment);
  }, [segment]);

  const handleDepthChange = (newDepth: number) => {
    setDepth(newDepth);
  };

  const handleScaleChange = (newScale: number) => {
    setScale(newScale);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  const handleSizeChange = (newSize: number) => {
    setSize(newSize);
  };

  const handleSquatChange = (newSquat: number) => {
    setSquat(newSquat);
  };

  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius);
  };

  const handleTextInput = (textInput: string) => {
    setText(textInput);
  };

  const handleAnimationChange = (newAnimation: string) => {
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

  const increaseSize = () => {
    setSize((size) => {
      const newSize = size * 1.1;
      if (newSize > 50) return 50;
      return newSize;
    });
  };

  const decreaseSize = () => {
    setSize((size) => {
      const newSize = size * 0.9;
      if (newSize < 10) return 10;
      return newSize;
    });
  };

  const handleVoiceShape = (shape: string | undefined) => {
    if (shape === undefined) return;

    switch (shape) {
      case 'square':
        handleSquare();
        break;
      case 'ellipse':
        handleEllipse();
        break;
      case 'circle':
        handleCircle();
        break;
      case 'rose':
        handleRose();
        break;
    }
  };

  const handleVoiceIncrease = (attribute: string | undefined) => {
    if (attribute === undefined) return;

    switch (attribute) {
      case 'size':
        increaseSize();
    }
  };

  const handleVoiceDecrease = (attribute: string | undefined) => {
    if (attribute === undefined) return;

    switch (attribute) {
      case 'size':
        decreaseSize();
    }
  };

  const parseSegment = (segment: SpeechSegment) => {
    const intent = parseIntent(segment);

    switch (intent) {
      case IntentType.SetShape:
        const shape = parseShapeEntity(segment);
        handleVoiceShape(shape);
        break;
      case IntentType.Increase:
        const attributeInc = parseAttributeEntity(segment);
        handleVoiceIncrease(attributeInc);
        break;
      case IntentType.Decrease:
        const attributeDec = parseAttributeEntity(segment);
        handleVoiceDecrease(attributeDec);
        break;
    }
  };

  console.log('render');

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
      <Microphone
        segment={segment}
        state={speechState}
        onRecord={toggleRecording}
      />
    </div>
  );
}

export default App;
