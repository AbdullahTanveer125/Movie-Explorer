"use client";// src/components/Hero.js


export default function HeroSection() {





  return (
    <section className="relative h-screen">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        ref={(video) => {
          if (video) video.playbackRate = 0.3; // Adjust between 0.1 (slowest) to 1.0 (normal)
        }}
      />


      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-00 bg-opacity-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">Millions of movies, TV shows and people to discover. Explore now.</p>
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition">Search</button>
      </div>
    </section>
  );
}
