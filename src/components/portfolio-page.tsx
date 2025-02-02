import MainTitleSection from "./global/main-title-section";
import lounge from "../assets/lounge.png";
import Projects from "./portfolio/projects";

export default function PortfolioPage() {
  const title_info: string = "Our Exclusive Clien";
  const title: string = "Project Sites";
  const description: string =
    "We Have Solutions for All Your Space Related Issues!";

  return (
    <>
      <MainTitleSection
        title_info={title_info}
        title={title}
        description={description}
        image={lounge}
      />
      <Projects />
    </>
  );
}
