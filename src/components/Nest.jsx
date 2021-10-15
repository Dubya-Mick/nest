import './nest.css'
export const Nest = ({ limit, size, speed }) => {

  if (limit < 1) return null;

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
      <Nest limit={limit -= 1} size={size *= 0.9} speed={speed}/>
    </div>
  );
}