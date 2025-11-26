import { useEffect, useState } from 'react';
import styles from './products.module.css'
import Product from '../product/Product';

const ProductList = ({titleOne, titleTwo}) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://smuknu-vomg9.ondigitalocean.app/products/")
            const data = await response.json();
            console.log(data);

            setProducts(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts();
      }, []);

    return (
      <section className={styles.productsContainer}>
        <h1 style={{ color: 'rgba(0, 0, 0, 1)',  }}>{titleOne}</h1>
        <h1 style={{ color: 'rgba(250, 150, 170, 1)', lineHeight:'1px', padding: '0 0 20px 0' }}>{titleTwo}</h1>
        
        {products.map((product) => (
            <Product product={product} key={product._id} />
        ))}
      </section>
    );
}

export default ProductList