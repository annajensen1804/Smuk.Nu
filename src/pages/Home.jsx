import PageHeader from "../components/pageHeader/PageHeader";
import Products from "../components/products/Products";
import Reviews from "../components/reviews/Reviews";

const Home = () => {
    return (
      <section>
        <PageHeader
          titleOne="SKØNHED"
          titleTwo="FOR ALLE"
          text="Herunder har vi samlet spørgsmål og svar om sundhed."
          button
        />

        <Products titleOne="UDVALGT" titleTwo="SKØNHED" />

        <Reviews
          titleOne="SKØNHEDER"
          titleTwo="UDTALER"
        />
      </section>
    );
}

export default Home;