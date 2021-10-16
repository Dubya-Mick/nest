import './nest.css'
export const Nest = ({ depth, size, speed, scale }) => {

  if (depth < 1) return null;

  const style = {
    width: `${size}rem`,
    height: `${size}rem`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: `spin ${speed}s linear infinite`, 
    backgroundColor: 'white'
  }

  return (
    <div style={style}>
      <Nest depth={depth -= 1} size={size *= scale} speed={speed} scale={scale}/>
    </div>
  );
}