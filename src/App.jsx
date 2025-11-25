import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

function App() {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);

  return (
    <>
      {routes}
      <Footer />
    </>
  );
}

export default App;
