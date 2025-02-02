import styles from "./our-team.module.css";
import team_member from "../../assets/team-member.png";

export default function OurTeam() {
  return (
    <div className={styles.our_team}>
      <div className={styles.our_team_container}>
        <h3 className={styles.title}>Meet Our Team</h3>
        <p className={styles.description}>
          A descriptive paragraph that tells clients how good you are and proves
          that you are the best choice.
        </p>
        <div className={styles.team_members}>
          <div className={styles.team_member}>
            <img src={team_member} alt="team member" className={styles.image} />
            <h4 className={styles.name}>Sam Smith</h4>
            <p className={styles.position}>Lead Interior Designer</p>
          </div>
          <div className={styles.team_member}>
            <img src={team_member} alt="team member" className={styles.image} />
            <h4 className={styles.name}>Sam Smith</h4>
            <p className={styles.position}>Lead Interior Designer</p>
          </div>
          <div className={styles.team_member}>
            <img src={team_member} alt="team member" className={styles.image} />
            <h4 className={styles.name}>Sam Smith</h4>
            <p className={styles.position}>Lead Interior Designer</p>
          </div>
        </div>

        <div className={styles.background_text}>
          <h2>Our Team</h2>
        </div>
      </div>
    </div>
  );
}
