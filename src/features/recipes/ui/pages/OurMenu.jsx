import { Link } from "react-router-dom";
import { useCallback } from "react";
import { FiArrowLeft, FiSearch, FiSliders, FiX } from "react-icons/fi";
import RecipesCard from "../components/RecipesCard";
import Pagination from "../components/Pagination";
import { useOurMealHook } from "../../hook/useOurMealHook";
import PageHeader from "../components/recipe-details/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../cart/state/CartSlice";
import { toggleFavorite } from "../../../favorites/state/favoritesSlice";


const OurMenu = () => {

    let {mealTypes ,difficulties  , isLoading ,search,setSearch,selectedMeal,setSelectedMeal,selectedCuisine,setSelectedCuisine,selectedDifficulty, setSelectedDifficulty,setShowFilters,showFilters,clearFilters, page, setPage, totalPages, paginatedRecipes,
        hasActiveFilters,filteredRecipes,cuisines
    } = useOurMealHook (100)

    const handlePageChange = useCallback((p) => {
        setPage(p);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [setPage]);

    let dispatch = useDispatch()
    let favorites = useSelector((state) => state.favorites.items)

    const handleAddToCart = useCallback((recipes)=>{
      dispatch(addToCart(recipes))
    }, [dispatch])

    const handleToggleFavorite = useCallback((recipeItem)=>{
      dispatch(toggleFavorite(recipeItem))
    }, [dispatch])


  return (
    <div className="min-h-screen  text-white">

      {/* =================================================
          BACK BUTTON
      ================================================= */}
      <div className="mx-auto max-w-7xl px-4 pt-7 sm:px-6 sm:pt-10 lg:px-8">
        <Link
          to="/home"
          className="hidden sm:inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-[#ff5a00]"
        >
          <FiArrowLeft size={17} />
          Back to Home
        </Link>
      </div>

      {/* =================================================
          PAGE HEADER
      ================================================= */}
      <PageHeader isLoading={isLoading} filteredRecipes={filteredRecipes}/>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">

        {/* =================================================
        ================================================= */}



        <section>

          <div className="flex gap-3">

            {/* Search */}

            <div className="relative flex-1">

              <FiSearch
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for pizza, burger, pasta..."
                className="h-13 w-full rounded-xl border border-white/10 bg-[#141414] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#ff5a00]/50"
              />

            </div>


            {/* Mobile Filter Button */}

            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-white/60 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00] sm:hidden"
            >
              {showFilters ? (
                <FiX size={20} />
              ) : (
                <FiSliders size={20} />
              )}
            </button>

          </div>

        </section>


        {/* =================================================
            FILTERS
        ================================================= */}

        <section
          className={`mt-5 ${
            showFilters ? "block" : "hidden sm:block"
          }`}
        >

          <div className="rounded-2xl border border-white/10 bg-[#111111] p-4">

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* Meal Type */}

              <div>

                <label className="mb-2 block text-xs font-medium text-white/40">
                  Meal Type
                </label>

                <select
                  value={selectedMeal}
                  onChange={(e) =>
                    setSelectedMeal(e.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#181818] px-3 text-sm text-white outline-none transition focus:border-[#ff5a00]/50"
                >

                  {mealTypes.map((meal) => (
                    <option
                      key={meal}
                      value={meal}
                      className="bg-[#181818]"
                    >
                      {meal}
                    </option>
                  ))}

                </select>

              </div>


              {/* Cuisine */}

              <div>

                <label className="mb-2 block text-xs font-medium text-white/40">
                  Cuisine
                </label>

                <select
                  value={selectedCuisine}
                  onChange={(e) =>
                    setSelectedCuisine(e.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#181818] px-3 text-sm text-white outline-none transition focus:border-[#ff5a00]/50"
                >

                  {cuisines.map((cuisine) => (
                    <option
                      key={cuisine}
                      value={cuisine}
                      className="bg-[#181818]"
                    >
                      {cuisine}
                    </option>
                  ))}

                </select>

              </div>


              {/* Difficulty */}

              <div>

                <label className="mb-2 block text-xs font-medium text-white/40">
                  Difficulty
                </label>

                <select
                  value={selectedDifficulty}
                  onChange={(e) =>
                    setSelectedDifficulty(e.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#181818] px-3 text-sm text-white outline-none transition focus:border-[#ff5a00]/50"
                >

                  {difficulties.map((difficulty) => (
                    <option
                      key={difficulty}
                      value={difficulty}
                      className="bg-[#181818]"
                    >
                      {difficulty}
                    </option>
                  ))}

                </select>

              </div>

            </div>


            {/* Active Filters */}

            {hasActiveFilters && (

              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">

                <span className="mr-1 text-xs text-white/30">
                  Active:
                </span>


                {search && (
                  <span className="rounded-full bg-[#ff5a00]/10 px-3 py-1 text-xs text-[#ff5a00]">
                    {search}
                  </span>
                )}


                {selectedMeal !== "All" && (
                  <span className="rounded-full bg-[#ff5a00]/10 px-3 py-1 text-xs text-[#ff5a00]">
                    {selectedMeal}
                  </span>
                )}


                {selectedCuisine !== "All" && (
                  <span className="rounded-full bg-[#ff5a00]/10 px-3 py-1 text-xs text-[#ff5a00]">
                    {selectedCuisine}
                  </span>
                )}


                {selectedDifficulty !== "All" && (
                  <span className="rounded-full bg-[#ff5a00]/10 px-3 py-1 text-xs text-[#ff5a00]">
                    {selectedDifficulty}
                  </span>
                )}


                <button
                  type="button"
                  onClick={clearFilters}
                  className="ml-auto text-xs font-medium text-white/40 transition hover:text-[#ff5a00]"
                >
                  Clear all
                </button>

              </div>

            )}

          </div>

        </section>


        {/* =================================================
            MEAL FILTER PILLS
        ================================================= */}

        <section className="mt-7">

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

            {mealTypes.map((meal) => (

              <button
                key={meal}
                type="button"
                onClick={() => setSelectedMeal(meal)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition sm:text-sm ${
                  selectedMeal === meal
                    ? "bg-[#ff5a00] text-black"
                    : "border border-white/10 bg-[#141414] text-white/45 hover:border-[#ff5a00]/40 hover:text-white"
                }`}
              >
                {meal}
              </button>

            ))}

          </div>

        </section>


        {/* =================================================
            RECIPES
        ================================================= */}

        <section className="mt-8">

          {/* Loading */}

          {isLoading ? (

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {[1, 2, 3, 4, 5, 6, 7, 8].map(
                (item) => (

                  <div
                    key={item}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#141414]"
                  >

                    <div className="h-[200px] animate-pulse bg-[#1c1c1c]" />

                    <div className="space-y-3 p-4">

                      <div className="h-4 w-3/4 animate-pulse rounded bg-[#1c1c1c]" />

                      <div className="h-3 w-1/2 animate-pulse rounded bg-[#1c1c1c]" />

                      <div className="h-4 w-1/3 animate-pulse rounded bg-[#1c1c1c]" />

                      <div className="flex justify-between pt-2">

                        <div className="h-8 w-16 animate-pulse rounded bg-[#1c1c1c]" />

                        <div className="h-10 w-10 animate-pulse rounded-xl bg-[#1c1c1c]" />

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          ) : filteredRecipes.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {paginatedRecipes.map((recipe) => (

                  <div
                    key={recipe.id}
                    className="min-w-0"
                  >

                    <RecipesCard
                      recipe={recipe}
                      onAddToCart={handleAddToCart}
                      isFavorite={favorites.some((f) => f.id === recipe.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />

                  </div>

                ))}

              </div>

              <div className="mt-10 flex flex-col items-center gap-2">
                <p className="text-xs text-white/35">
                  Showing {(page - 1) * 8 + 1}–
                  {Math.min(page * 8, filteredRecipes.length)} of{" "}
                  {filteredRecipes.length} recipes
                </p>

                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (

            /* =================================================
               EMPTY STATE
            ================================================= */

            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#111111] px-5 text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5a00]/10 text-4xl">
                🍽️
              </div>

              <h2 className="mt-5 text-xl font-bold sm:text-2xl">
                No recipes found
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
                We couldn't find any recipes matching your
                search or selected filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-[#ff5a00] px-5 py-3 text-sm font-bold text-black transition hover:bg-orange-400"
              >
                Clear Filters
              </button>

            </div>

          )}

        </section>

      </main>

    </div>
  );
};

export default OurMenu;