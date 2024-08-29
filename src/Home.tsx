// import { Link } from "react-router-dom";
import { Outlet } from "../node_modules/react-router-dom/dist/index";

export const Home = () => {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
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
      <Outlet />
    </div>
  );
};
