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
    <div className=" mt-[25px] flex flex-col items-start">
      <label
        htmlFor={id}
        className="block text-sm mb-[5px] text-[16px] leading-[28px] font-medium text-black"
      >
        {label} {required && <span className="text-black font-bold">*</span>}
      </label>
      {type === "text" || type === "email" ? (
        <input
          placeholder={label}
          type={type}
          id={id}
          className="block w-full h-[60px]  border-black border rounded-[14px]   sm:text-sm"
          {...props}
        />
      ) : (
        <textarea
          placeholder={label}
          id={id}
          className="h-[190px] resize-none block w-full rounded-[14px]  border-black border   sm:text-sm"
          {...props}
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className=" flex flex-col max-w-[556px] mr-auto">
      <InputField label="Name" required={false} type="text" id="name" />
      <InputField label="Email" required={true} type="email" id="email" />
      <InputField
        label="Maessage"
        required={false}
        type="textarea"
        id="message"
      />
      <div className="mt-[25px]" />
      <MainSecBtn label="Send Message" className="w-full" />
    </div>
  );
};

export default ContactForm;
