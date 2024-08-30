import { Suspense } from "react";
// import { RouterProvider } from "react-router-dom";
import "./App.css";
// import { browserRouter } from "./AppRouterV6";
import ErrorBoundary from "./ErrorBoundary";
import { AppRouterV5 } from "./AppRouterV5";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouterV5 />
        {/* <RouterProvider router={browserRouter} /> */}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
