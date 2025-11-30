import { useEffect, useState } from "react";
import OrganizationFilter from "./OrganizationFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import { useSearchParams } from "react-router-dom";
import { PiX } from "react-icons/pi";
import OnlineCourseFilter from "./OnlineCourseFilter";

const CourseFilter = ({ setParams, params, setFilterOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const MIN = 0;
  const MAX = 5000000;
  const price = params?.price__range?.split(",");
  const selectMinValue = price?.[0] || MIN;
  const selectMaxValue = price?.[1] || MAX;
  const [minValue, setMinValue] = useState(selectMinValue);
  const [maxValue, setMaxValue] = useState(selectMaxValue);

  const [isOnline, setIsOnline] = useState(params?.is_online || "");
  // console.log("isOnline",isOnline);

  const [orgSelected, setOrgSelected] = useState(
    "" || params?.organization__name__iexact,
  );
  const submitFilter = () => {
    const price__range = `${minValue},${maxValue}`;
    const organization__name__iexact = orgSelected;
    const is_online = isOnline;
    if (orgSelected) {
      setParams((params) => ({
        ...params,
        price__range,
        organization__name__iexact,
        is_online,
        page: 1,
      }));
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    } else {
      delete params?.organization__name__iexact;
      setParams((params) => ({ ...params, price__range, is_online, page: 1 }));
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
    setFilterOpen(false);
  };

  return (
    <div className="p-4 space-y-3 max-w-2xl w-full md:w-full">
      <div className="flex items-center justify-between mb-6 md:mb-4">
        <h4 className="font-bold text-sm text-purple-900">فیلترها</h4>
        <PiX
          className="text-lg md:hidden cursor-pointer"
          onClick={() => setFilterOpen(false)}
        />
      </div>
      <PriceRangeSlider
        MIN={MIN}
        MAX={MAX}
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
      <OnlineCourseFilter isOnline={isOnline} setIsOnline={setIsOnline} />
      <OrganizationFilter
        orgSelected={orgSelected}
        setOrgSelected={setOrgSelected}
      />
      <button
        onClick={submitFilter}
        className="bg-purple-800 cursor-pointer border border-purple-800 text-white p-1 text-xs rounded-md w-full text-center"
      >
        اعمال فیلتر
      </button>
    </div>
  );
};

export default CourseFilter;
