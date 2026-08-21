import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiShield,
  FiUser,
  FiDatabase,
  FiHeart,
  FiLock,
  FiMail,
  FiSettings,
} from "react-icons/fi";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white">


      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

        {/* ================= HERO ================= */}

        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a00]/10 text-[#ff5a00]">
            <FiShield size={25} />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
            Your Privacy Matters
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/35">
            This Privacy Policy explains how Sahi Restaurant
            collects, uses and protects information when you use
            our application.
          </p>

          <p className="mt-3 text-xs text-white/20">
            Last updated: August 17, 2026
          </p>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="mt-10 space-y-4">

          {/* Introduction */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiShield size={18} />
              </div>

              <div>

                <h2 className="text-lg font-bold">
                  1. Introduction
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  At Sahi Restaurant, we respect your privacy.
                  This policy describes what information may be
                  collected when you use our application and how
                  that information may be used.
                </p>

              </div>

            </div>

          </section>


          {/* Information We Collect */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiDatabase size={18} />
              </div>

              <div className="flex-1">

                <h2 className="text-lg font-bold">
                  2. Information We Collect
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  Depending on how you use Sahi Restaurant, the
                  application may handle information such as:
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/40">

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a00]" />
                    Name, email address and account information.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a00]" />
                    Information related to recipes, favorites and
                    orders.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a00]" />
                    Information stored locally by your browser,
                    such as cart and favorite items.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5a00]" />
                    Basic technical information required for the
                    application to function properly.
                  </li>

                </ul>

              </div>

            </div>

          </section>


          {/* Local Storage */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiSettings size={18} />
              </div>

              <div className="flex-1">

                <h2 className="text-lg font-bold">
                  3. Local Storage
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  Sahi Restaurant may use your browser's local
                  storage to maintain application data between
                  sessions.
                </p>

                <div className="mt-4 rounded-xl border border-white/5 bg-[#181818] p-4">

                  <p className="text-xs text-white/30">
                    Example stored data
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/50">
                      cart
                    </span>

                    <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/50">
                      favorites
                    </span>

                    <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-white/50">
                      orders
                    </span>

                  </div>

                </div>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  Clearing your browser's local storage may remove
                  locally stored application data.
                </p>

              </div>

            </div>

          </section>


          {/* How We Use Information */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              4. How We Use Information
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              Information handled by the application may be used
              to provide features, maintain your preferences,
              process orders, improve the user experience and
              communicate with you when necessary.
            </p>

          </section>


          {/* Favorites and Orders */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiHeart size={18} />
              </div>

              <div>

                <h2 className="text-lg font-bold">
                  5. Favorites & Orders
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  Recipes saved as favorites and order information
                  may be stored locally in your browser depending
                  on the application's current configuration.
                  This allows your preferences and order history to
                  remain available after refreshing the page.
                </p>

              </div>

            </div>

          </section>


          {/* Account Information */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiUser size={18} />
              </div>

              <div>

                <h2 className="text-lg font-bold">
                  6. Account Information
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  If you create an account, information associated
                  with that account may be used to provide
                  authentication and account-related functionality.
                  You should keep your login credentials secure.
                </p>

              </div>

            </div>

          </section>


          {/* Data Security */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiLock size={18} />
              </div>

              <div>

                <h2 className="text-lg font-bold">
                  7. Data Security
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  We take reasonable steps to protect information
                  handled by the application. However, no method of
                  electronic storage or transmission can be
                  guaranteed to be completely secure.
                </p>

              </div>

            </div>

          </section>


          {/* Third Party Services */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              8. Third-Party Services
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              Sahi Restaurant may use third-party services or APIs
              to provide recipe data, images or other application
              functionality. These services may have their own
              privacy policies and terms.
            </p>

          </section>


          {/* Children's Privacy */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              9. Children's Privacy
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              Our application is not intentionally designed to
              collect personal information from children without
              appropriate consent. If you believe that information
              has been submitted improperly, please contact us.
            </p>

          </section>


          {/* Changes */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              10. Changes to This Privacy Policy
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              We may update this Privacy Policy when our
              application, features or data practices change.
              Updated versions will be published on this page.
            </p>

          </section>


          {/* Contact */}

          <section className="rounded-2xl border border-[#ff5a00]/20 bg-[#ff5a00]/5 p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/15 text-[#ff5a00]">
                <FiMail size={18} />
              </div>

              <div>

                <h2 className="text-lg font-bold">
                  11. Contact Us
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  If you have questions or concerns about this
                  Privacy Policy, please contact us.
                </p>

                <Link
                  to="/home/contact"
                  className="mt-5 inline-flex items-center rounded-xl bg-[#ff5a00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-orange-400"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </section>

        </div>


        {/* ================= FOOTER NOTE ================= */}

        <div className="mt-10 text-center">

          <p className="text-xs leading-6 text-white/20">
            By using Sahi Restaurant, you acknowledge that you
            have read and understood this Privacy Policy.
          </p>

        </div>

      </main>

    </div>
  );
};

export default PrivacyPage;