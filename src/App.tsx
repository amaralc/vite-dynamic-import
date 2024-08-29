import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { browserRouter } from "./AppRouter";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={browserRouter} />
    </Suspense>
  );
}

export default App;
