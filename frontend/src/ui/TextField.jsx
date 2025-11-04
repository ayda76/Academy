const TextField = ({
  label,
  name,
  register,
  validationSchema = {},
  type = "text",
  required,
  errors,
  inputMode = "",
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error text-base">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        className="border border-secondary-400 p-1.5 w-full text-sm rounded-md outline-none focus:shadow-sm bg-secondary-50"
        type={type}
        autoComplete="off"
        inputMode={inputMode}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
