import Testimonial from "../global/testimonial";
import styles from "./fifth-section.module.css";
import fake_human from "../../assets/fake_human.png";

export default function FifthSection() {
  return (
    <div className={styles.fifth_section}>
      <div className={styles.fifth_container}>
        <div className={styles.left_section}>
          <h4 className={styles.left_title_info}>Testimonials</h4>
          <h3 className={styles.left_title}>What Our Clients Say</h3>
          <p className={styles.left_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </p>

          <Testimonial
            name="Michelle P"
            image={fake_human}
            description="RNS Constructions has been a game-changer for our project. From the initial consultation to the final handover, their team demonstrated exceptional professionalism, transparency, and technical expertise. "
          />
        </div>
        <div className={styles.right_section}>
          <Testimonial
            name="John J"
            image={fake_human}
            description="Choosing RNS Constructions was the best decision we made for our dream home. Their team took the time to understand our requirements and delivered a home that not only met but exceeded our expectations. The entire process was smooth, and we were constantly updated on the progress. Their attention to detail, innovative designs, and use of high-quality materials made all the difference."
          />{" "}
          <Testimonial
            name="Smith T"
            image={fake_human}
            description="Professionalism, integrity, and excellence—RNS Constructions truly sets the benchmark for the construction industry!"
          />
        </div>

        <div className={styles.background_text}>
          <h2>Testimonials</h2>
        </div>
      </div>
    </div>
  );
}
