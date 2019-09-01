import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [wasmModule, setWasmModule] = React.useState();

  const loadWasm = async () => {
    try {
      const wasm = await import('wasm-fetch-example');
      setWasmModule({ wasm });
      console.log('wasm set');
    } catch (err) {
      console.error(`Unexpected error in loadWasm. [Message: ${err.message}]`);
    }
  };

  const callFetch = async ({ wasm }: { wasm: any }) => {
    console.log('calling fetch');
    const res = await wasm.call_fetch();
    console.log(res);
  }

  // load wasm asynchronously
  wasmModule === undefined && loadWasm();

  if (wasmModule !== undefined) {
    callFetch(wasmModule);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
