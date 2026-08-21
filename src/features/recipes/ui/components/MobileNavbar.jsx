import { NavLink } from 'react-router'
import { useSelector } from 'react-redux'

function MobileNavbar() {
  let cartCount = useSelector((state) => state.cart.recipes.length)

  return (
    <div>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-3">
        <div className="max-w-lg mx-auto h-[72px] rounded-2xl bg-[#151515]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-around">
          {/* Home */}

          <NavLink
            to="/home"
            end
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            {({ isActive }) => (
              <>
                <span className={`text-xl ${isActive ? "text-[#ff5a00]" : "text-white/50"}`}>⌂</span>
                <span className={`text-[10px] font-medium ${isActive ? "text-[#ff5a00]" : "text-white/45"}`}>Home</span>
              </>
            )}
          </NavLink>

          {/* Our Menu */}

          <NavLink
            to="/home/menu"
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            {({ isActive }) => (
              <>
                <span className={`text-xl ${isActive ? "text-[#ff5a00]" : "text-white/50"}`}>▦</span>
                <span className={`text-[10px] ${isActive ? "text-[#ff5a00] font-medium" : "text-white/45"}`}>Our Menu</span>
              </>
            )}
          </NavLink>

          {/* Cart */}

          <NavLink
            to="/home/cart"
            className="relative flex flex-col items-center justify-center gap-1 w-16"
          >
            {({ isActive }) => (
              <>
                <span className={`text-xl ${isActive ? "text-[#ff5a00]" : "text-white/50"}`}>🛒</span>
                <span className={`text-[10px] ${isActive ? "text-[#ff5a00] font-medium" : "text-white/45"}`}>My Cart</span>
                {cartCount > 0 && (
                  <span className="absolute top-0 right-2 w-5 h-5 rounded-full bg-[#ff5a00] text-black text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </>
            )}
          </NavLink>

          {/* Orders */}

          <NavLink
            to="/home/orders"
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            {({ isActive }) => (
              <>
                <span className={`text-xl ${isActive ? "text-[#ff5a00]" : "text-white/50"}`}>▤</span>
                <span className={`text-[10px] ${isActive ? "text-[#ff5a00] font-medium" : "text-white/45"}`}>Orders</span>
              </>
            )}
          </NavLink>

          {/* Profile */}

          <NavLink
            to="/home/profile"
            className="flex flex-col items-center justify-center gap-1 w-16"
          >
            {({ isActive }) => (
              <>
                <span className={`text-xl ${isActive ? "text-[#ff5a00]" : "text-white/50"}`}>♙</span>
                <span className={`text-[10px] ${isActive ? "text-[#ff5a00] font-medium" : "text-white/45"}`}>Profile</span>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default MobileNavbar
