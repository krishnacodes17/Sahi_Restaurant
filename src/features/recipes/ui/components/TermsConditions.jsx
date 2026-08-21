import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiShield,
  FiShoppingBag,
  FiHeart,
  FiUser,
  FiAlertCircle,
} from "react-icons/fi";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ================= HEADER ================= */}


      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

        {/* ================= HERO ================= */}

        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a00]/10 text-[#ff5a00]">
            <FiShield size={25} />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff5a00]">
            Legal Information
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/35">
            Please read these terms carefully before using
            Sahi Restaurant and its services.
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
                <FiAlertCircle size={18} />
              </div>

              <div>

                <h2 className="text-lg font-bold">
                  1. Introduction
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  Welcome to Sahi Restaurant. By accessing or using
                  our website and services, you agree to be bound by
                  these Terms & Conditions. If you do not agree with
                  any part of these terms, please do not use our
                  services.
                </p>

              </div>

            </div>

          </section>


          {/* Account */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiUser size={18} />
              </div>

              <div className="flex-1">

                <h2 className="text-lg font-bold">
                  2. User Accounts
                </h2>

                <div className="mt-3 space-y-3 text-sm leading-7 text-white/40">

                  <p>
                    Some features may require you to create an
                    account. You are responsible for providing
                    accurate information during registration.
                  </p>

                  <p>
                    You are responsible for maintaining the
                    confidentiality of your account credentials and
                    for all activity performed through your account.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* Orders */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiShoppingBag size={18} />
              </div>

              <div className="flex-1">

                <h2 className="text-lg font-bold">
                  3. Orders & Payments
                </h2>

                <div className="mt-3 space-y-3 text-sm leading-7 text-white/40">

                  <p>
                    When placing an order, you agree to provide
                    accurate information required for processing and
                    delivery.
                  </p>

                  <p>
                    Prices, availability, delivery charges and other
                    details may change without prior notice.
                  </p>

                  <p>
                    An order may be cancelled if the requested item
                    is unavailable or if there are issues preventing
                    successful processing.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* Favorites */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5a00]/10 text-[#ff5a00]">
                <FiHeart size={18} />
              </div>

              <div className="flex-1">

                <h2 className="text-lg font-bold">
                  4. Favorites & Saved Content
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  The Favorites feature allows you to save recipes
                  for easier access. Saved recipes are associated with
                  your account or local application data and may be
                  removed when you clear your saved content or
                  application storage.
                </p>

              </div>

            </div>

          </section>


          {/* Recipe Content */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              5. Recipe & Content Information
            </h2>

            <div className="mt-3 space-y-3 text-sm leading-7 text-white/40">

              <p>
                Recipe information displayed on Sahi Restaurant may
                include names, ingredients, cooking instructions,
                images, ratings and nutritional information provided
                by third-party or demonstration data sources.
              </p>

              <p>
                Such information is provided for general
                informational purposes and may not always be
                completely accurate or up to date.
              </p>

            </div>

          </section>


          {/* Acceptable Use */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              6. Acceptable Use
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              You agree not to misuse the website, attempt to gain
              unauthorized access, interfere with the operation of
              the service, or use the platform for unlawful
              activities.
            </p>

          </section>


          {/* Intellectual Property */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              7. Intellectual Property
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              The Sahi Restaurant name, branding, interface design
              and original content may be protected by applicable
              intellectual property laws. You may not reproduce,
              modify or redistribute protected content without
              appropriate permission.
            </p>

          </section>


          {/* Disclaimer */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              8. Disclaimer
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              Sahi Restaurant is provided on an "as available"
              basis. We do not guarantee that the service will
              always be uninterrupted, error-free or completely
              accurate.
            </p>

          </section>


          {/* Changes */}

          <section className="rounded-2xl border border-white/10 bg-[#111111] p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              9. Changes to These Terms
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              We may update these Terms & Conditions from time to
              time. Any changes will become effective when the
              updated terms are published on this page.
            </p>

          </section>


          {/* Contact */}

          <section className="rounded-2xl border border-[#ff5a00]/20 bg-[#ff5a00]/5 p-5 sm:p-7">

            <h2 className="text-lg font-bold">
              10. Contact Us
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/40">
              If you have any questions regarding these Terms &
              Conditions, you can contact us through our Contact
              Us page.
            </p>

            <Link
              to="/home/contact"
              className="mt-5 inline-flex items-center rounded-xl bg-[#ff5a00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-orange-400"
            >
              Contact Us
            </Link>

          </section>

        </div>


        {/* ================= FOOTER NOTE ================= */}

        <div className="mt-10 text-center">

          <p className="text-xs leading-6 text-white/20">
            By using Sahi Restaurant, you acknowledge that you have
            read and agreed to these Terms & Conditions.
          </p>

        </div>

      </main>

    </div>
  );
};

export default TermsConditions;