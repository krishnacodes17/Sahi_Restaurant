import { memo } from "react";
import { Heart, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";

const RecipesCard = ({ recipe, onAddToCart, isFavorite, onToggleFavorite  }) => {
  const {
    id,
    name,
    image,
    rating,
    reviewCount,
    cuisine,
    mealType,
  } = recipe;

  const price = 199 + id * 25;

  return (
    <article className="group w-full sm:w-[280px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a00]/40">

      {/* ================= IMAGE ================= */}

      <div className="relative h-[175px] sm:h-[190px] overflow-hidden">

        <Link to={`/home/recipe/${id}`} className="block h-full">

          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

        </Link>

        {/* Dark Gradient */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


        {/* ================= FAVORITE ================= */}

        <button
          type="button"
          onClick={() => onToggleFavorite?.(recipe)}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-black"
        >
          <Heart
            size={18}
            strokeWidth={2}
            className={
              isFavorite
                ? "fill-[#ff5a00] text-[#ff5a00]"
                : "text-white"
            }
          />
        </button>


        {/* ================= RATING ================= */}

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/70 px-2.5 py-1 backdrop-blur-md">

          <Star
            size={13}
            className="fill-[#ffc107] text-[#ffc107]"
          />

          <span className="text-xs font-semibold text-white">
            {rating}
          </span>

          <span className="text-[10px] text-white/40">
            ({reviewCount})
          </span>

        </div>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="p-4">

        {/* Recipe Name */}

        <Link to={`/home/recipe/${id}`}>

          <h3 className="truncate text-base font-semibold text-white transition hover:text-[#ff5a00]">
            {name}
          </h3>

        </Link>


        {/* Cuisine + Meal */}

        <div className="mt-1.5 flex items-center gap-2">

          <span className="truncate text-xs text-white/40">
            {cuisine}
          </span>

          <span className="h-1 w-1 shrink-0 rounded-full bg-white/20" />

          <span className="truncate text-xs text-white/40">
            {mealType?.[0] || "Meal"}
          </span>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="mt-4 flex items-center justify-between">

          {/* Price */}

          <div>

            <span className="text-lg font-bold text-[#ff5a00]">
              ₹{price}
            </span>

            <span className="ml-1 text-[10px] text-white/30">
              / serving
            </span>

          </div>


          {/* Add Button */}

          <button
            type="button"
            onClick={() => onAddToCart?.(recipe)}
            aria-label={`Add ${name} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff5a00] text-black transition-all hover:bg-orange-400 active:scale-95"
          >
            <Plus size={21} strokeWidth={2.5} />
          </button>

        </div>

      </div>

    </article>
  );
};

export default memo(RecipesCard);