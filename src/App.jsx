import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);

  return (
    <>
      {routes}
    </>
  );
}

export default App;
