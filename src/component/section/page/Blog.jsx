import { useState } from "react";
import { blogPosts } from "../../../data/blogData ";
import { CommonHero } from "../../shareComponents/CommonHero";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  return (
    <section>
      <div className="container mx-auto px-1 mt-[150px] py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left side - Blog list */}
        <div className="md:col-span-1 space-y-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`p-3 rounded-lg cursor-pointer border ${
                selectedPost.id === post.id
                  ? "bg-pink-100 border-pink-400"
                  : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => setSelectedPost(post)}
            >
              <h2 className="font-bold text-lg">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          ))}
        </div>

        {/* Right side - Blog detail */}
        <div className="md:col-span-2">
          {/* Main Selected Blog */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded"
            />
            <h1 className="text-2xl font-bold mt-4">{selectedPost.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
              {selectedPost.category} • {selectedPost.date}
            </p>
            <p className="text-gray-700 mb-4">{selectedPost.fullContent}</p>
          </div>

          {/* Related Blogs */}
          <h2 className="text-xl font-bold mb-4">Related Blogs</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {blogPosts
              .filter((p) => p.id !== selectedPost.id)
              .slice(0, 6)
              .map((related) => (
                <div
                  key={related.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 cursor-pointer"
                  onClick={() => setSelectedPost(related)}
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h3 className="mt-2 font-bold text-sm">{related.title}</h3>
                  <p className="text-xs text-gray-500">{related.date}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
