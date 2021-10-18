import './nest.css';
export const Nest = ({
  depth,
  size,
  speed,
  scale,
  shape,
  text,
  squat,
  radius,
  animation,
}) => {
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
