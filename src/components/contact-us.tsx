import SectionHeader from "./common/section-header";
import ContactForm from "./contact/contact-form";

const ContactUs = () => {
  return (
    <div>
      <SectionHeader
        title="Contact Us"
        description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
      />
      <div className=" h-[773px] relative bg-gray py-[62px] px-[100px] rounded-[45px] mt-20">
        <ContactForm />
        <div className=" w-1/2">
          <img
            src="/assets/contact-us.png"
            className="h-[648px] w-[691px] top-1/2 -translate-y-1/2 absolute right-[-324px] object-cover"
            alt="contact-us"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
