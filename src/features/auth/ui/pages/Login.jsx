import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthHook } from "../../hook/useAuthHook";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  let { register, errors, handleSubmit, loginForm } = useAuthHook();

  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Main Container */}
      <div className="w-full max-w-6xl min-h-[680px] lg:h-[720px] bg-[#111111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row">
        {/* ================= LEFT SECTION ================= */}
        <div className="relative lg:w-[52%] min-h-[300px] lg:min-h-full overflow-hidden bg-[#ff5a00]">
          {/* Background Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-black/30 rounded-full blur-3xl" />

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🍴</span>
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-tight">
                    Sahi<span className="text-black"> Restaurant</span>
                  </h1>
                  <p className="text-xs text-black/60">
                    Taste that feels right.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="max-w-md mt-10 lg:mt-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/10 border border-black/10 mb-5">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span className="text-xs font-medium text-black/70">
                  Fresh. Fast. Delicious.
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-black">
                Good food.
                <br />
                Good mood.
              </h2>

              <p className="mt-6 text-sm sm:text-base text-black/65 max-w-sm leading-relaxed">
                Discover delicious meals, explore your favourite restaurants and
                order everything you love from one place.
              </p>

              {/* Food Card */}
              <div className="mt-8 w-full max-w-sm bg-black/95 rounded-2xl p-4 shadow-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-[#242424] flex items-center justify-center text-4xl shrink-0">
                    🍔
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/40">Today's favourite</p>

                    <h3 className="font-semibold mt-1 truncate">
                      Classic Cheese Burger
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-orange-500 text-sm">★★★★★</span>
                      <span className="text-xs text-white/40">4.8 (120+)</span>
                    </div>
                  </div>

                  <span className="text-orange-500 font-bold">₹249</span>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <p className="hidden lg:block text-xs text-black/50">
              © 2026 Sahi Restaurant. Made for food lovers.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-14 bg-[#0d0d0d]">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-[#ff5a00] flex items-center justify-center">
                🍴
              </div>

              <div>
                <h1 className="font-bold text-lg">Sahi Restaurant</h1>

                <p className="text-xs text-white/40">Taste that feels right.</p>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-9">
              <p className="text-orange-500 text-sm font-semibold mb-3">
                WELCOME BACK 👋
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Sign in to your account
              </h2>

              <p className="text-white/40 text-sm mt-3 leading-relaxed">
                Enter your details and get back to discovering your next
                favourite meal.
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Username (emilys)
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    👤
                  </span>

                  <input
                    {...register("username", {
                      required: "Name is required ",
                      minLength: {
                        value: 3,
                        message: "minimum 3 digit is required ",
                      },
                    })}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-12 rounded-xl bg-[#181818] border border-white/10 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Email address
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    ✉
                  </span>

                  <input
                    {...register("email", {
                      required: "Email is required ",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-13 rounded-xl bg-[#181818] border border-white/10 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div> */}

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white/70">
                    Password (emilyspass)
                  </label>
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    🔒
                  </span>

                  <input
                    {...register("password", {
                      required: "password is required",
                      minLength: {
                        value: 6,
                        message: "password must be at least 6 digit ",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full h-13 rounded-xl bg-[#181818] border border-white/10 pl-11 pr-12 text-sm outline-none transition-all placeholder:text-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/30 hover:text-white transition"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit(loginForm)}
                type="submit"
                className="w-full h-13 rounded-xl bg-[#ff5a00] hover:bg-[#ff6a1a] active:scale-[0.99] transition-all text-black font-bold text-sm shadow-lg shadow-orange-500/10"
              >
                Sign In
              </button>
            </form>

            {/* Signup */}
            <p className="text-center text-sm text-white/40 mt-8">
              Don't have an account?
              <Link
                to="/register"
                className="ml-1.5 text-orange-500 font-semibold hover:text-orange-400 transition"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
