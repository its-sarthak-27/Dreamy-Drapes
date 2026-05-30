import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HiEye } from "react-icons/hi"

function PostCard({ post, darkMode }) {

  const [currentImage, setCurrentImage] =
    useState(0)

  const [hovered, setHovered] =
    useState(false)

  const [showQuickView, setShowQuickView] =
    useState(false)

  useEffect(() => {

    let interval

    if (hovered && post.images?.length > 1) {

      interval = setInterval(() => {

        setCurrentImage((prev) =>
          prev === post.images.length - 1
            ? 0
            : prev + 1
        )

      }, 2000)

    }

    return () => clearInterval(interval)

  }, [hovered, post.images])

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.5,
      }}

    >

      <Link to={`/post/${post.id}`}>

        <div

          onMouseEnter={() => setHovered(true)}

          onMouseLeave={() => {

            setHovered(false)
            setCurrentImage(0)

          }}

          className={`rounded-2xl overflow-hidden hover:scale-[1.03] transition duration-300 shadow-lg ${

            darkMode
              ? "bg-zinc-900 text-white"
              : "bg-white text-black"

          }`}

        >

          <img

            src={post.images?.[currentImage]}

            

            alt={post.title}

            className="w-full h-[320px] object-cover"

          />

          <div className="p-5">

            <h2 className="text-xl font-bold">

              {post.title}

            </h2>

            <p className={`mt-2 ${

              darkMode
                ? "text-gray-400"
                : "text-gray-600"

            }`}>

              {post.products.length} Products

            </p>

          </div>

        </div>

      </Link>

    </motion.div>

  )

}

export default PostCard
