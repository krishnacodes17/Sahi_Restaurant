import { Link } from 'react-router'

function PromoBanner() {
  return (
    <div>
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-3xl bg-[#ff4b00] min-h-[220px] sm:min-h-[250px]">
            {/* Background glow */}

            <div className="absolute w-64 h-64 rounded-full bg-orange-300/20 blur-3xl -left-20 -top-20" />

            <div className="absolute w-72 h-72 rounded-full bg-black/10 blur-3xl right-0 bottom-[-150px]" />

            <div className="relative z-10 h-full min-h-[220px] sm:min-h-[250px] flex items-center">
              {/* Burger */}

              <div className="w-[42%] sm:w-[45%] h-full flex items-center justify-center">
                <div className="text-[95px] sm:text-[140px] lg:text-[170px] drop-shadow-2xl">
                  🍔
                </div>
              </div>

              {/* Content */}

              <div className="w-[58%] sm:w-[55%] pr-5 sm:pr-10">
                <p className="text-black/60 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  This week's special
                </p>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black leading-tight mt-1 text-white">
                  Our HOT & SPICY
                  <br />
                  Burger is back!
                </h2>

                <p className="text-white/80 text-xs sm:text-sm lg:text-base mt-3 max-w-sm">
                  Enjoy the best deal of the week.
                </p>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-3 mt-5 bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold hover:bg-white/90 transition"
                >
                  Order Now
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider indicators */}

          <div className="flex justify-center items-center gap-3 mt-4">
            <span className="w-7 h-2 rounded-full bg-[#ff5a00]" />

            <span className="w-2 h-2 rounded-full bg-white" />

            <span className="w-2 h-2 rounded-full bg-white" />
          </div>
    </div>
  )
}

export default PromoBanner
