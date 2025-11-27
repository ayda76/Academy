import { useEffect } from "react";
import { PiX } from "react-icons/pi";

const ModalSideBar = ({ title, open, children, onClose, className = "" }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <div
      className={`backdrop-blur-sm fixed top-0 left-0
           w-full h-screen ${open ? "bg-secondary-800/25 visible opacity-100" : "bg-transparent invisible opacity-0"} transition-all duration-400 z-50`}
    >
      <div
        className={`fixed top-0 right-0 ${open ? "translate-x-0" : "translate-x-full"}
     bg-secondary-0 shadow-lg transition-all duration-500 delay-75 ease-out
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
