import { useEffect, useState, useRef } from 'react';
import { getCurrentStyle } from '../helpers/getCurrentStyle';
import { handleColorIteration } from '../helpers/handleColorIteration';
import './nest.css';

type Props = {
  depth: number;
  size: number;
  speed: number;
  scale: number;
  text: string;
  squat: number;
  radius: number;
  animation: string;
  ripple: boolean;
  rippleDelay: number;
  baseRippleTime: number;
  backgroundColors: string[];
  currentColorIndex: number;
};

export const Nest = ({
  depth,
  size,
  speed,
  scale,
  text,
  squat,
  radius,
  animation,
  ripple,
  rippleDelay,
  baseRippleTime,
  backgroundColors,
  currentColorIndex,
}: Props): JSX.Element | null => {
  const [rippleOut, setRippleOut] = useState(false);
  const intervalRef: { current: number | null } = useRef(null);

  useEffect(() => {
    const handleRipple = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);

      if (ripple) {
        window.setTimeout(() => {
          const id = window.setInterval(() => {
            setRippleOut((rippleOut) => !rippleOut);
          }, 1200);

          intervalRef.current = id;
          return;
        }, baseRippleTime);
      }
    };

    handleRipple();
  }, [ripple, rippleDelay, baseRippleTime]);

  if (depth < 1) return null;

  const { currentColor, nextColorIndex } = handleColorIteration(
    backgroundColors,
    currentColorIndex
  );

  const style = getCurrentStyle(
    size,
    squat,
    animation,
    speed,
    radius,
    rippleOut,
    currentColor
  );

  return (
    <div style={style}>
      {text}
      <Nest
        depth={(depth -= 1)}
        size={(size *= scale)}
        speed={speed}
        scale={scale}
        text={text}
        squat={squat}
        radius={radius}
        animation={animation}
        ripple={ripple}
        rippleDelay={rippleDelay}
        baseRippleTime={(baseRippleTime += rippleDelay)}
        backgroundColors={backgroundColors}
        currentColorIndex={nextColorIndex}
      />
    </div>
  );
};
