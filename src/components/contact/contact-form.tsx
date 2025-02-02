import styles from "./contact-form.module.css";
import man_and_woman from "../../assets/man-with-woman.png";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

export default function ContactForm() {
  return (
    <div className={styles.contact_form}>
      <img
        src={man_and_woman}
        alt="man and woman in suit"
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>Let's Discuss About Your Spaces!</h2>
        <div className={styles.description}>
          <p>
            A descriptive paragraph that tells clients how good you are and
            proves that you are the best choice that they’ve made.
          </p>
          <p>
            This paragraph is also for those who are looking out for a reliable
            interior design firm.
          </p>
        </div>

        <ul className={styles.content_list}>
          <li>
            <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
            Free Consultation
          </li>
          <li>
            <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
            Budget Quotations
          </li>
          <li>
            <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
            Latest Technologies
          </li>
          <li>
            <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
            Eco Friendly Constructions
          </li>
        </ul>
      </div>
      <form className={styles.form}>
        <input placeholder="Name" type="name" className={styles.input} />
        <input placeholder="Email" type="email" className={styles.input} />
        <input placeholder="Phone No" type="phone" className={styles.input} />
        <input placeholder="Subject" type="Subject" className={styles.input} />
        <textarea placeholder="Message" rows={5} className={styles.textarea} />

        <button className={styles.button} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
