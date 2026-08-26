import React from 'react'
import { useNavigate } from "react-router-dom";

const Journey = () => {

    const navigate = useNavigate();
    
  return (
    <div className="min-h-screen bg-black text-[#E6C35C] flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-bold mb-2 text-center">My Art Journey</h1>

       <div className="
            flex flex-col md:flex-row 
            items-center justify-center 
            mt-10 gap-8 
            px-4 sm:px-8 md:px-20 lg:px-40 
            text-sm sm:text-base md:text-lg
          ">
             <img
                    src="../images/profile.jpeg"
                    alt="profile"
                    className="w-32 h-40 object-cover rounded-2xl border-2 border-[#D4AF37] shadow-lg mb-6"
             />

             <div className='text-[#C9A94F]'>
                <p>I create mandala art that blends symmetry, patience, and                              creativity.
                  Each piece reflects calmness, culture, and imagination</p>
                <p>
                    What started as simple patterns slowly grew into a passion for detailed and meaningful designs.
                    Through every stroke and repetition, I discovered the beauty of focus, balance, and mindfulness.
                </p>
                    <p>My art is not just about drawing — it’s about expressing peace, emotions, and creativity through patterns.
                    Each mandala I create carries a story of patience, dedication, and artistic growth.
                </p>
             </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <p className="bg-[#B8963F] border border-[#D4AF37] text-black px-6 py-4 rounded-xl shadow-md hover:bg-[#D4AF37] transition duration-300">60+ <br />
               Mandalas
            </p>
            <p className="bg-[#B8963F] border border-[#D4AF37] text-black px-6 py-4 rounded-xl shadow-md hover:bg-[#D4AF37] transition duration-300">2+ <br />
              years of <br /> practice
            </p>
            <p className="bg-[#B8963F] border border-[#D4AF37] text-black px-6 py-4 rounded-xl shadow-md hover:bg-[#D4AF37] transition duration-300">Unique <br /> Creative <br /> Designs
            </p>
            <p className="bg-[#B8963F] border border-[#D4AF37] text-black px-6 py-4 rounded-xl shadow-md hover:bg-[#D4AF37] transition duration-300">Mindfulness <br /> Inspired <br /> Art
            </p>
        </div>

            <button
            className="w-50 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]
            text-black font-semibold py-2 rounded-full shadow-md 
            hover:scale-105 hover:shadow-lg transition duration-300 mt-10"
            onClick={() => navigate("/gallery")}
            >
            Explore More ➜
            </button>
    </div>
  )
}

export default Journey