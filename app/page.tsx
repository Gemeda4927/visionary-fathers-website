import {
  Users,
  HeartHandshake,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HEADER (GREEN PREMIUM STYLE) */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 md:px-10 py-5">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center text-white font-bold shadow-lg">
              VF
            </div>

            <div>
              <h1 className="text-lg font-extrabold text-emerald-700 leading-tight">
                Visionary Fathers
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                Awakening Group
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
            <a className="hover:text-emerald-600 transition">Home</a>
            <a className="hover:text-emerald-600 transition">About</a>
            <a className="hover:text-emerald-600 transition">Programs</a>
            <a className="hover:text-emerald-600 transition">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition">
              Login
            </button>

            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
              Join Us
            </button>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 flex flex-col items-center text-center">

        {/* Background Glow */}
        <div className="absolute w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl opacity-50 top-[-120px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-lime-100 rounded-full blur-3xl opacity-40 bottom-[-120px] right-0"></div>

        <div className="relative z-10 max-w-4xl">

          {/* Badge */}
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
            Community • Leadership • Transformation
          </span>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Empowering Fathers to Build
            <span className="text-emerald-600"> Stronger Families</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Visionary Fathers Awakening Group is committed to transforming lives
            through mentorship, leadership development, and community empowerment
            that creates lasting positive impact.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 transition">
              Get Started
            </button>

            <button className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 hover:border-emerald-600 hover:text-emerald-600 transition">
              Learn More
            </button>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold text-emerald-600">500+</h3>
              <p className="text-sm text-gray-500 mt-1">Members</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-600">50+</h3>
              <p className="text-sm text-gray-500 mt-1">Programs</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-emerald-600">10+</h3>
              <p className="text-sm text-gray-500 mt-1">Communities</p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-12 pb-24 max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        <div className="p-6 rounded-2xl border bg-white hover:shadow-xl hover:-translate-y-1 transition">
          <Users className="text-emerald-600 w-8 h-8" />
          <h3 className="mt-4 text-lg font-bold">Mentorship</h3>
          <p className="text-sm text-gray-600 mt-2">
            Guidance programs for personal and family growth.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white hover:shadow-xl hover:-translate-y-1 transition">
          <HeartHandshake className="text-lime-600 w-8 h-8" />
          <h3 className="mt-4 text-lg font-bold">Community</h3>
          <p className="text-sm text-gray-600 mt-2">
            Building strong support systems for fathers.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white hover:shadow-xl hover:-translate-y-1 transition">
          <TrendingUp className="text-emerald-600 w-8 h-8" />
          <h3 className="mt-4 text-lg font-bold">Growth</h3>
          <p className="text-sm text-gray-600 mt-2">
            Empowering leadership and personal development.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-white hover:shadow-xl hover:-translate-y-1 transition">
          <ShieldCheck className="text-lime-600 w-8 h-8" />
          <h3 className="mt-4 text-lg font-bold">Support</h3>
          <p className="text-sm text-gray-600 mt-2">
            Safe environment for transformation and healing.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Visionary Fathers Awakening Group. All rights reserved.
      </footer>

    </main>
  );
}