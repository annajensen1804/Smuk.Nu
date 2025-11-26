import styles from './pageHeader.module.css'
import headerImg from '../../assets/images/header.jpg'
import Button from '../button/Button'
import Navigation from '../navigation/Navigation'

const PageHeader = ({titleOne, titleTwo, text, button, variant='default'}) => {
  
  /* Tilføjer variant som er en ekstra css-klass til headerInfo */
  const headerInfoClass = ` 
  ${styles.headerInfo} 
  ${styles[variant] || ""}`;
  /* Bruger variants navn ("home", "products"...) for at hente klassen fra css. 
  Hvis klassen ikke eksisterer, erstattes en tom streng for at undgå en fejl.*/

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <Navigation />

      <div className={headerInfoClass}>
        <h1>{titleOne}</h1>
        <h1>{titleTwo}</h1>
        <p>{text}</p>

        {button && <Button buttonText="Se udvalgte produkter" />}
      </div>
    </header>
  );
}

export default PageHeader