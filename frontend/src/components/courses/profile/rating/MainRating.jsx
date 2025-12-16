import { useState } from "react";
import Modal from "../../../../ui/Modal";
import SubmitRating from "./SubmitRating";

const MainRating = ({ courseName }) => {
  const [openRating, setOpenRating] = useState(false);
  const handleOpenRating = () => {
    setOpenRating(true);
  };
  const onClose = () => {
    setOpenRating(false);
  };
  return (
    <div className="space-y-4">
      <h5 className="font-semibold text-secondary-900">امتیاز</h5>
      <button
        onClick={handleOpenRating}
        className="text-purple-800 cursor-pointer"
      >
        ثبت امتیاز
      </button>
      {openRating && (
        <Modal title={"ثبت امتیاز"} onClose={onClose}>
          <SubmitRating courseName={courseName} onClose={onClose} />
        </Modal>
      )}
    </div>
  );
};

export default MainRating;
