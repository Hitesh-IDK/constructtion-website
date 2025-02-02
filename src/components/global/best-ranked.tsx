import styles from "./best-ranked.module.css";
import fake_logo_1 from "../../assets/fake-logo-1.png";
import fake_logo_2 from "../../assets/fake-logo-2.png";

export default function BestRanked() {
  return (
    <div className={styles.best_ranked}>
      <div>Best Ranked By</div>

      <div>
        <img src={fake_logo_1} alt="award icon" />
        <img src={fake_logo_2} alt="award icon" />
        <img src={fake_logo_1} alt="award icon" />
        <img src={fake_logo_2} alt="award icon" />
        <img src={fake_logo_1} alt="award icon" />
        <img src={fake_logo_2} alt="award icon" />
      </div>
    </div>
  );
}
