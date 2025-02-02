import Testimonial from "../global/testimonial";
import styles from "./fifth-section.module.css";
import fake_human from "../../assets/fake_human.png";

export default function FifthSection() {
  return (
    <div className={styles.fifth_section}>
      <div className={styles.fifth_container}>
        <div className={styles.left_section}>
          <h4 className={styles.left_title_info}>Testimonials</h4>
          <h3 className={styles.left_title}>What Our Clients Say</h3>
          <p className={styles.left_description}>
            This is a short description elaborating the service you have
            mentioned above.
          </p>

          <Testimonial
            name="Michelle P"
            image={fake_human}
            description="Aptent mus quisque porttitor convallis tempora eaque blandit phasellus perspiciatis lectus, exercitationem Porttitor consectetur fugit ligula officiis rhoncus litora deserunt ratione curae beatae! Augue faucibu"
          />
        </div>
        <div className={styles.right_section}>
          <Testimonial
            name="John J"
            image={fake_human}
            description="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis dolor. Similique at tellus magna Adipisci facilisis optio incidunt, corrupti minus nibh sequi convallis magnam neque gravida vel consequatur mi iaculis magnis felis eleifend laboriosam explicabo fuga. Earum fugiat cillum harum!"
          />{" "}
          <Testimonial
            name="Smith T"
            image={fake_human}
            description="Aptent mus quisque porttitor convallis tempora eaque blandit phasellus perspiciatis lectus, exercitationem."
          />
        </div>

        <div className={styles.background_text}>
          <h2>Testimonials</h2>
        </div>
      </div>
    </div>
  );
}
