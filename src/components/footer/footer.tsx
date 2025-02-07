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
              RNS Constructions transforms ideas into reality, ensuring that
              every structure stands strong for generations to come.
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
            <div>+91 9900924999, +91 9886199889</div>
            <div>sunita.rnsc@gmail.com rajesh.rnsc@gmail.com</div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <div className={styles.copyright_container}>
          <div>Copyright © 2025 RNS Constructions</div>
          <div>Powered by RNS Design Firm</div>
        </div>
      </div>
    </>
  );
}
