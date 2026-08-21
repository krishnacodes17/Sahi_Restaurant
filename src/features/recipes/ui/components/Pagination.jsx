import { memo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-white/60 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00] disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white/60"
      >
        <FiChevronLeft size={18} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          aria-label={`Page ${p}`}
          className={`h-10 w-10 rounded-xl text-sm font-semibold transition ${
            p === page
              ? "bg-[#ff5a00] text-black"
              : "border border-white/10 bg-[#141414] text-white/60 hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-white/60 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00] disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-white/60"
      >
        <FiChevronRight size={18} />
      </button>
    </div>
  );
};

export default memo(Pagination);
