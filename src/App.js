import logo from './logo.svg';
import './App.css';

function App() {
  console.log('hola');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React aa
        </a>
      </header>
    </div>
  );
}

export default App;
