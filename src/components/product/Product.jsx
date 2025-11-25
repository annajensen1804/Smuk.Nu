import styles from './product.module.css'

const Product = ({product}) => {
    return (
        <div className={styles.product}>
            <img className={styles.productImg} src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <div className={styles.priceButton}>
                <p style={{fontWeight:'bold'}}>{product.price},00 kr.</p>
                <button className={styles.productBtn}>KØB</button>
            </div>
            
        </div>
    )
}

export default Product