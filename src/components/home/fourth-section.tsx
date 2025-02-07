import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  CalendarDateRangeIcon,
  CircleStackIcon,
  Cog6ToothIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";
import styles from "./fourth-section.module.css";

export default function FourthSection() {
  return (
    <div className={styles.fourth_section}>
      <h4>Every Space Count</h4>
      <h3>Why Choose Us</h3>

      <div className={styles.feature_container}>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <CircleStackIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Unmatched Quality</div>
          <div className={styles.feature_description}>
            We use premium materials and advanced construction techniques to
            ensure durability and excellence in every project.
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <BriefcaseIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Experienced Professionals</div>
          <div className={styles.feature_description}>
            Our team of skilled engineers, architects, and project managers
            bring years of expertise to deliver top-tier solutions.
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <CalendarDateRangeIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Timely Project Delivery</div>
          <div className={styles.feature_description}>
            We value your time and ensure projects are completed on schedule
            without compromising on quality.
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <Cog6ToothIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>
            Innovative & Sustainable Designs
          </div>
          <div className={styles.feature_description}>
            We integrate modern construction practices with eco-friendly
            solutions for a sustainable future.
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <UserPlusIcon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Customer-Centric Approach</div>
          <div className={styles.feature_description}>
            Your vision is our priority. We collaborate closely to ensure every
            project meets your expectations.
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon_container}>
            <BuildingOffice2Icon className="h-14 w-14" color="#f6a131" />
          </div>
          <div className={styles.feature_title}>Strong Legacy & Trust</div>
          <div className={styles.feature_description}>
            With a proven track record of successful projects, we have earned
            the trust of clients across industries.
          </div>
        </div>
      </div>

      <div className={styles.background_text}>
        <h2>Every Space Count</h2>
      </div>
    </div>
  );
}
