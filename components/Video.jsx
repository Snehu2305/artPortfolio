import React, { useState } from "react";
import videoData from "../Data/video";

const Video = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(videoData.map((item) => item.category)),
  ];

  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="bg-black text-white px-10 py-16">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-8">
        Video Tutorials 🎥
      </h2>

      {/* FILTER BAR */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
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

      {/* VIDEO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="
              rounded-xl overflow-hidden
              border border-transparent
              hover:border-[#E6C35C]
              hover:shadow-[0_0_15px_#E6C35C]
              transition duration-300
            "
          >

            {/* VIDEO */}
            <iframe
              className="w-full h-56"
              src={video.url}
              title={video.title}
              allowFullScreen
            ></iframe>

            {/* TITLE */}
            <h3 className="text-center text-[#E6C35C] py-3 text-sm">
              {video.title}
            </h3>

          </div>
        ))}

      </div>

      {/* NO RESULT */}
      {filteredVideos.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No videos found 🎥
        </p>
      )}

    </div>
  );
};

export default Video;