import FifthSection from "./home/fifth-section";
import FourthSection from "./home/fourth-section";
import HomeIntroSection from "./home/intro-section";
import SecondSection from "./home/second-section";
import ThirdSection from "./home/third-section";

export default function HomePage() {
  return (
    <>
      <HomeIntroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </>
  );
}
