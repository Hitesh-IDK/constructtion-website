import MainTitleSection from "./global/main-title-section";
import table_architecture from "../assets/table-architecture.png";
import ContactForm from "./contact/contact-form";
import ContactDetails from "./contact/contact-details";

export default function ContactPage() {
  const title_info: string = "Get In Touch";
  const title: string = "Contact Us";
  const description: string = "We Love to Hear from You!";

  return (
    <>
      <MainTitleSection
        title_info={title_info}
        title={title}
        description={description}
        image={table_architecture}
      />

      <ContactForm />
      <ContactDetails />
    </>
  );
}
