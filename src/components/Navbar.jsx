import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

function Navbar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
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

    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">

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
            className="bg-zinc-900 px-5 py-3 rounded-2xl outline-none w-full max-w-md"
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
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              }`}
            >

              {category}

            </button>

          ))}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <HiX /> : <HiMenu />}

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="lg:hidden px-6 pb-6">

          <input
            type="text"
            placeholder="Search outfits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-900 px-5 py-3 rounded-2xl outline-none w-full"
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
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-white"
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