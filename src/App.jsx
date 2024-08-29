import React, { Suspense } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
const Foo = React.lazy(() => import("./Foo"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            {/* <Link to="/foo">
              <button>Go to Foo</button>
            </Link> */}
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          {/* <Routes>
            <Route path="/foo" element={<Foo />} />
          </Routes> */}
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
