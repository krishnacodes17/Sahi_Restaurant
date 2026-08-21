import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FiArrowLeft,
  FiHeart,
  FiShoppingBag,
  FiTrash2,
} from "react-icons/fi";

import { toggleFavorite, clearFavorites } from "../../state/favoritesSlice";
import RecipesCard from "../../../recipes/ui/components/RecipesCard";

const FavoritePage = () => {
  const dispatch = useDispatch();

  const favoriteRecipes = useSelector(
    (state) => state.favorites.items
  );

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">

        <Link
          to={-1}
          className="hidden sm:inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-[#ff5a00] mb-5"
        >
          <FiArrowLeft size={17} />
          Back to Home
        </Link>

        {/* Heading */}

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
            Your Collection
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <h1 className="text-3xl font-black sm:text-4xl">
                Favorites
              </h1>

              <p className="mt-2 text-sm text-white/35">
                Your favorite meals, all in one place.
              </p>

            </div>


            {/* Clear All */}

            {favoriteRecipes.length > 0 && (

              <button
                type="button"
                onClick={() => dispatch(clearFavorites())}
                className="flex w-fit items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2.5 text-xs font-medium text-red-400 transition hover:bg-red-500/10"
              >
                <FiTrash2 size={14} />
                Clear Favorites
              </button>

            )}

          </div>

        </div>


        {/* ================= FAVORITES COUNT ================= */}

        {favoriteRecipes.length > 0 && (

          <div className="mt-7 flex items-center gap-2 text-sm text-white/40">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff5a00]/10 text-[#ff5a00]">
              <FiHeart
                size={16}
                fill="currentColor"
              />
            </div>

            <span>
              {favoriteRecipes.length}{" "}
              {favoriteRecipes.length === 1
                ? "favorite recipe"
                : "favorite recipes"}
            </span>

          </div>

        )}


        {/* ================= EMPTY STATE ================= */}

        {favoriteRecipes.length === 0 ? (

          <div className="mt-8 flex min-h-[430px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#111111] px-5 text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ff5a00]/10 text-5xl">
              ❤️
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              No favorites yet
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
              Save the meals you love and they'll appear here
              for easy access later.
            </p>

            <Link
              to="/home/menu"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#ff5a00] px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-95"
            >
              <FiShoppingBag size={16} />
              Explore Our Menu
            </Link>

          </div>

        ) : (

          /* ================= FAVORITE RECIPES ================= */

          <section className="mt-7">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {favoriteRecipes.map((recipe) => (

                <div
                  key={recipe.id}
                  className="relative min-w-0"
                >

                  <RecipesCard
                    recipe={recipe}
                  />


                  {/* Remove Favorite */}

                  <button
                    type="button"
                    onClick={() =>
                      dispatch(toggleFavorite(recipe))
                    }
                    aria-label={`Remove ${recipe.name} from favorites`}
                    className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/65 text-[#ff5a00] shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/85"
                  >
                    <FiHeart
                      size={17}
                      fill="currentColor"
                    />
                  </button>

                </div>

              ))}

            </div>

          </section>

        )}

      </main>

    </div>
  );
};

export default FavoritePage;