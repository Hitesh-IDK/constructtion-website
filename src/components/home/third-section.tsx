import styles from "./third-section.module.css";
import yellow_window from "../../assets/yellow-window.png";
import { Link } from "react-router-dom";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export default function ThirdSection() {
  return (
    <div className={styles.third_section}>
      <div className={styles.content_container}>
        <div className={styles.content}>
          <div className={styles.title_info}>Our Recent</div>
          <h3 className={styles.title}>Award Winning Projects</h3>
          <div className={styles.description}>
            <p>
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they’ve made.
            </p>
            <p>
              This paragraph is also for those who are looking out for a
              reliable interior design firm.
            </p>
          </div>

          <ol className={styles.content_list}>
            <li>
              <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
              NY Interior Design Firm of The Year - 2020
            </li>
            <li>
              <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
              US Best Interior Firm - 2020
            </li>
            <li>
              <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
              International Design Awards Nominee - 2019
            </li>
          </ol>

          <Link to="#" className={styles.button}>
            View All Projects{" "}
            <span>
              <ChevronRightIcon className="h-8 w-6" />
            </span>
          </Link>
        </div>
      </div>

      <div className={styles.window_img_container}>
        <div></div>
        <img src={yellow_window} alt="" className={styles.window_img} />
      </div>
    </div>
  );
}
