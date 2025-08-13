import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = ({ totalPage, currentPage, paginate }) => {
  const pageNumbers = [];

  const maxPageButtons = 3;
  const half = Math.floor(maxPageButtons / 2);
  let startPage = Math.max(1, currentPage - half);
  let endPage = startPage + maxPageButtons - 1;

  if (endPage > totalPage) {
    endPage = totalPage;
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      {/* ← Prev Button */}
      {currentPage > 1 && (
        <button
          onClick={() => paginate(currentPage - 1)}
          className="border border-pink/40 rounded-full bg-white text-black hover:bg-gray-200 w-[45px] h-[45px] flex items-center justify-center p-0"
        >
          <ArrowLeft size={20} />
        </button>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-4 py-2 border border-pink/40 rounded-full ${
            currentPage === number
              ? "bg-pink text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next → Button */}
      {currentPage < totalPage && (
        <button
          onClick={() => paginate(currentPage + 1)}
          className="border border-pink/40 rounded-full bg-white text-black hover:bg-gray-200 w-[45px] h-[45px] flex items-center justify-center p-0"
        >
          <ArrowRight size={20}/>
        </button>
      )}
    </div>
  );
};

export default Pagination;
