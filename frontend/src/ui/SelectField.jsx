const SelectField = ({
  required,
  label,
  name,
  register,
  validationSchema = {},
  isLoading = false,
  errors,
  options,
  multiple = false,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error text-base">*</span>}
      </label>
      {isLoading ? (
        <div className="w-full p-5 bg-secondary-400 animate-pulse rounded-md"></div>
      ) : (
        <select
          multiple={multiple}
          id={name}
          {...register(name, validationSchema)}
          className="border border-secondary-400 p-1 w-full text-sm rounded-md outline-none focus:shadow-sm bg-secondary-50"
        >
          {options?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
      )}
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default SelectField;
