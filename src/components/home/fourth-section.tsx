import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import styles from "./fourth-section.module.css";

export default function FourthSection() {
  return (
    <div className={styles.fourth_section}>
      <h4>Every Space Count</h4>
      <h3>Why Choose Us</h3>

      <div className={styles.feature_container}>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <CalendarDateRangeIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Building Planning</div>
          <div className={styles.feature_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <CalendarDateRangeIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Building Planning</div>
          <div className={styles.feature_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <CalendarDateRangeIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Building Planning</div>
          <div className={styles.feature_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <CalendarDateRangeIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Building Planning</div>
          <div className={styles.feature_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <CalendarDateRangeIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Building Planning</div>
          <div className={styles.feature_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <CalendarDateRangeIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Building Planning</div>
          <div className={styles.feature_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </div>
        </div>
      </div>

      <div className={styles.background_text}>
        <h2>Every Space Count</h2>
      </div>
    </div>
  );
}
