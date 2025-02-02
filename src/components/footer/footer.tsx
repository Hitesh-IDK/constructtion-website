import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const services: string[][] = [
    ["About Us", "/about/#"],
    ["Portfolio", "/portfolio/#"],
    ["Testimonials", "/testimonials"],
    ["Contact", "/contact"],
  ];

  const socials: string[][] = [
    ["Facebook", "#"],
    ["Twitter (X)", "#"],
    ["Instagram", "#"],
    ["Linkedin", "#"],
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.first_section}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p className={styles.description}>
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice.
            </p>
          </div>
          <div className={styles.second_section}>
            <h3 className={styles.title}>Our Company</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service[1]} className={styles.links}>
                    {service[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.third_section}>
            <h3 className={styles.title}>Get In Touch</h3>
            <ul>
              {socials.map((social, index) => (
                <li key={index}>
                  <Link to={social[1]} className={styles.links}>
                    {social[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.fourth_section}>
            <h3 className={styles.title}>Contact Info</h3>
            <address>123 Fifth Avenue, Lane no 17, New York NY 688101.</address>
            <div>123-456-7890/91</div>
            <div>contact@example.com</div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <div className={styles.copyright_container}>
          <div>Copyright © 2025 Hitesh Design Firm</div>
          <div>Powered by Hitesh Design Firm</div>
        </div>
      </div>
    </>
  );
}
