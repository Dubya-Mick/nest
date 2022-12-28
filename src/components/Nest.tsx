import { useEffect, useState, useRef } from 'react';
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
  rippleTime: number;
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
  rippleTime,
}: Props): JSX.Element | null => {
  const [rippleOut, setRippleOut] = useState(false);
  const intervalRef: { current: number | null } = useRef(null);

  useEffect(() => {
    if (ripple) {
      window.setTimeout(() => {
        const id = window.setInterval(() => {
          setRippleOut((rippleOut) => !rippleOut);
        }, 1200);

        intervalRef.current = id;
        return;
      }, rippleTime);
    }
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  }, [ripple]);

  if (depth < 1) return null;

  const style = {
    width: `${rippleOut ? size * 1.2 : size}rem`,
    height: `${rippleOut ? (size * 1.2) / squat : size / squat}rem`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: `${animation} ${speed}s linear infinite`,
    backgroundColor: 'white',
    borderRadius: `${radius}%`,
    transition: 'border-radius 1s, width 1s, height 1s',
  };

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
        rippleTime={(rippleTime *= 1.2)}
      />
    </div>
  );
};
