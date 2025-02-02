import styles from "./main-title-section.module.css";
import lounge from "../../assets/lounge.png";

export default function MainTitleSection() {
  return (
    <div className={styles.main_section}>
      <div className={styles.title_info}>Our Exclusive Client</div>
      <div className={styles.title}>Project Sites</div>
      <div className={styles.description}>
        We Have Solutions for All Your Space Related Issues!
      </div>

      <div className={styles.main_img_container}>
        <div></div>
        <img src={lounge} alt="" className={styles.main_img} />
      </div>
    </div>
  );
}
