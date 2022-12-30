export const getCurrentStyle = (
  size: number,
  squat: number,
  animation: string,
  speed: number,
  radius: number,
  rippleOut: boolean,
  backgroundColor: string
) => {
  const currentAnimation =
    animation === 'none' ? 'none' : `${animation} ${speed}s linear infinite`;

  const currentShadow =
    animation === 'none'
      ? '5px 5px 16px #5a5a5a, -5px -5px 16px #ffffff'
      : 'none';

  const currentWidth = `${rippleOut ? size * 1.2 : size}rem`;

  const currentHeight = `${rippleOut ? (size * 1.2) / squat : size / squat}rem`;

  const style = {
    backgroundColor,
    width: currentWidth,
    height: currentHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: currentAnimation,
    borderRadius: `${radius}%`,
    transition: 'border-radius 1s, width 1s, height 1s',
    boxShadow: currentShadow,
  };

  return style;
};
