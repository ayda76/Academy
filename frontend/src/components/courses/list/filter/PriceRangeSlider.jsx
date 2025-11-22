export default function PriceRangeSlider({
  MIN,
  MAX,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
}) {
  // جلوگیری از رد شدن دسته‌ها از هم
  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value < maxValue) setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value > minValue) setMaxValue(value);
  };

  // درصد برای رنگی کردن رنج
  const minPercent = ((minValue - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxValue - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="w-full mx-auto">
      {/* نمایش قیمت‌ها */}
      {/* <span className="text-sm text-gray-900 inline-block mb-4">براساس هزینه</span> */}
      <div className="flex justify-between mb-4 text-xs font-semibold">
        <span>
          {minValue === 0 ? "رایگان" : `${minValue?.toLocaleString()} تومان`}
        </span>
        <span>{maxValue?.toLocaleString()} تومان</span>
      </div>

      <div className="relative w-full h-4">
        {/* خط اصلی */}
        <div className="absolute w-full h-1 bg-gray-300 rounded top-1/2 -translate-y-1/2"></div>

        {/* بخش رنگی بین دو دسته */}
        <div
          className="absolute h-1 bg-purple-500 rounded top-1/2 -translate-y-1/2"
          style={{
            left: `${100 - maxPercent}%`,
            right: `${minPercent}%`, // ← اینجا اصلاح شد
          }}
        ></div>

        {/* دسته سمت راست */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full top-0 h-4 pointer-events-none
                     appearance-none bg-transparent
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-purple-600
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-webkit-slider-thumb]:cursor-pointer"
        />

        {/* دسته سمت چپ */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full top-0 h-4 pointer-events-none
                     appearance-none bg-transparent
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-purple-600
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>
    </div>
  );
}
