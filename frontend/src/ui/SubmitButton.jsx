
const SubmitButton = ({ children, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="bg-primary-800 disabled:bg-secondary-600 text-sm text-white rounded-md w-full p-1.5 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
