import PageHeader from "../components/pageHeader/PageHeader";
import ProductList from "../components/products/ProductList";
import Member from "../components/member/Member";

const ProductsPage = () => {
  return (
    <section>
      <PageHeader
        variant="products"
        titleOne="SKØNNE"
        titleTwo="PRODUKTER"
        text="Herunder finder du alle vores produkter"
      />

      <ProductList titleOne="ALT ER" titleTwo="SKØNHED" />

      <Member />
    </section>
  );
};

export default ProductsPage;
