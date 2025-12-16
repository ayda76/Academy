import { useState } from "react";
import StarRating from "./StarRating";
import SubmitButton from "../../../../ui/SubmitButton";
import useUser from "../../../../hooks/auth/useUser";
import { useParams } from "react-router-dom";
import useSubmitRating from "../../../../hooks/rating/useSubmitRating";

const SubmitRating = ({ courseName, onClose }) => {
  const { id } = useParams();
  const { user } = useUser();
  const [rateValue, setRateValue] = useState(0);
  const { submitRatingFn, isSubmiting } = useSubmitRating();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      rate: rateValue,
      profile_related: user?.id,
      course_related: id,
    };
    console.log(formData);
    submitRatingFn(formData, {
      onSuccess: () => onClose(),
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h5>به دوره {courseName} چه امتیازی میدهید؟</h5>
      <StarRating value={rateValue} setValue={setRateValue} />
      <SubmitButton disabled={!rateValue || isSubmiting}>ثبت</SubmitButton>
    </form>
  );
};

export default SubmitRating;
