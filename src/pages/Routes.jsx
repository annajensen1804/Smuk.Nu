import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import { homeLoader, productsLoader, qasLoader, reviewsLoader } from "../components/loaders/DataLoaders";
import ErrorElement from "../components/feedbackElements/ErrorElement";

import Home from "./Home";
import Products from "./Products"
import Faq from "./FAQ";
import Loading from "../components/loading/Loading";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />} hydrateFallbackElement={<Loading />} >
      <Route
        index
        element={<Home />}
        loader={homeLoader}
        errorElement={<ErrorElement />}
      />

      <Route
        path="products"
        element={<Products />}
        loader={homeLoader}
        errorElement={<ErrorElement />}
      />

      <Route
        path="faq"
        element={<Faq />}
        loader={qasLoader}
        errorElement={<ErrorElement />}
      />
    </Route>
  )
);

export default routes