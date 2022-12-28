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

//test comment

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
  const [ripple, setRipple] = useState(false);
  const [rippleTime, setRippleTime] = useState(500);

  const { toggleRecording, speechState, segment } = useSpeechContext();

  useEffect(() => {
    if (segment === undefined) return;

    parseSegment(segment);
  }, [segment]);

  const handleToggleRipple = () => {
    setRipple(!ripple);
  };

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
      return newSize > 50 ? 50 : newSize;
    });
  };

  const decreaseSize = () => {
    setSize((size) => {
      const newSize = size * 0.9;
      return newSize < 10 ? 10 : newSize;
    });
  };

  const increaseSpeed = () => {
    setSpeed((speed) => {
      const newSpeed = speed * 0.9;
      return newSpeed < 5 ? 5 : newSpeed;
    });
  };

  const decreaseSpeed = () => {
    setSpeed((speed) => {
      const newSpeed = speed * 1.1;
      return newSpeed > 50 ? 50 : newSpeed;
    });
  };

  const increaseBorderRadius = () => {
    setRadius((radius) => {
      if (radius === 0) return 10;
      const newRadius = radius + 10;
      if (newRadius > 50) return 50;
      return newRadius;
    });
  };

  const decreaseBorderRadius = () => {
    setRadius((radius) => {
      const newRadius = radius - 10;
      return newRadius < 1 ? 0 : newRadius;
    });
  };

  const increaseSquat = () => {
    setSquat((squat) => {
      const newSquat = squat + 2;
      return newSquat > 10 ? 10 : newSquat;
    });
  };

  const decreaseSquat = () => {
    setSquat((squat) => {
      const newSquat = squat - 2;
      return newSquat < 1 ? 1 : newSquat;
    });
  };

  const increaseScale = () => {
    setScale((scale) => {
      const newScale = scale + 0.02;
      return newScale > 0.9 ? 0.9 : newScale;
    });
  };

  const decreaseScale = () => {
    setScale((scale) => {
      const newScale = scale - 0.02;
      return newScale > 0.7 ? 0.7 : newScale;
    });
  };

  const increaseDepth = () => {
    setDepth((depth) => {
      const newDepth = depth + 10;
      return newDepth > 60 ? 60 : newDepth;
    });
  };

  const decreaseDepth = () => {
    setDepth((depth) => {
      const newDepth = depth - 5;
      return newDepth < 1 ? 1 : newDepth;
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
        break;
      case 'speed':
        increaseSpeed();
        break;
      case 'roundness':
        increaseBorderRadius();
        break;
      case 'squat':
        increaseSquat();
        break;
      case 'scale':
        increaseScale();
        break;
      case 'depth':
        increaseDepth();
        break;
    }
  };

  const handleVoiceDecrease = (attribute: string | undefined) => {
    if (attribute === undefined) return;

    switch (attribute) {
      case 'size':
        decreaseSize();
        break;
      case 'speed':
        decreaseSpeed();
        break;
      case 'roundness':
        decreaseBorderRadius();
        break;
      case 'squat':
        decreaseSquat();
        break;
      case 'scale':
        decreaseScale();
        break;
      case 'depth':
        decreaseDepth();
        break;
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
          handleToggleRipple={handleToggleRipple}
          ripple={ripple}
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
            ripple={ripple}
            rippleTime={rippleTime}
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
