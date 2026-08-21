import { useState } from 'react'

function SearchBar() {
    const [, setSearch] = useState()
  return (
    <div>
      <section className="mt-5">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-white/40">
                ⌕
              </span>

              <input
                type="text"
                // value={}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for food, restaurants..."
                className="w-full h-14 rounded-2xl bg-[#121212] border border-white/20 pl-12 pr-4 text-sm sm:text-base outline-none placeholder:text-white/35 focus:border-[#ff5a00]/60 transition"
              />
            </div>

            <button className="w-14 h-14 shrink-0 rounded-2xl bg-[#121212] border border-white/10 flex items-center justify-center text-xl hover:border-[#ff5a00]/50 transition">
              ☷
            </button>
          </div>
        </section>
    </div>
  )
}

export default SearchBar
