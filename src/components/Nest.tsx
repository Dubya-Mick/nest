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
}: Props): JSX.Element | null => {
  if (depth < 1) return null;

  const style = {
    width: `${size}rem`,
    height: `${size / squat}rem`,
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
      />
    </div>
  );
};
