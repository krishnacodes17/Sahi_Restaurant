import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiShoppingBag,
  FiHeart,
  FiLock,
  FiLogOut,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiCalendar,
} from "react-icons/fi";
import { useGetUserDetails } from "../../hook/useGetUserDetails";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../auth/state/authSlice";

const ProfilePage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let cartCount = useSelector((state) => state.cart.recipes.length);
  let favCount = useSelector((state) => state.favorites.items.length);

  let { user } = useGetUserDetails();
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808] px-4 text-white">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ff5a00]/10 text-4xl">
            👤
          </div>

          <h1 className="mt-5 text-2xl font-bold">Please login first</h1>

          <p className="mt-2 text-sm text-white/35">
            You need to login to view your profile.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl bg-[#ff5a00] px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-5xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
        <Link
          to={-1}
          className="hidden sm:inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-[#ff5a00] mb-5"
        >
          <FiArrowLeft size={17} />
          Back to Home
        </Link>

        {/* Heading */}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
            My Account
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">Profile</h1>

          <p className="mt-2 text-sm text-white/35">
            View your account information and preferences.
          </p>
        </div>

        {/* ================= PROFILE HERO ================= */}

        <section className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
          {/* Glow */}

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#ff5a00]/10 blur-[100px]" />

          <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-7">
            {/* Profile Image */}

            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#181818] sm:h-28 sm:w-28">
              {user.image ? (
                <img
                  src={user.image}
                  alt={fullName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[#ff5a00]">
                  <FiUser size={40} />
                </div>
              )}
            </div>

            {/* User Info */}

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-bold">
                  {fullName || user.username}
                </h2>

                {user.role && (
                  <span className="rounded-full bg-[#ff5a00]/10 px-3 py-1 text-[10px] font-semibold capitalize text-[#ff5a00]">
                    {user.role}
                  </span>
                )}
              </div>

              <p className="mt-1 break-all text-sm text-white/40">
                @{user.username}
              </p>

              <p className="mt-1 break-all text-sm text-white/30">
                {user.email}
              </p>
            </div>
          </div>
        </section>

        {/* ================= QUICK STATS ================= */}

        <section className="mt-5 grid grid-cols-2 gap-3">
          <Link
            to="/home/cart"
            className="rounded-2xl border border-white/10 bg-[#111111] p-4 transition hover:border-[#ff5a00]/30 sm:p-5"
          >
            <FiShoppingBag size={20} className="text-[#ff5a00]" />

            <p className="mt-3 text-lg font-bold">My Cart</p>

            <p className="mt-1 text-[11px] text-white/30">
              {cartCount} {cartCount === 1 ? "item" : "items"}
            </p>
          </Link>

          <Link to="/home/favorites" className="rounded-2xl border border-white/10 bg-[#111111] p-4 sm:p-5">
            <FiHeart size={20} className="text-[#ff5a00]" />

            <p className="mt-3 text-lg font-bold">Favorites</p>

            <p className="mt-1 text-[11px] text-white/30">
              {favCount} {favCount === 1 ? "meal" : "meals"}
            </p>
          </Link>
        </section>

        {/* ================= PERSONAL INFORMATION ================= */}

        <section className="mt-5 rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a00]">
                Personal
              </p>

              <h2 className="mt-2 text-xl font-bold">Personal Information</h2>
            </div>

            <FiUser size={20} className="text-white/20" />
          </div>

          <div className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#181818] text-[#ff5a00]">
                <FiUser size={16} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-white/30">First Name</p>

                <p className="mt-1 text-sm font-medium">
                  {user.firstName || "Not available"}
                </p>
              </div>
            </div>

            {/* Last Name */}

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#181818] text-[#ff5a00]">
                <FiUser size={16} />
              </div>

              <div>
                <p className="text-xs text-white/30">Last Name</p>

                <p className="mt-1 text-sm font-medium">
                  {user.lastName || "Not available"}
                </p>
              </div>
            </div>

            {/* Username */}

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#181818] text-[#ff5a00]">
                @
              </div>

              <div className="min-w-0">
                <p className="text-xs text-white/30">Username</p>

                <p className="mt-1 break-all text-sm font-medium">
                  {user.username || "Not available"}
                </p>
              </div>
            </div>

            {/* Email */}

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#181818] text-[#ff5a00]">
                <FiMail size={16} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-white/30">Email</p>

                <p className="mt-1 break-all text-sm font-medium">
                  {user.email || "Not available"}
                </p>
              </div>
            </div>

            {/* Phone */}

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#181818] text-[#ff5a00]">
                <FiPhone size={16} />
              </div>

              <div>
                <p className="text-xs text-white/30">Phone</p>

                <p className="mt-1 text-sm font-medium">
                  {user.phone || "Not available"}
                </p>
              </div>
            </div>

            {/* Birth Date */}

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#181818] text-[#ff5a00]">
                <FiCalendar size={16} />
              </div>

              <div>
                <p className="text-xs text-white/30">Birth Date</p>

                <p className="mt-1 text-sm font-medium">
                  {user.birthDate || "Not available"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ADDRESS ================= */}

        {user.address && (
          <section className="mt-5 rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiMapPin size={18} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a00]">
                  Location
                </p>

                <h2 className="mt-1 text-xl font-bold">Address</h2>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/5 bg-[#151515] p-4">
              <p className="text-sm leading-6 text-white/60">
                {user.address.address}
              </p>

              <p className="mt-1 text-sm text-white/40">
                {user.address.city}, {user.address.state}
              </p>

              <p className="mt-1 text-xs text-white/30">
                {user.address.postalCode}
              </p>
            </div>
          </section>
        )}

        {/* ================= WORK ================= */}

        {user.company && (
          <section className="mt-5 rounded-3xl border border-white/10 bg-[#111111] p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiBriefcase size={18} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a00]">
                  Professional
                </p>

                <h2 className="mt-1 text-xl font-bold">Work Information</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-xs text-white/30">Company</p>

                <p className="mt-1 text-sm font-medium">{user.company.name}</p>
              </div>

              <div>
                <p className="text-xs text-white/30">Position</p>

                <p className="mt-1 text-sm font-medium">{user.company.title}</p>
              </div>

              <div>
                <p className="text-xs text-white/30">Department</p>

                <p className="mt-1 text-sm font-medium">
                  {user.company.department}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ================= ACCOUNT ACTIONS ================= */}

        <section className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
          <div className="border-b border-white/5 px-5 py-5 sm:px-7">
            <h2 className="font-bold">Account</h2>
          </div>

          {/* Orders */}

          <Link
            to="/home/orders"
            className="flex items-center gap-4 border-b border-white/5 px-5 py-4 transition hover:bg-[#161616] sm:px-7"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#181818] text-white/50">
              <FiShoppingBag size={17} />
            </div>

            <div>
              <p className="text-sm font-medium">My Orders</p>

              <p className="mt-1 text-xs text-white/30">
                View your previous orders
              </p>
            </div>
          </Link>

          {/* Security */}

          <div className="flex items-center gap-4 border-b border-white/5 px-5 py-4 sm:px-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#181818] text-white/50">
              <FiLock size={17} />
            </div>

            <div>
              <p className="text-sm font-medium">Account Security</p>

              <p className="mt-1 text-xs text-white/30">
                Your account information is protected
              </p>
            </div>
          </div>

          {/* Logout */}

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-red-500/5 sm:px-7"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <FiLogOut size={17} />
            </div>

            <div>
              <p className="text-sm font-medium text-red-400">Logout</p>

              <p className="mt-1 text-xs text-white/30">
                Sign out from your account
              </p>
            </div>
          </button>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
