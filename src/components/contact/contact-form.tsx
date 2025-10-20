import MainSecBtn from "../common/main-section-home/main-sec-btn";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputFieldProps {
  required: boolean;
  label: string;
  type: string;
  id: string;
  [key: string]: any;
}

const InputField = ({
  required,
  label,
  type,
  id,
  ...props
}: InputFieldProps) => {
  return (
    <div className="mt-4 sm:mt-6 lg:mt-[25px] flex flex-col items-start w-full">
      <label
        htmlFor={id}
        className="block text-sm mb-1 sm:mb-[5px] sm:text-[16px] leading-6 sm:leading-[28px] font-medium text-black"
      >
        {label} {required && <span className="text-black font-bold">*</span>}
      </label>
      {type === "text" || type === "email" ? (
        <input
          placeholder={label}
          type={type}
          id={id}
          className="block w-full h-[50px] sm:h-[60px] border-black border rounded-[14px] px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
          {...props}
        />
      ) : (
        <textarea
          placeholder={label}
          id={id}
          className="h-[120px] sm:h-[150px] lg:h-[190px] resize-none block w-full rounded-[14px] border-black border px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
          {...props}
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="flex flex-col w-full max-w-[556px] mx-auto lg:mr-auto lg:ml-0">
      <InputField label="Name" required={false} type="text" id="name" />
      <InputField label="Email" required={true} type="email" id="email" />
      <InputField
        label="Message"
        required={false}
        type="textarea"
        id="message"
      />
      <div className="mt-6 sm:mt-[25px]" />
      <MainSecBtn label="Send Message" className="w-full" />
    </div>
  );
};

export default ContactForm;
