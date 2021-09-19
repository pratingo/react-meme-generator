import './App.css';
import MemeGenerator from './MemeGenerator.js';

// import { prependOnceListener } from 'process';
// import logo from './logo.svg';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: 'MintCream',
        height: '1000px',
        padding: '50px 50px',
      }}
    >
      <MemeGenerator />
    </div>
  );
}

export default App;
