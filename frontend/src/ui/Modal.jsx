import { PiX } from "react-icons/pi";

const Modal = ({ title, children, onClose, className = "" }) => {
  return (
    <div
      className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800/25 z-50"
    >
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg ${className}`}
      >
        <div className="flex items-center justify-between w-full p-1.5 border-b border-secondary-300">
          <span className="text-sm text-shadow-secondary-400 font-semibold">
            {title}
          </span>
          <PiX className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="p-4 py-2 overflow-y-auto max-h-[70vh] md:max-h-[calc(90vh-2rem)] text-right">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
