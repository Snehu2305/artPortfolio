const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[80vh] flex flex-col justify-center items-center text-center text-white px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/8e/2d/4e/8e2d4e56ae57f186014f5e9d82eec9e0.jpg')", // 👈 add your image here
      }}
    >

     
      <div className="absolute inset-0 bg-black/70"></div>

      
      {/* <div className="absolute w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-[#E6C35C]/20 rounded-full blur-3xl bottom-20 right-10"></div> */}

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10">

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37] mb-4">
          Snehal’s Creative Corner 
        </h1>

        <p className="sm:text-base md:text-lg text-2xl text-gray-300 max-w-2xl mb-6">
          Where every line tells a story and every pattern reflects peace.
        </p>

        <p className="text-[#C9A94F] italic mb-6">
          From Snehal’s hands, through Gouri’s soul ✨
        </p>

      </div>
    </div>
  );
};

export default Hero;