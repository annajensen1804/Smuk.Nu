import styles from './pageHeader.module.css'
import headerImg from '../../assets/images/header.jpg'
import Button from '../button/Button'

const PageHeader = ({titleOne, titleTwo, text, button}) => {
    return (
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className={styles.headerInfo}>
          <h1>{titleOne}</h1>
          <h1>{titleTwo}</h1>
          <p>{text}</p>
          
          {button && (
            <Button 
            buttonText="Se udvalgte produkter" />)}
        </div>
      </header>
    );
}

export default PageHeader