import styles from './products.module.css'
import Product from '../product/Product';
import { useLoaderData } from 'react-router';

const ProductList = ({titleOne, titleTwo}) => {

    const data = useLoaderData()

    return (
      <section className={styles.productsContainer}>
        <h1 style={{ color: 'rgba(0, 0, 0, 1)',  }}>{titleOne}</h1>
        <h1 style={{ color: 'rgba(250, 150, 170, 1)', lineHeight:'1px', padding: '0 0 20px 0' }}>{titleTwo}</h1>
        
        {data.products.map((product) => (
            <Product product={product} key={product._id} />
        ))}
      </section>
    );
}

export default ProductList