import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export const Foo = () => {
  return (
    <div>
      <p>Foo V1</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export function ErrorBoundary() {
  const error = useRouteError() as Error;
  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{error.message || "Something Went Wrong"}</h1>
  );
}
