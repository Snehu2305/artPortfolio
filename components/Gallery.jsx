import React, { useState } from "react";
import galleryData from "../Data/gallery";

const categories = ["All", "Mandala", "Sketch", "Spiritual", "Modern", "Rangoli", "Festival"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔥 Filter logic
  const filteredData =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.label === selectedCategory);

     
  return (
    <div className="px-10 bg-black text-white">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-8">
        My Artwork
      </h2>

      {/* 🔥 FILTER BAR */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
              px-4 py-2 rounded-full border transition
              ${
                selectedCategory === cat
                  ? "bg-[#E6C35C] text-black"
                  : "border-[#E6C35C] text-[#E6C35C] hover:bg-[#E6C35C] hover:text-black"
              }
            `}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* 🔥 GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {filteredData.map((item) => (
          <div
            key={item.id}
            className="
              group relative rounded-xl overflow-hidden cursor-pointer
              border border-transparent
              hover:border-[#E6C35C]
              hover:shadow-[0_0_15px_#E6C35C]
              transition duration-300
            "
            onClick={() => setSelectedImage(item)}
          >

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full h-56 object-cover
                transition duration-500
                group-hover:scale-110
                group-hover:blur-sm
              "
            />

            {/* Overlay */}
            <div className="
              absolute inset-0 
              flex flex-col items-center justify-center
              opacity-0 group-hover:opacity-100
              transition duration-300
              bg-black/40
            ">
              <h3 className="text-[#E6C35C] text-lg font-semibold bg-black/70 px-4 py-2 rounded">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm mt-2">
                View Artwork →
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* 🔥 MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            <h3 className="text-center text-[#E6C35C] mt-4 text-lg">
              {selectedImage.title}
            </h3>

            <p className="text-center text-gray-300 mt-2 text-sm">
              {selectedImage.desc}
            </p>

          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;