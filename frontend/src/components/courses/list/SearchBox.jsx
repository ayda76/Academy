import { useEffect, useRef, useState } from "react";
import { PiMagnifyingGlassBold, PiX } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";

const SearchBox = ({ params, setParams }) => {
  const ref = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [search, setSearch] = useState(searchQuery);
  const result = (e) => {
    const value = ref.current.value;
    if (value?.length > 1 && e.key === "Enter") {
      setParams((params) => ({
        ...params,
        page: 1,
        name__icontains: value,
      }));
      setSearch(value);
      searchParams.set("search", value);
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  };
  const reset = () => {
    setSearch("");
    ref.current.value = "";
    searchParams.delete("search");
    searchParams.set("page", 1);
    setSearchParams(searchParams);
    delete params?.name__icontains;
    setParams((params) => ({ ...params, page: 1 }));
  };
  useEffect(() => {
    if (searchQuery) {
      ref.current.value = searchQuery;
      setSearch(searchQuery);
      setParams((params) => ({
        ...params,
        page: 1,
        name__icontains: searchQuery,
      }));
    }
  }, [search, setSearch, searchQuery, setParams]);
  return (
    <div className="w-[250px] mb-6 mx-auto md:mx-0 relative">
      <PiMagnifyingGlassBold className="absolute -translate-y-1/2 top-1/2 right-2 text-secondary-300 text-xl" />
      <input
        className="w-full border focus:outline-none border-secondary-300 rounded-full pr-8 py-2.5 text-xs 2xl:text-sm"
        placeholder="جستجو"
        // type="search"
        onKeyDown={result}
        ref={ref}
      />
      <PiX
        onClick={reset}
        className={`${search ? " visible" : "invisible"} absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer`}
      />
    </div>
  );
};

export default SearchBox;
