import {
  EnvelopeIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import styles from "./contact-details.module.css";
import { Link } from "react-router-dom";

export default function ContactDetails() {
  return (
    <div className={styles.contact_details}>
      <div className={styles.title_container}>
        <div className={styles.content}>
          <h3 className={styles.title}>Contact Details</h3>
          <p className={styles.description}>
            You can use a few enticing words and flaunt your capabilities that
            will attract future clients and encourage them to hire you right
            away.
          </p>
        </div>

        <div className={styles.social_links}>
          <Link to="#" className={styles.social_link}>
            <HomeIcon className="h-8 w-8" color="white" />
          </Link>
          <Link to="#" className={styles.social_link}>
            <HomeIcon className="h-8 w-8" color="white" />
          </Link>
          <Link to="#" className={styles.social_link}>
            <HomeIcon className="h-8 w-8" color="white" />
          </Link>
          <Link to="#" className={styles.social_link}>
            <HomeIcon className="h-8 w-8" color="white" />
          </Link>
        </div>
      </div>

      <div className={styles.details_container}>
        <div className={styles.details}>
          <div>
            <div className={styles.icon_container}>
              <MapPinIcon
                className={`h-10 w-10 ${styles.icon}`}
                color="#f6a131"
              />
            </div>
          </div>
          <div>
            <div className={styles.label}>Address</div>
            <address className={styles.value}>
              123 Fifth Avenue, NY 10160 Lane no 17, New York NY688101
            </address>
          </div>
        </div>

        <div className={styles.details}>
          <div>
            <div className={styles.icon_container}>
              <EnvelopeIcon className="h-10 w-10" color="#f6a131" />
            </div>
          </div>
          <div>
            <div className={styles.label}>Email Us</div>
            <p className={styles.value}>contact@example.com</p>
            <p className={styles.value}>hello@example.com</p>
          </div>
        </div>

        <div className={styles.details}>
          <div>
            <div className={styles.icon_container}>
              <PhoneIcon className="h-10 w-10" color="#f6a131" />
            </div>
          </div>
          <div>
            <div className={styles.label}>Call Us</div>
            <p className={styles.value}>123-456-7890</p>
            <p className={styles.value}>123-456-7891</p>
          </div>
        </div>
      </div>
    </div>
  );
}
