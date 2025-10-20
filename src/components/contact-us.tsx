import SectionHeader from "./common/section-header";
import ContactForm from "./contact/contact-form";

const ContactUs = () => {
  return (
    <div className="overflow-hidden">
      <SectionHeader
        title="Contact Us"
        description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
      />
      <div className="min-h-[400px] sm:min-h-[600px] lg:h-[773px] relative bg-gray py-8 sm:py-12 lg:py-[62px] px-4 sm:px-6 lg:px-[100px] rounded-[45px] mt-12 sm:mt-16 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
          <div className=" hidden  w-full lg:w-1/2 lg:kflex justify-center lg:justify-end">
            <img
              src="/assets/contact-us.png"
              className="h-[300px] sm:h-[400px] lg:h-[648px] w-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[691px] object-cover lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[-324px]"
              alt="contact-us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
