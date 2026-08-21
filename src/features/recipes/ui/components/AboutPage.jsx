import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiStar,
  FiClock,
  FiUsers,
  FiShoppingBag,
  FiArrowRight,
} from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ================= MAIN ================= */}

      <main>

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden">

          {/* Background glow */}

          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#ff5a00]/10 blur-[130px]" />

          <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#ff5a00]/20 bg-[#ff5a00]/5 px-4 py-2 text-xs font-medium text-[#ff5a00]">
              <FiHeart size={13} fill="currentColor" />
              Made for food lovers
            </span>


            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

              Good food should
              <span className="text-[#ff5a00]">
                {" "}feel right.
              </span>

            </h1>


            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
              Sahi Restaurant is a modern food discovery experience
              built for people who believe choosing a meal should be
              as enjoyable as eating it.
            </p>


            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/home/menu"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff5a00] px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-95"
              >
                Explore Our Menu
                <FiArrowRight size={16} />
              </Link>


              <Link
                to="/home/favorites"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#141414] px-6 py-3 text-sm font-medium text-white/70 transition hover:border-[#ff5a00]/40 hover:text-white"
              >
                <FiHeart size={16} />
                Your Favorites
              </Link>

            </div>

          </div>

        </section>


        {/* ================= STATS ================= */}

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-[#111111] sm:grid-cols-4">

            <div className="border-b border-white/5 p-5 text-center sm:border-b-0 sm:border-r">

              <FiStar
                size={20}
                className="mx-auto text-[#ff5a00]"
              />

              <p className="mt-3 text-xl font-black">
                4.8+
              </p>

              <p className="mt-1 text-xs text-white/30">
                Average Rating
              </p>

            </div>


            <div className="border-b border-white/5 p-5 text-center sm:border-b-0 sm:border-r">

              <FiShoppingBag
                size={20}
                className="mx-auto text-[#ff5a00]"
              />

              <p className="mt-3 text-xl font-black">
                100+
              </p>

              <p className="mt-1 text-xs text-white/30">
                Delicious Recipes
              </p>

            </div>


            <div className="border-r-0 border-white/5 p-5 text-center sm:border-r">

              <FiUsers
                size={20}
                className="mx-auto text-[#ff5a00]"
              />

              <p className="mt-3 text-xl font-black">
                10K+
              </p>

              <p className="mt-1 text-xs text-white/30">
                Happy Foodies
              </p>

            </div>


            <div className="border-t border-white/5 p-5 text-center sm:border-t-0">

              <FiClock
                size={20}
                className="mx-auto text-[#ff5a00]"
              />

              <p className="mt-3 text-xl font-black">
                24/7
              </p>

              <p className="mt-1 text-xs text-white/30">
                Food Inspiration
              </p>

            </div>

          </div>

        </section>


        {/* ================= STORY ================= */}

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Visual */}

            <div className="relative">

              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#ff5a00]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-2">

                <img
                  src="https://cdn.dummyjson.com/recipe-images/1.webp"
                  alt="Delicious food"
                  className="h-[320px] w-full rounded-2xl object-cover sm:h-[400px]"
                />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-white/40">
                        Today's favourite
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Classic Margherita Pizza
                      </p>

                    </div>

                    <span className="flex items-center gap-1 text-sm text-[#ffc107]">
                      ★ 4.6
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* Story */}

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                More than a menu.
                <br />
                It's a food experience.
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-white/40">

                <p>
                  Finding the right meal shouldn't feel complicated.
                  Sahi Restaurant brings recipes, flavours and
                  inspiration together in one simple experience.
                </p>

                <p>
                  From quick lunches to comforting dinners, our
                  collection helps you discover meals based on
                  cuisine, difficulty, ratings and what simply looks
                  delicious.
                </p>

                <p>
                  We believe technology should make food discovery
                  easier, faster and more enjoyable.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= VALUES ================= */}

        <section className="border-y border-white/5 bg-[#0d0d0d]">

          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
                Why Sahi?
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Simple. Delicious. Personal.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/35">
                Everything we build is designed around making your
                food journey easier.
              </p>

            </div>


            <div className="mt-10 grid gap-4 md:grid-cols-3">

              {/* Card 1 */}

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#ff5a00]/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-2xl">
                  🍽️
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  Discover
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Explore recipes from different cuisines and
                  discover meals you may never have tried before.
                </p>

              </div>


              {/* Card 2 */}

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#ff5a00]/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-2xl">
                  ❤️
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  Save
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Keep your favourite recipes close and build your
                  own personal collection of meals.
                </p>

              </div>


              {/* Card 3 */}

              <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#ff5a00]/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-2xl">
                  ✨
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  Enjoy
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  From choosing a recipe to placing an order,
                  everything stays simple and enjoyable.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl border border-[#ff5a00]/20 bg-[#111111] px-6 py-12 text-center sm:px-10">

            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#ff5a00]/10 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a00] text-2xl">
                🍴
              </div>

              <h2 className="mt-6 text-2xl font-black sm:text-3xl">
                Ready to find your next favourite?
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/35">
                Explore our recipes, save what you love and make
                every meal a little more special.
              </p>

              <Link
                to="/home/menu"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#ff5a00] px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-95"
              >
                Explore Menu
                <FiArrowRight size={16} />
              </Link>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default AboutPage;