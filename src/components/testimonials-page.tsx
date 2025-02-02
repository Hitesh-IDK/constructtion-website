import MainTitleSection from "./global/main-title-section";
import lights_roof from "../assets/lights-roof.png";
import TestimonialsSection from "./testimonials/testimonials-section";

export default function TestimonialsPage() {
  const title_info: string = "A Few Words About";
  const title: string = "Our Firm";
  const description: string = "Award Winning Interior Design Firm in New York";

  return (
    <>
      <MainTitleSection
        title_info={title_info}
        title={title}
        description={description}
        image={lights_roof}
      />

      <TestimonialsSection />
    </>
  );
}
