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
              With a legacy of successful projects and a commitment to timely
              delivery, RNS Constructions transforms ideas into reality,
              ensuring that every structure stands strong for generations to
              come.
            </p>
            <p>Built on trust, designed for the future.</p>
          </div>

          <ol className={styles.content_list}>
            <li>
              <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
              Adittri Lotus (KAIWARA) - 2025
            </li>
            <li>
              <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
              Luxrious Apartments With Amenities
            </li>
            <li>
              <CheckCircleIcon className="h-7 w-7" color="#f6a131" />
              RERA Approved Project
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
