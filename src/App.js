import logo from './logo.svg';
import { useState } from 'react';
import egg from './egg.png';
import './App.css';


function App() {
  const [click, setClick] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={egg} className={click ? "App-logo" : "App-logo-active"} alt="logo" />
        <p>
          Egg is spinning...
        </p>
        <p>
          Hover to STOP spinning!
        </p>
      </header>
      <main>
        <button className="btn_spin" onClick={() => setClick(!click)}>
          eeee
        </button>
      </main>
    </div>
  );
}

export default App;
