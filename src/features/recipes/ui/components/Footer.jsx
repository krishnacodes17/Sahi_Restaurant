import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-1 border-white/10 bg-[#080808]">

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* ================= BRAND ================= */}

          <div className="sm:col-span-2 lg:col-span-1">

            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex items-center gap-3"
            >

              {/* Logo */}

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff5a00] text-xl">
                🍴
              </div>


              {/* Brand Name */}

              <div>
                <h2 className="text-lg font-bold text-white">
                  Sahi Restaurant
                </h2>

                <p className="mt-0.5 text-[10px] text-white/35">
                  Taste that feels right.
                </p>
              </div>

            </Link>


            <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
              Discover delicious food, explore amazing recipes
              and find something perfect for every craving.
            </p>


            {/* Social Icons */}

            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-white/50 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
              >
                <FaInstagram size={17} />
              </a>


              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-white/50 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
              >
                <FaFacebookF size={16} />
              </a>


              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-white/50 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
              >
                <FaTwitter size={17} />
              </a>


              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#151515] text-white/50 transition hover:border-[#ff5a00]/40 hover:text-[#ff5a00]"
              >
                <FaGithub size={17} />
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-sm font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  to="/home"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/home/menu"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  Menu
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/home/cart"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  My Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/home/orders"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  My Orders
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= SUPPORT ================= */}

          <div>

            <h3 className="text-sm font-semibold text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  to="/home/about"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/home/contact"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/home/privacy"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/home/terms"
                  className="text-sm text-white/40 transition hover:text-[#ff5a00]"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="text-sm font-semibold text-white">
              Get in touch
            </h3>


            <div className="mt-5 space-y-4">

              {/* Location */}

              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#151515] text-[#ff5a00]">
                  <FiMapPin size={16} />
                </div>

                <div>
                  <p className="text-xs text-white/25">
                    Visit us
                  </p>

                  <p className="mt-1 text-sm leading-5 text-white/40">
                    Model Town,
                    <br />
                    New Delhi, India
                  </p>
                </div>

              </div>


              {/* Phone */}

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#151515] text-[#ff5a00]">
                  <FiPhone size={16} />
                </div>

                <div>
                  <p className="text-xs text-white/25">
                    Call us
                  </p>

                  <p className="mt-1 text-sm text-white/40">
                    +91 98765 43210
                  </p>
                </div>

              </div>


              {/* Email */}

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#151515] text-[#ff5a00]">
                  <FiMail size={16} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/25">
                    Email us
                  </p>

                  <p className="mt-1 break-all text-sm text-white/40">
                    hello@sahirestaurant.com
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= NEWSLETTER ================= */}

        <div className="mt-12 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h3 className="text-base font-semibold text-white">
                Get delicious updates
              </h3>

              <p className="mt-1 text-xs text-white/35">
                New dishes, special offers and food inspiration.
              </p>

            </div>


            <form className="flex w-full gap-2 lg:w-auto">

              <div className="relative flex-1 lg:w-72">

                <FiMail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#151515] pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#ff5a00]/50"
                />

              </div>


              <button
                type="submit"
                className="h-11 shrink-0 rounded-xl bg-[#ff5a00] px-5 text-sm font-bold text-black transition hover:bg-orange-400 active:scale-95"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">

          <p className="text-center text-xs text-white/25 sm:text-left">
            © 2026 Sahi Restaurant. All rights reserved.
          </p>


          <div className="flex items-center gap-5">

            <Link
              to="/home/privacy"
              className="text-xs text-white/30 transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/home/terms"
              className="text-xs text-white/30 transition hover:text-white"
            >
              Terms
            </Link>


            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-white/35 transition hover:text-[#ff5a00]"
            >
              Back to top

              <FiArrowUp size={14} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;