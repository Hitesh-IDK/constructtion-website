import styles from "./testimonials-section.module.css";
import chair_background from "../../assets/chair.png";
import Testimonial from "../global/testimonial";
import fake_user from "../../assets/fake_human.png";

export default function TestimonialsSection() {
  const testimonials1: { name: string; description: string; image: string }[] =
    [
      {
        name: "Michelle P",
        description:
          "Aptent mus quisque porttitor convallis tempora eaque blandit phasellus perspiciatis lectus, exercitationem Porttitor consectetur fugit ligula officiis rhoncus litora deserunt ratione curae beatae! Augue faucibu",
        image: fake_user,
      },

      {
        name: "John J",
        description:
          "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis dolor. Earum fugiat cillum harum!",
        image: fake_user,
      },

      {
        name: "Smith T",
        description:
          "Aptent mus quisque porttitor convallis tempora eaque blandit phasel usr spici atis lectus, excitationem.",
        image: fake_user,
      },
    ];

  const testimonials2: { name: string; description: string; image: string }[] =
    [
      {
        name: "John J",
        description:
          "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis dolor. Similique at tellus magna Adipisci facilisis optio incidunt, corrupti minus nibh sequi convallis magnam neque gravida vel consequatur mi iaculis magnis felis eleifend laboriosam explicabo fuga. Earum fugiat cillum harum!",
        image: fake_user,
      },
      {
        name: "John J",
        description:
          " Aptent mus quisque porttitor convallis tempora eaque blandit phasellus perspiciatis lectus, exercitationem.",
        image: fake_user,
      },
      {
        name: "Smith T",
        description:
          "Mvallis tempora eaque blandit phasellus perspiciatis lectus, exercitationem Porttitor consectetur fugit ligula officiis rhoncus litora deserunt ratione curae beatae! Augue faucibu",
        image: fake_user,
      },
    ];

  return (
    <div
      style={{ backgroundImage: `url(${chair_background})` }}
      className={styles.testimonials}
    >
      <div className={styles.testimonials_section}>
        <div className={styles.testimonials_container}>
          {testimonials1.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              description={testimonial.description}
              image={testimonial.image}
            />
          ))}
        </div>

        <div className={styles.testimonials_container}>
          {testimonials2.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              description={testimonial.description}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
