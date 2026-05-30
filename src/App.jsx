import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { useState, useEffect } from "react"

import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import ProductDetail from "./pages/ProductDetail"

import { posts } from "./data/products"

function Home() {

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [darkMode, setDarkMode] =
  useState(() => {

    const savedMode =
      localStorage.getItem("darkMode")

    return savedMode === null
      ? true
      : JSON.parse(savedMode)
  })
  useEffect(() => {

  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  )

}, [darkMode])

  const filteredPosts = posts.filter((post) => {

    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (

    <div
   className={`min-h-screen transition duration-300 ${
    darkMode
      ? "bg-black text-white"
      : "bg-[#f5f5f5] text-black"
  }`}
>

      <Navbar
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <section className="text-center py-24 px-5">

        <p className="text-gray-400 uppercase tracking-[6px]">
          Fashion Affiliate Store
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mt-6 leading-tight">

          Curated Fashion
          <br />
          For Every Style

        </h1>

      </section>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-4 pb-14 max-w-[1600px] mx-auto">

        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            darkMode={darkMode}
          />
        ))}

      </div>

    </div>
  )
}

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/post/:id"
          element={<ProductDetail />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
