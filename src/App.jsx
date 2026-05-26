import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import ProductDetail from "./pages/ProductDetail"
import { useState, useEffect } from "react"

import { posts } from "./data/products"

function Home() {

  return (

    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <section className="text-center py-16 px-5">

        <h1 className="text-6xl font-bold">
          Discover Your Style
        </h1>

        <p className="text-gray-400 mt-5 text-lg">
          Fashion inspiration curated for you.
        </p>

      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pb-14">

        {posts.map((post) => (
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