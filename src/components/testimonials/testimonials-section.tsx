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
          "Working with RNS Constructions was an absolute pleasure. They provided us with a seamless experience from start to finish. The team was always available for discussions, provided valuable insights, and incorporated all our requirements with precision.",
        image: fake_user,
      },

      {
        name: "John J",
        description:
          "Exceptional craftsmanship and dedication! RNS Constructions delivered our dream home with top-notch quality and within budget.",
        image: fake_user,
      },

      {
        name: "Smith T",
        description:
          "Professionalism, integrity, and excellence—RNS Constructions truly sets the benchmark for the construction industry!",
        image: fake_user,
      },
    ];

  const testimonials2: { name: string; description: string; image: string }[] =
    [
      {
        name: "John J",
        description:
          "We collaborated with RNS Constructions for a large-scale industrial project, and I must say, their expertise in handling complex projects is commendable. The team was highly professional, knowledgeable, and always ready to address any concerns. They followed all safety regulations and ensured that the construction was done in an environmentally responsible manner. Their ability to deliver within budget and on time, without compromising on structural integrity, is truly remarkable.",
        image: fake_user,
      },
      {
        name: "John J",
        description:
          "We partnered with RNS Constructions for our residential project, and they delivered on every promise. Reliable, efficient, and skilled!",
        image: fake_user,
      },
      {
        name: "Smith T",
        description:
          "Their commitment to customer satisfaction is evident in every aspect of their work. If you are looking for a trustworthy construction company, RNS Constructions is the way to go!",
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
