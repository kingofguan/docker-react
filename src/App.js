import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boomer!  -e WATCHPACK_POLLING=true is required to enable auto refresh!
        </p>
        <p> Really </p>
        <p>
          By here, docker compose should be ready. The run command became much easier
        </p>
        <p>
          AWS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
