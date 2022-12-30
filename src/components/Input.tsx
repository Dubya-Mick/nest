import {
  Slider,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Switch,
} from '@mui/material';
import rose from '../icons/rose.svg';
import { Colors } from './Colors';
import './input.css';

type Props = {
  inputDisplay: boolean;
  handleToggleInput: () => void;
  size: number;
  handleSizeChange: (newSize: number) => void;
  depth: number;
  handleDepthChange: (newDepth: number) => void;
  scale: number;
  handleScaleChange: (newScale: number) => void;
  speed: number;
  handleSpeedChange: (newSpeed: number) => void;
  squat: number;
  handleSquatChange: (newSquat: number) => void;
  radius: number;
  handleRadiusChange: (newRadius: number) => void;
  ripple: boolean;
  handleToggleRipple: () => void;
  handleRippleDelayChange: (newTime: number) => void;
  rippleDelay: number;
  handleSquare: () => void;
  handleEllipse: () => void;
  handleCircle: () => void;
  handleRose: () => void;
  animation: string;
  handleAnimationChange: (newAnimation: string) => void;
  text: string;
  handleTextInput: (newTextInput: string) => void;
  handleAddBgColor: (color: string) => void;
  handleRemoveBgColor: (color: string) => void;
  backgroundColors: string[];
};

export const Input = ({
  inputDisplay,
  handleToggleInput,
  size,
  handleSizeChange,
  depth,
  handleDepthChange,
  scale,
  handleScaleChange,
  speed,
  handleSpeedChange,
  squat,
  handleSquatChange,
  radius,
  handleRadiusChange,
  ripple,
  handleToggleRipple,
  rippleDelay,
  handleRippleDelayChange,
  handleSquare,
  handleEllipse,
  handleCircle,
  handleRose,
  animation,
  handleAnimationChange,
  text,
  handleTextInput,
  handleAddBgColor,
  handleRemoveBgColor,
  backgroundColors,
}: Props) => {
  return (
    <div className={`input-container ${inputDisplay ? '' : 'hidden'}`}>
      <button className="toggle-input-button" onClick={handleToggleInput}>
        Hide
      </button>
      <div className="sliders">
        <div className="slider-wrapper">
          <span>Size</span>
          <Slider
            min={10}
            max={50}
            step={1}
            value={size}
            onChange={(e) =>
              handleSizeChange(parseInt((e.target as HTMLInputElement)!.value))
            }
          />
        </div>
        <div className="slider-wrapper">
          <span>Depth</span>
          <Slider
            min={1}
            max={60}
            step={1}
            value={depth}
            onChange={(e) =>
              handleDepthChange(parseInt((e.target as HTMLInputElement)!.value))
            }
          />
        </div>
        <div className="slider-wrapper">
          <span>Scale</span>
          <Slider
            min={0.7}
            max={0.9}
            step={0.01}
            value={scale}
            onChange={(e) =>
              handleScaleChange(
                parseFloat((e.target as HTMLInputElement)!.value)
              )
            }
          />
        </div>
        <div className="slider-wrapper">
          <span>Loop Time</span>
          <Slider
            min={5}
            max={50}
            step={1}
            value={speed}
            onChange={(e) =>
              handleSpeedChange(parseInt((e.target as HTMLInputElement)!.value))
            }
          />
        </div>
        <div className="slider-wrapper">
          <span>Squat</span>
          <Slider
            min={1}
            max={10}
            value={squat}
            step={0.2}
            onChange={(e) =>
              handleSquatChange(parseInt((e.target as HTMLInputElement)!.value))
            }
          />
        </div>
        <div className="slider-wrapper">
          <span>Border Radius</span>
          <Slider
            min={0}
            max={50}
            value={radius}
            step={2}
            onChange={(e) =>
              handleRadiusChange(
                parseInt((e.target as HTMLInputElement)!.value)
              )
            }
          />
        </div>
        {ripple ? (
          <div className="slider-wrapper">
            <span>Ripple Delay</span>
            <Slider
              min={100}
              max={1000}
              step={100}
              value={rippleDelay}
              onChange={(e) =>
                handleRippleDelayChange(
                  parseInt((e.target as HTMLInputElement)!.value)
                )
              }
            />
          </div>
        ) : null}
      </div>
      <Colors
        backgroundColors={backgroundColors}
        handleAddBgColor={handleAddBgColor}
        handleRemoveBgColor={handleRemoveBgColor}
      />
      <div className="buttons-et-al">
        <div className="shape-buttons">
          <button
            className="shape-button square"
            onClick={handleSquare}
          ></button>
          <button
            className="shape-button ellipse"
            onClick={handleEllipse}
          ></button>
          <button
            className="shape-button circle"
            onClick={handleCircle}
          ></button>
          <button className="rose" onClick={handleRose}>
            <img className="rose" src={rose} alt="rose"></img>
          </button>
          <FormControlLabel
            control={<Switch checked={ripple} onChange={handleToggleRipple} />}
            label="Ripple"
            labelPlacement="top"
          />
        </div>
        <div className="text-and-animation">
          <Select
            value={animation}
            onChange={(e) => handleAnimationChange(e.target.value)}
          >
            <MenuItem value={'spin'}>Spin</MenuItem>
            <MenuItem value={'scan'}>Scan</MenuItem>
            <MenuItem value={'coil'}>Coil</MenuItem>
            <MenuItem value={'breathe'}>Breathe</MenuItem>
            <MenuItem value={'none'}>None</MenuItem>
          </Select>
          <TextField
            placeholder={'Add a word...'}
            value={text}
            variant="outlined"
            onChange={(e) => handleTextInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
