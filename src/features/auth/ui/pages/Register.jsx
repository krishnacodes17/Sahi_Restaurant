import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthHook } from "../../hook/useAuthHook";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  let {register , registerForm, errors, handleSubmit, watch} = useAuthHook()


  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">

      {/* Main Container */}
      <div className="w-full max-w-6xl min-h-[700px] lg:min-h-[720px] bg-[#111111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row">

        {/* ================= LEFT SECTION ================= */}
        <div className="relative lg:w-[48%] min-h-[300px] lg:min-h-full overflow-hidden bg-[#ff5a00]">

          {/* Glow */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl" />

          <div className="absolute -bottom-40 -right-20 w-[450px] h-[450px] bg-black/30 rounded-full blur-3xl" />

          {/* Dot Pattern */}
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
            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍴</span>
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight text-black">
                  Sahi Restaurant
                </h1>

                <p className="text-xs text-black/60">
                  Taste that feels right.
                </p>
              </div>

            </div>


            {/* Main Content */}
            <div className="max-w-md mt-10 lg:mt-0">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/10 border border-black/10 mb-5">

                <span className="w-2 h-2 rounded-full bg-black" />

                <span className="text-xs font-medium text-black/70">
                  Join the food community
                </span>

              </div>


              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-black">
                Your table
                <br />
                is waiting.
              </h2>


              <p className="mt-6 text-sm sm:text-base text-black/65 max-w-sm leading-relaxed">
                Create your account and discover delicious food,
                trending restaurants and meals made for your cravings.
              </p>


              {/* Feature Cards */}
              <div className="mt-8 space-y-3 max-w-sm">

                <div className="flex items-center gap-4 bg-black/90 rounded-2xl p-4 border border-white/10">

                  <div className="w-11 h-11 rounded-xl bg-[#242424] flex items-center justify-center text-xl">
                    🍔
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Discover great food
                    </p>

                    <p className="text-xs text-white/40 mt-1">
                      Explore meals you'll love.
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4 bg-black/90 rounded-2xl p-4 border border-white/10">

                  <div className="w-11 h-11 rounded-xl bg-[#242424] flex items-center justify-center text-xl">
                    ❤️
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Save your favourites
                    </p>

                    <p className="text-xs text-white/40 mt-1">
                      Keep your favourite meals close.
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Footer */}
            <p className="hidden lg:block text-xs text-black/50">
              © 2026 Sahi Restaurant. Made for food lovers.
            </p>

          </div>

        </div>


        {/* ================= RIGHT SECTION ================= */}
        <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-12 bg-[#0d0d0d]">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-xl bg-[#ff5a00] flex items-center justify-center">
                🍴
              </div>

              <div>
                <h1 className="font-bold text-lg">
                  Sahi Restaurant
                </h1>

                <p className="text-xs text-white/40">
                  Taste that feels right.
                </p>
              </div>

            </div>


            {/* Heading */}
            <div className="mb-7">

              <p className="text-orange-500 text-sm font-semibold mb-3">
                GET STARTED 🍽️
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="text-white/40 text-sm mt-3 leading-relaxed">
                Join Sahi Restaurant and make your food journey
                a little more delicious.
              </p>

            </div>


            {/* Form */}
            <form className="space-y-4">

              {/* Name */}
              <div>

                <label className="block text-sm font-medium text-white/70 mb-2">
                  Username
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    👤
                  </span>

                  <input
                  {...register("username",{
                    required:"Name is required ",
                    minLength:{
                      value:3,
                      message:"minimum 3 digit is required "
                    }
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


              {/* Email */}
              <div>

                <label className="block text-sm font-medium text-white/70 mb-2">
                  Email address
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    ✉
                  </span>

                  <input
                  {...register("email",{
                    required:"Email is required ",
                    pattern:{
                      value:/^\S+@\S+\.\S+$/,
                      message:"Enter a valid email"
                    }
                  })}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 rounded-xl bg-[#181818] border border-white/10 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                  {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}

                </div>

              </div>


              {/* Password */}
              <div>

                <label className="block text-sm font-medium text-white/70 mb-2">
                  Password
                </label>

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
                    placeholder="Create a password"
                    className="w-full h-12 rounded-xl bg-[#181818] border border-white/10 pl-11 pr-16 text-sm outline-none transition-all placeholder:text-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
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


              {/* Confirm Password */}
              <div>

                <label className="block text-sm font-medium text-white/70 mb-2">
                  Confirm Password
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                    🔒
                  </span>

                  <input
                  {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full h-12 rounded-xl bg-[#181818] border border-white/10 pl-11 pr-16 text-sm outline-none transition-all placeholder:text-white/20 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                  {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/30 hover:text-white transition"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>


              {/* Submit */}
              <button
              onClick={handleSubmit(registerForm)}
                type="submit"
                className="w-full h-13 rounded-xl bg-[#ff5a00] hover:bg-[#ff6a1a] active:scale-[0.99] transition-all text-black font-bold text-sm shadow-lg shadow-orange-500/10 mt-1"
              >
                Create Account
              </button>

            </form>








            {/* Login */}
            <p className="text-center text-sm text-white/40 mt-7">

              Already have an account?

              <Link
                to="/"
                className="ml-1.5 text-orange-500 font-semibold hover:text-orange-400 transition"
              >
                Sign in
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;