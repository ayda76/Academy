const TextAreaField = ({
  label,
  name,
  register,
  validationSchema = {},
  required,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-secondary-700">
        {label} {required && <span className="text-error text-base">*</span>}
      </label>
      <textarea
        {...register(name, validationSchema)}
        className="border border-secondary-400 resize-none p-1.5 w-full text-sm rounded-md outline-none focus:shadow-sm bg-secondary-50"
        name={name}
        id={name}
        cols={3}
        rows={3}
      ></textarea>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextAreaField;
