import { useEffect, useState } from "react";

const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 bg-secondary-50 justify-center p-3">
      {timeLeft.days > 0 && <span>{timeLeft.days} روز</span>}
      {timeLeft.hours > 0 && <span>{timeLeft.hours} ساعت</span>}
      {timeLeft.minutes > 0 && <span>{timeLeft.minutes} دقیقه</span>}
      {timeLeft.seconds > 0 && <span>{timeLeft.seconds} ثانیه</span>}
      <span>تا پایان مهلت ثبت‌نام</span>
    </div>
  );
};

export default Countdown;
