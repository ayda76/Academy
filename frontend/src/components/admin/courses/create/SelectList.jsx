import { useRef, useState } from "react";
import Modal from "../../../../ui/Modal";
import {
  PiCheckSquareBold,
  PiMagnifyingGlass,
  PiSquare,
  PiX,
} from "react-icons/pi";

const SelectList = ({ value, onChange, onClose, title, data, isLodaing }) => {
  const searchRef = useRef();
  const [selected, setSelected] = useState(value || []);
  const [search, setSearch] = useState("");
  const searchData = search
    ? data?.filter((d) =>
        d?.name
          ?.toString()
          ?.toLocaleLowerCase()
          ?.includes(search?.toString()?.toLocaleLowerCase()),
      )
    : data;
  console.log(search);
  const submitHandler = () => {
    console.log(selected);
    onChange?.(selected);
    onClose();
  };

  return (
    <Modal onClose={onClose} title={title}>
      <div className="flex items-center justify-between w-full p-2 border-b border-b-secondary-200 mb-3">
        <div className="flex items-center gap-2 w-full relative">
          <input
            ref={searchRef}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            placeholder="جستجو..."
            className=" text-sm placeholder:text-sm outline-none pr-6 w-full"
          />
          <PiMagnifyingGlass className="absolute top-1/2 -translate-y-1/2 right-0 text-xl text-secondary-400" />
        </div>
      </div>
      <div className="max-h-90 min-h-90 overflow-y-auto">
        {isLodaing ? (
          <div className="flex items-center justify-center w-full h-full py-12">
            <span className="text-sm text-secondary-800">
              در حال بارگذاری...
            </span>
          </div>
        ) : searchData?.length < 1 ? (
          <div className="flex items-center justify-center w-full py-12">
            <span className="text-sm text-secondary-800">
              موردی یافت نشد...
            </span>
          </div>
        ) : (
          searchData?.map((s, i) => (
            <div
              onClick={() => {
                if (!selected?.includes(s?.id)) {
                  setSelected([...selected, s?.id]);
                } else {
                  setSelected(selected?.filter((d) => d !== s?.id));
                }
              }}
              key={i}
              className="flex items-center gap-4 justify-between w-full even:bg-secondary-50 p-2 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                {selected?.includes(s?.id) ? (
                  <PiCheckSquareBold className="text-xl text-purple-800" />
                ) : (
                  <PiSquare className="text-xl text-purple-800" />
                )}
                <span className="text-sm text-secondary-800">{s?.name}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <button
        onClick={submitHandler}
        className="bg-purple-800 w-full text-white text-sm p-1.5 rounded-md cursor-pointer"
      >
        انتخاب
      </button>
    </Modal>
  );
};

export default SelectList;
