import { useState } from "react"

import { HiMenu, HiX } from "react-icons/hi"

function Navbar({

  search,

  setSearch,

  selectedCategory,

  setSelectedCategory,

  darkMode,

  setDarkMode,

}) {

  const [menuOpen, setMenuOpen] = useState(false)

  const categories = [

    "All",

    "Mens",

    "Womens",

    "Watches",

    "Jewelleries",

    "Footwear",

  ]

  return (

    <nav

      className={`sticky top-0 z-50 border-b backdrop-blur-md transition duration-300 ${

        darkMode

          ? "bg-black/90 border-white/10 text-white"

          : "bg-white/90 border-black/10 text-black"

      }`}

    >

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-5">

        {/* LOGO */}
        <h1 className="text-3xl font-bold whitespace-nowrap">
          Dreamy Drapes
        </h1>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 justify-center">

          <input

            type="text"

            placeholder="Search outfits..."

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            className={`px-5 py-3 rounded-2xl outline-none w-full max-w-md transition ${

              darkMode

                ? "bg-zinc-900 text-white"

                : "bg-gray-200 text-black"

            }`}

          />

        </div>

        {/* DESKTOP CATEGORIES */}
        <div className="hidden lg:flex gap-3 flex-wrap justify-end">

          {categories.map((category) => (

            <button

              key={category}

              onClick={() => setSelectedCategory(category)}

              className={`px-5 py-2 rounded-full transition ${

                selectedCategory === category

                  ? darkMode

                    ? "bg-white text-black"

                    : "bg-black text-white"

                  : darkMode

                  ? "bg-zinc-900 text-white hover:bg-zinc-800"

                  : "bg-gray-200 text-black hover:bg-gray-300"

              }`}

            >

              {category}

            </button>

          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DARK MODE BUTTON */}
          <button

            onClick={() => setDarkMode(!darkMode)}

            className={`px-4 py-2 rounded-xl transition ${

              darkMode

                ? "bg-zinc-800 text-white hover:bg-zinc-700"

                : "bg-gray-200 text-black hover:bg-gray-300"

            }`}

          >

            {darkMode ? "☀️" : "🌙"}

          </button>

          {/* MOBILE MENU BUTTON */}
          <button

            className="lg:hidden text-3xl"

            onClick={() => setMenuOpen(!menuOpen)}

          >

            {menuOpen ? <HiX /> : <HiMenu />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="lg:hidden px-6 pb-6">

          <input

            type="text"

            placeholder="Search outfits..."

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            className={`px-5 py-3 rounded-2xl outline-none w-full transition ${

              darkMode

                ? "bg-zinc-900 text-white"

                : "bg-gray-200 text-black"

            }`}

          />

          <div className="flex flex-wrap gap-3 mt-5">

            {categories.map((category) => (

              <button

                key={category}

                onClick={() => {

                  setSelectedCategory(category)

                  setMenuOpen(false)

                }}

                className={`px-5 py-2 rounded-full transition ${

                  selectedCategory === category

                    ? darkMode

                      ? "bg-white text-black"

                      : "bg-black text-white"

                    : darkMode

                    ? "bg-zinc-900 text-white"

                    : "bg-gray-200 text-black"

                }`}

              >

                {category}

              </button>

            ))}

          </div>

        </div>

      )}

    </nav>
  )
}

export default Navbar
