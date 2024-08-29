import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { browserRouter } from "./AppRouter";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={browserRouter} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
