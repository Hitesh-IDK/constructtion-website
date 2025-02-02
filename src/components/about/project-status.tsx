import {
  BriefcaseIcon,
  RectangleGroupIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import styles from "./project-status.module.css";

export default function ProjectStatus() {
  return (
    <div className={styles.project_status}>
      <div className={styles.project_status_container}>
        <div className={styles.status}>
          <RectangleGroupIcon className="h-14 w-14" color="#f6a131" />
          <div className={styles.number}>352</div>
          <div className={styles.label}>Projects Completed</div>
        </div>
        <div className={styles.status}>
          <UserIcon className="h-14 w-14" color="#f6a131" />
          <div className={styles.number}>120+</div>
          <div className={styles.label}>Happy Customers</div>
        </div>
        <div className={styles.status}>
          <TrophyIcon className="h-14 w-14" color="#f6a131" />
          <div className={styles.number}>12</div>
          <div className={styles.label}>Awards Recieved</div>
        </div>
        <div className={styles.status}>
          <BriefcaseIcon className="h-14 w-14" color="#f6a131" />
          <div className={styles.number}>15</div>
          <div className={styles.label}>Years in Service</div>
        </div>
      </div>
    </div>
  );
}
