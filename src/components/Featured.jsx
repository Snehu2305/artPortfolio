import React from 'react'
import arts from '../Data/FeaturedArt'

const Featured = () => {
  return (
    <div className="px-10 py-16 bg-black text-white">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-10">
        Featured Artwork
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {arts.map((item) => (
          <div className="bg-[#111] border border-[#2a2a2a] rounded-xl overflow-hidden group">
  
  {/* Image Container */}
  <div className="w-full h-64 bg-black flex items-center justify-center overflow-hidden">
    
    <img
      src={item.image}
      alt={item.title}
      className="
        w-full h-full
        object-cover object-center
        transition-all duration-500
        
        group-hover:object-contain
        group-hover:p-2
      "
    />
  </div>

  {/* Title */}
  <div className="p-4 text-center">
    <h3 className="text-[#E6C35C] text-lg font-medium">
      {item.title}
    </h3>
  </div>

</div>
        ))}

      </div>
    </div>
  )
}

export default Featured