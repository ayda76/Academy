import { useEffect } from "react";
import { PiX } from "react-icons/pi";

const ModalSideBar = ({ title, children, onClose, className = "" }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800/25 z-50"
    >
      <div
        className={`fixed top-0 right-0
     bg-secondary-0 shadow-lg transition-all duration-500 ease-out
        w-[250px] h-full ${className}`}
      >
        <div className="flex items-center justify-between w-full p-2.5 border-b border-secondary-300">
          <span className="text-sm text-shadow-secondary-400 font-semibold">
            {title}
          </span>
          <PiX className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="p-2 pt-4">{children}</div>
      </div>
    </div>
  );
};

export default ModalSideBar;
