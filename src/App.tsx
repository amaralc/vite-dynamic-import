import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { browserRouter } from "./AppRouter";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error Caught by Top Level Error Boundary</div>} onError={(error, errorInfo) => console.log(error, errorInfo)}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={browserRouter} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
