import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useAllRecipiesHook } from "../../hook/useAllRecipesHook";
import RecipesCard from "../components/RecipesCard";
import CategoriesCard from "../components/CategoriesCard";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";
import RecipeLoading from "../../../../shared/ui/components/RecipeLoading";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../favorites/state/favoritesSlice";

const Home = () => {
  let dispatch = useDispatch()
  let favorites = useSelector((state) => state.favorites.items)

  let {
    data: recipe,
    isLoading: recipeLoading,
    categories,
    handleAddToCart
  } = useAllRecipiesHook(5);

  const handleToggleFavorite = useCallback((recipeItem)=>{
    dispatch(toggleFavorite(recipeItem))
  }, [dispatch])


  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            PROMO BANNER
        ================================================== */}

        <section className="pt-8">
          <PromoBanner />
        </section>

        {/* ==================================================
            CATEGORIES
        ================================================== */}

        <section className="mt-8 sm:mt-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-bold">Categories</h2>

        
          </div>

          {/* Categories */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <CategoriesCard key={category.name} category={category} />
            ))}
          </div>
        </section>

        {/* ==================================================
            POPULAR MEALS
        ================================================== */}

        <section className="mt-10">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Popular Meals</h2>

              <p className="text-xs sm:text-sm text-white/35 mt-1">
                Most loved by our customers
              </p>
            </div>

            <Link
            to="/home/menu" className="text-[#ff5a00] text-sm font-medium hover:text-orange-400 transition">
              See all
            </Link>
          </div>

          {/* Recipes */}
          {recipeLoading ? (<RecipeLoading />) : (
            <div
              className="
        flex
        gap-4
        overflow-x-auto
        pb-3
        scrollbar-hide
        snap-x
        snap-mandatory
        sm:snap-none
      "
            >
              {recipe?.recipes?.map((recipeItem) => (
                <div key={recipeItem.id} className="snap-start w-[260px] sm:w-[280px] shrink-0">
                  <RecipesCard
                    recipe={recipeItem}
                    onAddToCart={handleAddToCart}
                    isFavorite={favorites.some((f) => f.id === recipeItem.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
