"use client";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* ✅ Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white bg-slate-800 z-20">
        <h1 className="text-2xl font-bold drop-shadow-lg">ResQLearn</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="/home" className="hover:text-blue-400 drop-shadow-lg">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400 drop-shadow-lg">About Us</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 drop-shadow-lg">Contact</a>
          </li>
          <li>
            <a href="/login" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 shadow-lg">Logout</a>
          </li>
          <li>
            <a href="/profile" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 shadow-lg">Profile</a>
          </li>
        </ul>
      </nav>

      {/* ✅ Background Section */}
      <section
        className="relative flex-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/disaster_bg.jpg')" }}
      >
        {/* Blurry Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center text-slate-300">
          {/* Full-width About Section */}
          <div className="w-full mb-16">
            <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
            <p className="text-2xl font-semibold leading-relaxed max-w-4xl mx-auto">
              Our mission is to provide simple, reliable, and practical
              resources for disaster preparedness and safety education.
              We aim to empower individuals and communities to respond
              confidently in emergencies.
            </p>
          </div>

          {/* ✅ Features Section */}
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div className="bg-white/90 text-gray-800 shadow-xl rounded-2xl p-10 hover:scale-105 transition-transform">
              <span className="text-5xl">🌍</span>
              <h3 className="text-2xl font-semibold mt-6">Global Awareness</h3>
              <p className="text-lg text-gray-600 mt-4">
                Raising awareness about disaster readiness worldwide.
              </p>
            </div>

            <div className="bg-white/90 text-gray-800 shadow-xl rounded-2xl p-10 hover:scale-105 transition-transform">
              <span className="text-5xl">📚</span>
              <h3 className="text-2xl font-semibold mt-6">Learning Resources</h3>
              <p className="text-lg text-gray-600 mt-4">
                Courses, quizzes, and guides to prepare you better.
              </p>
            </div>

            <div className="bg-white/90 text-gray-800 shadow-xl rounded-2xl p-10 hover:scale-105 transition-transform">
              <span className="text-5xl">🤝</span>
              <h3 className="text-2xl font-semibold mt-6">Community Support</h3>
              <p className="text-lg text-gray-600 mt-4">
                Working together to create safer communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      {/* <footer className="bg-slate-900 text-gray-400 py-8"> */}
        <footer className="text-center bg-slate-900 text-gray-400 py-8">
          © 2025 ResQLearn. All rights reserved.
        </footer>
      {/* </footer> */}
    </main>
  );
}
