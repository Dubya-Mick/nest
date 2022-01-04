import { Slider, Select, MenuItem, TextField } from '@mui/material';
import rose from '../icons/rose.svg';
import './input.css';

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
  handleSquare,
  handleEllipse,
  handleCircle,
  handleRose,
  animation,
  handleAnimationChange,
  text,
  handleTextInput,
}) => {
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
            onChange={(e) => handleSizeChange(e.target.value)}
          />
        </div>
        <div className="slider-wrapper">
          <span>Depth</span>
          <Slider
            min={1}
            max={60}
            step={1}
            value={depth}
            onChange={(e) => handleDepthChange(e.target.value)}
          />
        </div>
        <div className="slider-wrapper">
          <span>Scale</span>
          <Slider
            min={0.7}
            max={0.9}
            step={0.01}
            value={scale}
            onChange={(e) => handleScaleChange(e.target.value)}
          />
        </div>
        <div className="slider-wrapper">
          <span>Loop Time</span>
          <Slider
            min={5}
            max={50}
            step={1}
            value={speed}
            onChange={(e) => handleSpeedChange(e.target.value)}
          />
        </div>
        <div className="slider-wrapper">
          <span>Squat</span>
          <Slider
            min={1}
            max={10}
            value={squat}
            step={0.2}
            onChange={(e) => handleSquatChange(e.target.value)}
          />
        </div>
        <div className="slider-wrapper">
          <span>Border Radius</span>
          <Slider
            min={0}
            max={50}
            value={radius}
            step={2}
            onChange={(e) => handleRadiusChange(e.target.value)}
          />
        </div>
      </div>
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
        </div>
        <div className="text-and-animation">
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
      </div>
    </div>
  );
};
