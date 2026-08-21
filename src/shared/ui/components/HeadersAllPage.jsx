import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router'

function HeadersAllPage() {
  return (
    <div>
      <header className="border-b  sm:hidden border-white/5 bg-[#080808]">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <Link
            to="/home"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff5a00] text-xl">
              🍴
            </div>

            <div className=" sm:block">
              <h1 className="text-lg font-bold">
                Sahi Restaurant
              </h1>

              <p className="text-[10px] text-white/35">
                Taste that feels right.
              </p>
            </div>
          </Link>

          <Link
            to="/home"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#141414] text-white/50 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
          >
            <FiArrowLeft size={18} />
          </Link>

        </div>

      </header>
    </div>
  )
}

export default HeadersAllPage
