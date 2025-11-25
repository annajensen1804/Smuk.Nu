import styles from './footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
      <section className={styles.footerContainer}>
        <div className={styles.SoMeIcons}>
          <FaFacebook />
          <FaInstagram />
          <FaPinterest />
          <FaTwitter />
          <FaYoutube />
        </div>
        <p>mail@smuk.nu <br></br> +45 123 345 33</p>
      </section>
    );
}

export default Footer