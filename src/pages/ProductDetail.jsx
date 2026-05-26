import { useParams } from "react-router-dom"
import { posts } from "../data/products"

function ProductDetail() {

  const { id } = useParams()

  const post = posts.find(
    (item) => item.id === Number(id)
  )

  return (

    <div className="bg-black min-h-screen text-white">

      <div className="max-w-6xl mx-auto px-6 py-14">

        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full rounded-3xl max-h-[700px] object-cover"
        />

        <h1 className="text-5xl font-bold mt-10">
          {post.title}
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          {post.products.length} linked products
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {post.products.map((product, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-7"
            >

              <h2 className="text-2xl font-semibold">
                {product.name}
              </h2>

              <p className="text-gray-400 mt-3">
                {product.price}
              </p>

              <a
                href={product.affiliateLink}
                target="_blank"
                className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-2xl font-bold hover:bg-gray-300 transition"
              >
                Buy Now
              </a>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default ProductDetail