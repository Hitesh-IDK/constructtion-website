import { HomeIcon } from "@heroicons/react/16/solid";
import styles from "./co-founder.module.css";
import co_founder from "../../assets/co-founder.png";
import { Link } from "react-router-dom";

export default function CoFounder() {
  return (
    <div className={styles.co_founder}>
      <div className={styles.co_founder_container}>
        <div className={styles.left_section}>
          <h4 className={styles.title}>Interior Designer. Co-founder</h4>
          <h3 className={styles.name}>Keith Keller</h3>

          <div className={styles.description}>
            <p>
              Totam cillum molestie a dolore alias diamlorem corrupti.
              Exercitationem iure. Risus maxime mollis molestias exercitation
              nascetur non repudiandae sit voluptates velit praesentium! Netus
              natus dicta nibh condimentum porta congue platea cras lacinia
              pretium, explicabo qui praesent duis minima hendrerit. Voluptas
              illum duis voluptas dignissimos saepe suspendisse veritati.
            </p>

            <p>
              Maxime suscipit odit nihil, adipiscing odio ipsa mollit sagittis
              nostra egestas pariatur porttitor feugiat cras class porttitor.
            </p>
          </div>

          <div className={styles.sub_title}>Get In Touch</div>

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

          <div className={styles.background_text}>
            <h2>Keith Keller</h2>
          </div>
        </div>
        <div className={styles.right_section}>
          <img src={co_founder} alt="co-founder" className={styles.image} />
          <p className={styles.right_description}>
            Vero purus, praesent dictumst
          </p>
        </div>
      </div>
    </div>
  );
}
