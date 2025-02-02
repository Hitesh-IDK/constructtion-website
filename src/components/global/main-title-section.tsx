import styles from "./main-title-section.module.css";

interface props {
  title_info: string;
  title: string;
  description: string;

  image: string;
}

export default function MainTitleSection(props: props) {
  const { title_info, title, description, image } = props;

  return (
    <div className={styles.main_section}>
      <div className={styles.title_info}>{title_info}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>

      <div className={styles.main_img_container}>
        <div></div>
        <img src={image} alt="main image" className={styles.main_img} />
      </div>
    </div>
  );
}
