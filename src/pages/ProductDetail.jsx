import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { posts } from "../data/products"

import {
  HiChevronLeft,
  HiChevronRight,
  HiArrowLeft,
  HiShare,
} from "react-icons/hi"

function ProductDetail() {

  const { id } = useParams()

  const [darkMode, setDarkMode] =
    useState(true)

  useEffect(() => {

    const savedMode =
      localStorage.getItem("darkMode")

    if (savedMode !== null) {

      setDarkMode(JSON.parse(savedMode))

    }

  }, [])

  const post = posts.find(
    (item) => item.id === Number(id)
  )

  const [currentIndex, setCurrentIndex] =
    useState(0)

  const [showPreview, setShowPreview] =
    useState(false)

  const [zoomed, setZoomed] =
    useState(false)

  const [position, setPosition] =
    useState({ x: 50, y: 50 })

  if (!post) {

    return (

      <div className="bg-black text-white min-h-screen flex items-center justify-center">

        Product Not Found

      </div>

    )
  }

  const selectedImage =
    post.images?.[currentIndex]

  const nextImage = () => {

    setCurrentIndex((prev) =>
      prev === post.images.length - 1
        ? 0
        : prev + 1
    )
  }

  const prevImage = () => {

    setCurrentIndex((prev) =>
      prev === 0
        ? post.images.length - 1
        : prev - 1
    )
  }

  const Navbar = () => {

    return (

      <div
        className={`border-b sticky top-0 z-50 backdrop-blur-md transition duration-300 ${
          darkMode
            ? "bg-black/80 border-white/10"
            : "bg-white/80 border-black/10"
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">

          <Link
            to="/"
            className="text-2xl font-bold"
          >
            Dreamy Drapes
          </Link>

          <Link
            to="/"
            className={`transition ${
              darkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Home
          </Link>

        </div>

      </div>
    )
  }

  return (

    <div
      className={`min-h-screen transition duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-[#f5f5f5] text-black"
      }`}
    >

      <Navbar />

      <div className="max-w-7xl mx-auto px-5 py-10">

        {/* BACK BUTTON */}
        <Link
          to="/"
          className={`inline-flex items-center gap-2 mb-8 transition ${
            darkMode
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-black"
          }`}
        >

          <HiArrowLeft />

          Back

        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>

            {/* MAIN IMAGE */}
            <div
              className={`relative rounded-[35px] overflow-hidden aspect-[2/3] max-w-[450px] mx-auto flex items-center justify-center transition ${
                darkMode
                  ? "bg-zinc-900"
                  : "bg-white shadow-xl"
              }`}
            >

              <img
                src={selectedImage}
                alt={post.title}
                onClick={() => setShowPreview(true)}
                className="max-h-full max-w-full object-contain cursor-zoom-in hover:scale-105 transition duration-300"
              />

              {/* LEFT BUTTON */}
              <button
                onClick={prevImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 transition p-3 rounded-full"
              >

                <HiChevronLeft size={30} />

              </button>

              {/* RIGHT BUTTON */}
              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 transition p-3 rounded-full"
              >

                <HiChevronRight size={30} />

              </button>

            </div>

            {/* THUMBNAILS */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center">

              {post.images?.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt=""
                  onClick={() => setCurrentIndex(index)}
                  className={`w-24 h-24 object-cover rounded-2xl cursor-pointer border-2 transition ${
                    currentIndex === index
                      ? "border-white scale-105"
                      : "border-transparent opacity-70"
                  }`}
                />

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p
              className={`uppercase tracking-[5px] ${
                darkMode
                  ? "text-gray-500"
                  : "text-gray-600"
              }`}
            >

              {post.category}

            </p>

            <h1 className="text-5xl font-bold mt-4 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">

              {post.title}

            </h1>

            {/* SHARE OUTFIT */}
            <button

              onClick={() => {

                navigator.share({

                  title: post.title,

                  text: "Check out this outfit!",

                  url: window.location.href,

                })

              }}

              className={`mt-6 flex items-center gap-2 px-5 py-3 rounded-2xl transition ${
                darkMode
  ? "bg-zinc-900 hover:bg-zinc-800"
  : "bg-gradient-to-r from-green-500 to-indigo-300 text-white shadow-lg hover:opacity-90"
              }`}

            >

              <HiShare />

              Share Outfit

            </button>

            {/* PRODUCTS */}
            <div className="space-y-6 mt-10">

              {post.products.map((product, index) => (

                <div
                  key={index}
                  className={`rounded-3xl p-7 transition ${
                    darkMode
                      ? "bg-zinc-900"
                      : "bg-white shadow-lg"
                  }`}
                >

                  <div className="flex items-center justify-between gap-4">

                    <div>

                      <h2 className="text-2xl font-semibold">

                        {product.name}

                      </h2>

                      <p
                        className={`mt-2 ${
                          darkMode
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >

                        {product.price}

                      </p>

                    </div>

                    <div className="flex items-center gap-3">

                      {/* SHARE */}
                      <button

                        onClick={() => {

                          navigator.share({

                            title: product.name,

                            text: `Check out ${product.name}`,

                            url: product.affiliateLink,

                          })

                        }}

                        className={`p-3 rounded-2xl transition ${
                          darkMode
  ? "bg-zinc-800 hover:bg-zinc-700"
  : "bg-green-100 text-green-700 hover:bg-green-200"
                        }`}

                      >

                        <HiShare />

                      </button>

                      {/* BUY */}
                      <a
                        href={product.affiliateLink}
                        target="_blank"
                        className={`px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition ${
  darkMode
    ? "bg-white text-black hover:bg-gray-200"
    : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-lg"
}`}
                      >

                        Buy

                      </a>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* FULLSCREEN PREVIEW */}
      {showPreview && (

        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={() => {
              setShowPreview(false)
              setZoomed(false)
            }}
            className="absolute top-6 right-6 text-white text-5xl"
          >

            ×

          </button>

          {/* LEFT */}
          <button
            onClick={prevImage}
            className="absolute left-6 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md"
          >

            <HiChevronLeft size={35} />

          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt=""
            onClick={() => setZoomed(!zoomed)}

            onMouseMove={(e) => {

              const { left, top, width, height } =
                e.target.getBoundingClientRect()

              const x =
                ((e.clientX - left) / width) * 100

              const y =
                ((e.clientY - top) / height) * 100

              setPosition({ x, y })

            }}

            style={zoomed ? {

              transform: "scale(2.5)",

              transformOrigin:
                `${position.x}% ${position.y}%`

            } : {}}

            className="transition duration-200 cursor-zoom-in object-contain max-h-[90vh] max-w-[90vw]"
          />

          {/* RIGHT */}
          <button
            onClick={nextImage}
            className="absolute right-6 bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md"
          >

            <HiChevronRight size={35} />

          </button>

        </div>

      )}

    </div>
  )
}

export default ProductDetail