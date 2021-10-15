import './App.css';
import { Nest } from './components/Nest';

function App() {
  return (
    <div className="centered">
      <Nest limit={40} size={40} speed={40} />
    </div>
  );
}

export default App;
