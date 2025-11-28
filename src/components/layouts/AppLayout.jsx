import { Outlet, ScrollRestoration } from "react-router-dom";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Footer from "../footer/Footer";

const AppLayout = () => {
    return (
      <div className="app">
        <BurgerMenu />
        <main>
          <Outlet />
          <ScrollRestoration />
        </main>
        <Footer />
      </div>
    );
}

export default AppLayout