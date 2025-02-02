import styles from "./testimonial.module.css";

interface props {
  name: string;
  description: string;
  image: string;
}

export default function Testimonial(props: props) {
  const { name, description, image } = props;

  return (
    <div className={styles.testimonial}>
      <p className={styles.description}>"{description}"</p>
      <div className={styles.author}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <h4 className={styles.name}>{name}.</h4>
      </div>
    </div>
  );
}
