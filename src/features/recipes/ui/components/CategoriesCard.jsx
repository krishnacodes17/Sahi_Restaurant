import { memo } from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  return (
    <Link
      // to={`/categories/${category.name.toLowerCase()}`}
      className="
        group
        shrink-0
        w-[105px]
        sm:w-[125px]
        h-[125px]
        sm:h-[140px]
        rounded-2xl
        bg-[#141414]
        border
        border-white/10
        hover:border-[#ff5a00]/50
        hover:bg-[#181818]
        transition-all
        duration-300
        flex
        flex-col
        items-center
        justify-center
      "
    >
      {/* Category Image / Emoji */}
      <div
        className="
          text-4xl
          sm:text-5xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {category.emoji}
      </div>

      {/* Category Name */}
      <p className="text-sm sm:text-base mt-3 font-medium text-white">
        {category.name}
      </p>
    </Link>
  );
};

export default memo(CategoriesCard);