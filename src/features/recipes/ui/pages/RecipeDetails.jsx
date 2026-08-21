import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {FiArrowLeft,FiClock,FiHeart,FiMinus,FiPlus,FiUsers,} from "react-icons/fi";
import { MdLocalFireDepartment, MdRestaurant } from "react-icons/md";
import { useGetSingleRecipes } from "../../hook/useGetSingleRecipes";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../cart/state/CartSlice";

const recipePrices = {
  1: 299,
  2: 249,
  3: 199,
};




const RecipeDetails = () => {

let dispatch = useDispatch()

let handelDispatch = ()=>{
  if(!recipe) return;
  dispatch(addToCart({...recipe, quantity, price: recipePrices[recipe.id] || 249}))
}

  const [quantity, setQuantity] = useState(1)
  const { id } = useParams();


  const {data:recipe, isLoading} = useGetSingleRecipes(id)



  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080808] text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="h-6 w-32 animate-pulse rounded bg-[#181818]" />

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <div className="aspect-square animate-pulse rounded-3xl bg-[#151515]" />

            <div className="space-y-5">
              <div className="h-10 w-3/4 animate-pulse rounded bg-[#151515]" />
              <div className="h-5 w-1/2 animate-pulse rounded bg-[#151515]" />
              <div className="h-20 animate-pulse rounded bg-[#151515]" />
              <div className="h-14 animate-pulse rounded bg-[#151515]" />
            </div>

          </div>

        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808] px-4 text-white">
        <div className="text-center">
          <div className="text-5xl">🍽️</div>

          <h2 className="mt-4 text-2xl font-bold">
            Recipe not found
          </h2>

          <p className="mt-2 text-sm text-white/40">
            We couldn't find the recipe you're looking for.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl bg-[#ff5a00] px-5 py-3 text-sm font-bold text-black"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const price = recipePrices[recipe.id] || 249;
  const totalPrice = price * quantity;

  return (
    <div className="pb-10">

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

        {/* ================= BACK ================= */}

        <Link
          to="/home"
          className="hidden sm:inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-[#ff5a00] mb-5"
        >
          <FiArrowLeft size={17} />
          Back to menu
        </Link>


        {/* ================= HERO ================= */}

        <section className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* IMAGE */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#141414]">

              <img
                src={recipe.image}
                alt={recipe.name}
                className="aspect-square w-full object-cover"
              />

            </div>


            {/* Favorite */}

            {/* <button
              type="button"
              // onClick={() => setIsFavorite(!isFavorite)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:bg-black"
            >
              <FiHeart
                size={20}
                className={
                  isFavorite
                    ? "fill-[#ff5a00] text-[#ff5a00]"
                    : ""
                }
              />
            </button> */}


            {/* Rating */}

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md">

              <span className="text-[#ffc107]">
                ★
              </span>

              <span className="text-sm font-bold">
                {recipe.rating}
              </span>

              <span className="text-xs text-white/40">
                ({recipe.reviewCount} reviews)
              </span>

            </div>

          </div>


          {/* DETAILS */}

          <div className="flex flex-col justify-center">

            {/* Tags */}

            <div className="flex flex-wrap gap-2">

              {recipe.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#ff5a00]/10 px-3 py-1 text-xs font-medium text-[#ff5a00]"
                >
                  {tag}
                </span>
              ))}

            </div>


            {/* Name */}

            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {recipe.name}
            </h1>


            {/* Meta */}

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/45">

              <span className="flex items-center gap-1.5">
                <MdRestaurant className="text-[#ff5a00]" />
                {recipe.cuisine}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>
                {recipe.mealType?.join(", ")}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>
                {recipe.difficulty}
              </span>

            </div>


            {/* Description */}

            <p className="mt-6 text-sm leading-7 text-white/45 sm:text-base">
              A delicious {recipe.cuisine} dish prepared with
              carefully selected ingredients. Perfect for your{" "}
              {recipe.mealType?.join(" or ")} cravings.
            </p>


            {/* Stats */}

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <FiClock className="text-[#ff5a00]" size={19} />

                <p className="mt-3 text-lg font-bold">
                  {recipe.prepTimeMinutes}
                </p>

                <p className="text-[11px] text-white/35">
                  Prep min
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <FiClock className="text-[#ff5a00]" size={19} />

                <p className="mt-3 text-lg font-bold">
                  {recipe.cookTimeMinutes}
                </p>

                <p className="text-[11px] text-white/35">
                  Cook min
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <MdLocalFireDepartment
                  className="text-[#ff5a00]"
                  size={20}
                />

                <p className="mt-3 text-lg font-bold">
                  {recipe.caloriesPerServing}
                </p>

                <p className="text-[11px] text-white/35">
                  Calories
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-[#141414] p-4">
                <FiUsers className="text-[#ff5a00]" size={19} />

                <p className="mt-3 text-lg font-bold">
                  {recipe.servings}
                </p>

                <p className="text-[11px] text-white/35">
                  Servings
                </p>
              </div>

            </div>


            {/* ORDER BOX */}

            <div className="mt-7 rounded-2xl border border-white/10 bg-[#141414] p-4 sm:p-5">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs text-white/35">
                    Price per serving
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#ff5a00]">
                    ₹{price}
                  </p>
                </div>


                {/* Quantity */}

                <div className="flex items-center rounded-xl border border-white/10 bg-[#0d0d0d]">

                  <button
                    type="button"
                    disabled={quantity === 1}
                    onClick={() =>
                      setQuantity((prev) => Math.max(1, prev - 1))
                    }
                    className="flex h-11 w-11 items-center justify-center text-white/60 transition hover:text-white disabled:opacity-30"
                  >
                    <FiMinus size={16} />
                  </button>

                  <span className="w-8 text-center text-sm font-bold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((prev) => prev + 1)
                    }
                    className="flex h-11 w-11 items-center justify-center text-white/60 transition hover:text-[#ff5a00]"
                  >
                    <FiPlus size={16} />
                  </button>

                </div>

              </div>


              <button
              onClick={handelDispatch}
                type="button"
                className="mt-4 flex h-13 w-full items-center justify-between rounded-xl bg-[#ff5a00] px-5 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-[0.99]"
              >
                <span>
                  Add to Cart
                </span>

                <span>
                  ₹{totalPrice}
                </span>
              </button>

            </div>

          </div>

        </section>


        {/* ================= RECIPE INFORMATION ================= */}

        <section className="mt-12 grid gap-6 lg:grid-cols-2">

          {/* INGREDIENTS */}

          <div className="rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a00]">
                What's inside
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Ingredients
              </h2>
            </div>


            <div className="mt-6 space-y-3">

              {recipe.ingredients?.map((ingredient, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#151515] p-3"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#ff5a00]/10 text-xs font-bold text-[#ff5a00]">
                    {index + 1}
                  </span>

                  <span className="text-sm text-white/65">
                    {ingredient}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* INSTRUCTIONS */}

          <div className="rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a00]">
                Step by step
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Cooking Instructions
              </h2>
            </div>


            <div className="mt-6 space-y-5">

              {recipe.instructions?.map((instruction, index) => (

                <div
                  key={index}
                  className="flex gap-4"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff5a00] text-xs font-black text-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="pt-1 text-sm leading-6 text-white/55">
                    {instruction}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= BOTTOM TAGS ================= */}

        <section className="mt-8 rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs text-white/30">
                Recipe information
              </p>

              <p className="mt-1 text-sm text-white/60">
                Perfect for {recipe.mealType?.join(", ")}
              </p>
            </div>


            <div className="flex flex-wrap gap-2">

              {recipe.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-[#151515] px-3 py-1.5 text-xs text-white/50"
                >
                  #{tag}
                </span>
              ))}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default RecipeDetails;