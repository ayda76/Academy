import ReactPaginate from "react-paginate";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";

const Paginate = ({ pageCount = 1, setParams }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = page || 1;

  const handlePageClick = (data) => {
    searchParams.set("page", data.selected + 1);
    setParams((params) => ({ ...params, page: data.selected + 1 }));
    setSearchParams(searchParams);

    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center mt-14">
      <div className="flex items-center gap-4 p-1.5">
        <ReactPaginate
          onPageChange={handlePageClick}
          previousLabel={<PiCaretRight />}
          nextLabel={<PiCaretLeft />}
          pageCount={pageCount}
          pageRangeDisplayed={1}
          containerClassName="flex items-center justify-between gap-2"
          pageLinkClassName={
            "text-secondary-500 w-7 h-7 pt-1 flex text-sm items-center justify-center cursor-pointer"
          }
          activeLinkClassName={
            "border border-purple-900 !text-purple-900 w-7 h-7  pt-1 rounded-full flex items-center justify-center cursor-default"
          }
          previousLinkClassName="text-lg text-purple-900 cursor-pointer"
          nextLinkClassName="text-lg text-purple-900 cursor-pointer"
          disabledLinkClassName="cursor-default text-secondary-500"
          key={pageCount}
          forcePage={pageCount > 1 && currentPage - 1}
        />
      </div>
    </div>
  );
};

export default Paginate;
