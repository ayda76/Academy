import { useState } from "react";
import { PiEyeSlashDuotone, PiEyeDuotone } from "react-icons/pi";

const PasswordField = ({
  label,
  name,
  register,
  validationSchema = {},
  required,
  errors,
  watch,
  autoComplete = "off",
}) => {
  const [type, setType] = useState("password");
  return (
    <>
      <label className="mb-2 block text-sm text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error text-base">*</span>}
      </label>
      <div className="relative">
        <input
          {...register(name, validationSchema)}
          id={name}
          className="border border-secondary-400 p-1.5 w-full text-sm rounded-md outline-none focus:shadow-sm bg-secondary-50"
          type={type}
          autoComplete={autoComplete}
          onCopy={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
        />
        {watch(name) && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setType(type === "password" ? "text" : "password")}
            className="absolute top-1/2 -translate-y-1/2 left-2 text-lg cursor-pointer"
          >
            {type === "password" ? <PiEyeDuotone /> : <PiEyeSlashDuotone />}
          </button>
        )}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </>
  );
};

export default PasswordField;
