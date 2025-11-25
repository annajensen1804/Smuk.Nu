import PageHeader from "../components/pageHeader/PageHeader";
import Products from "../components/products/Products";

const Home = () => {
    return (
      <section>
        <PageHeader
          titleOne="SKØNHED"
          titleTwo="FOR ALLE"
          text="Herunder har vi samlet spørgsmål og svar om sundhed."
          button
        />

        <Products
         titleOne="UDVALGT" 
         titleTwo="SKØNHED" 
        />

      </section>
    );
}

export default Home;