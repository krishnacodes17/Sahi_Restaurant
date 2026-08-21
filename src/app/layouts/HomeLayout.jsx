import { Outlet } from 'react-router'
import Navbar from '../../features/recipes/ui/components/Navbar'
import MobileNavbar from '../../features/recipes/ui/components/MobileNavbar'
import HeadersAllPage from '../../shared/ui/components/HeadersAllPage'

function HomeLayout() {
  return (
    <div className="min-h-screen bg-[#080808] text-white pb-24 lg:pb-0">
      <header className="hidden lg:block sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-xl border-b border-white/5">
        <Navbar />
      </header>

      <div className="lg:hidden">
        <HeadersAllPage />
      </div>

      <Outlet />

      <MobileNavbar />
    </div>
  )
}

export default HomeLayout
