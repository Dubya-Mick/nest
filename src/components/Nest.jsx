import './nest.css'
export const Nest = ({ depth, size, speed, scale, shape }) => {

  if (depth < 1) return null;

  const square = {
    width: `${size}rem`,
    height: `${size}rem`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: `spin ${speed}s linear infinite`, 
    backgroundColor: 'white',
    transition: 'border-radius 1s, width 1s, height 1s',
  }

  const ellipse = {
    width: `${size}rem`,
    height: `${size / 2}rem`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: `spin ${speed}s linear infinite`, 
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'border-radius 1s, width 1s, height 1s',

  }


  return (
    <div style={shape === 'square' ? square : ellipse}>
      <Nest depth={depth -= 1} size={size *= scale} speed={speed} scale={scale} shape={shape}/>
    </div>
  );
}