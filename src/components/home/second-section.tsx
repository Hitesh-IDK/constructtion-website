import styles from "./second-section.module.css";
import man_with_woman from "../../assets/man-with-woman.png";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function SecondSection() {
  return (
    <div className={styles.second_section}>
      <div className={styles.quote_section}>
        <h1>Construction Design</h1>
        <h2>
          We don’t just build structures; we create foundations for a better
          tomorrow
        </h2>
      </div>

      <div className={styles.design_section}>
        <div className={styles.left_section}>
          <div className={styles.left_container}>
            <img src={man_with_woman} alt="Man and Woman in suit" />
            <p>RNS Constructions Owner & Co owner</p>
          </div>
        </div>

        <div className={styles.right_section}>
          <div className={styles.right_container}>
            <div className={styles.established}>
              <div>Established MMXVIII</div>
            </div>
            <h3 className={styles.right_title}>
              Construction Company Based In Bangalore
            </h3>
            <p className={styles.right_description}>
              At RNS Constructions, we are more than just builders—we are
              creators of lasting landmarks. With a passion for innovation and a
              commitment to quality, we specialize in delivering world-class
              residential, commercial, and infrastructure projects. Our expert
              team ensures that every structure reflects precision, durability,
              and sustainability.
            </p>
            <p className={styles.right_description}>
              Driven by integrity, powered by expertise—building a better
              future, one project at a time.
            </p>

            <Link to="#" className={styles.right_button}>
              Know More
              <span>
                <ChevronRightIcon className="h-8 w-6" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
