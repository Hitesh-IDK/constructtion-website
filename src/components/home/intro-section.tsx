import { Link } from "react-router-dom";
import home_background from "../../assets/home-background.png";
import yellow_chair from "../../assets/yellow-chair.png";
import styles from "./intro-section.module.css";
import { ChevronRightIcon, MapPinIcon } from "@heroicons/react/16/solid";

export default function HomeIntroSection() {
  return (
    <div className={styles.intro_section}>
      <div className={styles.intro_container}>
        <div className={styles.intro_content}>
          <h1 className={styles.intro_title}>Modern Design Solutions</h1>
          <div className={styles.intro_description}>
            At RNS Constructions, we bring your vision to life with precision,
            innovation, and unwavering commitment to quality. With years of
            expertise in construction and infrastructure development, we deliver
            projects that stand the test of time.
          </div>

          <Link to="#" className={styles.intro_button}>
            See Our Projects{" "}
            <span>
              <ChevronRightIcon className="h-8 w-6" />
            </span>
          </Link>
        </div>
        <div className={styles.intro_image_container}>
          <img src={yellow_chair} alt="yellow chair" />
          <div className={styles.intro_address}>
            <MapPinIcon className="h-8 w-6" color="#f6a131" />
            123 Fifth Avenue, Lane no 17, New York
          </div>
        </div>
      </div>

      <div className={styles.home_img_container}>
        <div></div>
        <img src={home_background} alt="" className={styles.home_img} />
      </div>
    </div>
  );
}
