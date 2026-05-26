import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { useState } from "react"

import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import ProductDetail from "./pages/ProductDetail"

import { posts } from "./data/products"

function Home() {

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = posts.filter((post) => {

    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (

    <div className="bg-black min-h-screen text-white">

      <Navbar
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-14 max-w-7xl mx-auto">

        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
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
