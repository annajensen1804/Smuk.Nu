import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";
import Footer from "./components/footer/Footer";
import Products from "./pages/Products";
import FAQ from "./pages/FAQ"

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/faq", element: <FAQ /> },
  ]);

  return (
    <>
      <BurgerMenu />
      {routes}
      <Footer />
    </>
  );
}

export default App;
