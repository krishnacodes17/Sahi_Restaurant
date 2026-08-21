import { NavLink } from 'react-router'
import { useSelector } from 'react-redux'

const linkClass = ({ isActive }) =>
  isActive
    ? "text-[#ff5a00] font-medium text-sm"
    : "text-white/45 hover:text-white text-sm transition"

function Navbar() {
  let cartCount = useSelector((state) => state.cart.recipes.length)

  return (
    <div>
      <header className="hidden lg:block sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <NavLink to="/home" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#ff5a00] flex items-center justify-center text-xl">
                🍴
              </div>

              <div>
                <h1 className="font-bold text-lg">Sahi Restaurant</h1>

                <p className="text-[10px] text-white/35">
                  Taste that feels right.
                </p>
              </div>
            </NavLink>

            {/* Navigation */}

            <nav className="flex items-center gap-8">
              <NavLink to="/home" end className={linkClass}>
                Home
              </NavLink>

              <NavLink
                to="/home/menu"
                className={linkClass}
              >
                Our Menu
              </NavLink>

              <NavLink
                to="/home/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ff5a00] font-medium text-sm relative"
                    : "text-white/45 hover:text-white text-sm transition relative"
                }
              >
                My Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-[#ff5a00] text-black text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/home/orders"
                className={linkClass}
              >
                Orders
              </NavLink>
            </nav>

            {/* Profile */}

            <div className="flex items-center gap-4">
              <button className="w-11 h-11 rounded-xl bg-[#151515] border border-white/10 flex items-center justify-center">
                🔔
              </button>

              <NavLink
                to="/home/profile"
                className="w-11 h-11 rounded-full bg-[#ff5a00] flex items-center justify-center"
              >
                👤
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
