import MainTitleSection from "./global/main-title-section";
import lounge_2 from "../assets/lounge-2.png";
import BestRanked from "./global/best-ranked";
import CoFounder from "./about/co-founder";
import ProjectStatus from "./about/project-status";
import OurTeam from "./about/our-team";

export default function AboutPage() {
  const title_info: string = "A Few Words About";
  const title: string = "Our Company";
  const description: string =
    "We don’t just build structures; we create foundations for a better tomorrow";

  return (
    <>
      <MainTitleSection
        title_info={title_info}
        title={title}
        description={description}
        image={lounge_2}
      />

      <CoFounder />
      <ProjectStatus />
      <OurTeam />

      <BestRanked />
    </>
  );
}
