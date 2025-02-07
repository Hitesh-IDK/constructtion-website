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
            We’re here to assist you with all your construction needs. Reach out
            to us for inquiries, project consultations, or any assistance.
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
            <p className={styles.value}>sunita.rnsc@gmail.com</p>
            <p className={styles.value}>rajesh.rnsc@gmail.com</p>
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
            <p className={styles.value}>+91 9900924999</p>
            <p className={styles.value}>+91 9886199889</p>
          </div>
        </div>
      </div>
    </div>
  );
}
