import { Link } from "react-router-dom"

function PostCard({ post }) {
  return (

    <Link to={`/post/${post.id}`}>

      <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">

        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-5">

          <h2 className="text-2xl font-bold">
            {post.title}
          </h2>

          <p className="text-gray-400 mt-2">
            {post.products.length} Products
          </p>

        </div>

      </div>

    </Link>
  )
}

export default PostCard