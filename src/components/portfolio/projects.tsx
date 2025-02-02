import styles from "./projects.module.css";
import living_2 from "../../assets/living-room/2.png";
import living_3 from "../../assets/living-room/3.png";
import living_4 from "../../assets/living-room/4.png";
import living_5 from "../../assets/living-room/5.png";
import living_1 from "../../assets/living-room/1.png";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.project}>
        <div className={styles.project_content}>
          <h3 className={styles.project_title}>Living Room</h3>
          <p className={styles.project_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </p>
        </div>
        <img src={living_1} alt="living room 1" className={styles.image} />
        <img src={living_2} alt="living room 2" className={styles.image} />
        <img src={living_3} alt="living room 3" className={styles.image} />
        <img src={living_4} alt="living room 4" className={styles.image} />
        <img src={living_5} alt="living room 5" className={styles.image} />

        <div className={styles.background_text}>
          <h2>Living Room</h2>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.project_content}>
          <h3 className={styles.project_title}>Living Room</h3>
          <p className={styles.project_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </p>
        </div>
        <img src={living_1} alt="living room 1" className={styles.image} />
        <img src={living_2} alt="living room 2" className={styles.image} />
        <img src={living_3} alt="living room 3" className={styles.image} />
        <img src={living_4} alt="living room 4" className={styles.image} />
        <img src={living_5} alt="living room 5" className={styles.image} />

        <div className={styles.background_text}>
          <h2>Living Room</h2>
        </div>
      </div>
    </div>
  );
}
