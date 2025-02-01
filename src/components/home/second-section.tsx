import styles from "./second-section.module.css";
import man_with_woman from "../../assets/man-with-woman.png";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function SecondSection() {
  return (
    <div className={styles.second_section}>
      <div className={styles.quote_section}>
        <h1>Interior Design</h1>
        <h2>
          Interior Design Doesn't Have to Be Expensive or Complicated! It Should
          Be Smart & User Friendly
        </h2>
      </div>

      <div className={styles.design_section}>
        <div className={styles.left_section}>
          <div className={styles.left_container}>
            <img src={man_with_woman} alt="Man and Woman in suit" />
            <p>Interior Solutions Owner & Co-Owner</p>
          </div>
        </div>

        <div className={styles.right_section}>
          <div className={styles.right_container}>
            <div className={styles.established}>
              <div>Established MMXVIII</div>
            </div>
            <h3 className={styles.right_title}>
              Interior Design Firm Based in New York
            </h3>
            <p className={styles.right_description}>
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they’ve made. This
              paragraph is also for those who are looking out for a reliable
              interior design firm.
            </p>
            <p className={styles.right_description}>
              You can use a few enticing words and flaunt your capabilities that
              will attract future clients and encourage them to hire you right
              away.
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
