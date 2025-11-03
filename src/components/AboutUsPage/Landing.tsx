import React from 'react'

const Landing = () => {
  return (
     <section
      className="relative w-full h-[380px] md:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/about-bg.jpg')" }} // <-- Replace with your image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-white font-extrabold text-4xl md:text-5xl">
          About Our Office
        </h2>
        <p className="text-gray-200 mt-4 text-sm md:text-base leading-relaxed">
         We build scalable digital products and custom software solutions for startups
and enterprises. From product strategy to design and development, our team
delivers reliable, high-performance systems that empower businesses to grow.

        </p>
      </div>
    </section>
  )
}

export default Landing