import Member from "../components/member/Member";
import PageHeader from "../components/pageHeader/PageHeader";
import Products from "../components/products/ProductList";
import Reviews from "../components/reviews/Reviews";

const Home = () => {

  return (
    <section>
      <PageHeader
        variant="home"
        titleOne="SKØNHED"
        titleTwo="FOR ALLE"
        text="Herunder har vi samlet spørgsmål og svar om sundhed."
        button
      />

      <Products titleOne="UDVALGT" titleTwo="SKØNHED" />

      <Reviews titleOne="SKØNHEDER" titleTwo="UDTALER" />

      <Member />
    </section>
  );
};

export default Home;
