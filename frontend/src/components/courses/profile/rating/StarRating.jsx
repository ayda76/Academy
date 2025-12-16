import { useState } from "react";

const StarRating = ({ value = 0, setValue }) => {
  const [hoverValue, setHoverValue] = useState(null);

  const displayValue = hoverValue !== null ? hoverValue : value;

  const getStarFill = (index) => {
    if (displayValue >= index + 1) return "full";
    if (displayValue >= index + 0.5) return "half";
    return "empty";
  };

  const handleClick = (index, isHalf) => {
    const newValue = index + (isHalf ? 0.5 : 1);
    setValue(newValue);
  };
  const handleTouch = (e, index) => {
    const touchX = e.touches[0].clientX;
    const { left, width } = e.currentTarget.getBoundingClientRect();

    const isHalf = touchX - left < width / 2;
    const newValue = index + (isHalf ? 0.5 : 1);

    setValue(newValue);
  };

  return (
    <div className="w-fit mx-auto">
      <div
        className="flex items-center justify-center gap-1"
        onMouseLeave={() => setHoverValue(null)}
      >
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = getStarFill(i);

          return (
            <div
              key={i}
              className="relative w-8 h-8 cursor-pointer touch-manipulation"
              onTouchStart={(e) => handleTouch(e, i)}
            >
              {/* half (desktop hover) */}
              <div
                className="absolute inset-0 w-1/2 z-10 hidden sm:block"
                onMouseEnter={() => setHoverValue(i + 0.5)}
                onClick={() => handleClick(i, true)}
              />

              {/* full (desktop hover) */}
              <div
                className="absolute inset-0 w-full z-0 hidden sm:block"
                onMouseEnter={() => setHoverValue(i + 1)}
                onClick={() => handleClick(i, false)}
              />

              <svg
                className="w-8 h-8 pointer-events-none"
                viewBox="0 0 24 24"
                fill={fill === "full" ? "#ad46ff" : "none"}
                stroke="#ad46ff"
                strokeWidth="2"
              >
                {fill === "half" && (
                  <defs>
                    <linearGradient id={`half-${i}`}>
                      <stop offset="50%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#ad46ff" />
                    </linearGradient>
                  </defs>
                )}
                <path
                  fill={fill === "half" ? `url(#half-${i})` : undefined}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.977-2.89a1 1 0 00-1.176 0l-3.977 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.52-4.674z"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center my-5">
        <p className="text-sm">امتیاز شما:</p>
        <span className="text-sm w-7.5 text-center">{displayValue}</span>
      </div>
    </div>
  );
};

export default StarRating;
