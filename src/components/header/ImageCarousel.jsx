// "use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Electricity Services",
    caption: "Manage your electricity bills and connections with ease",
    image:
      "https://t3.ftcdn.net/jpg/02/99/23/72/360_F_299237262_Cj3wYz3HK7Aak1qNW4biP268qL1wphOr.jpg",
  },
  {
    id: 2,
    title: "WASA Waters Service",
    caption: "Water and sanitation authority services at your fingertips",
    image:
      "https://images.unsplash.com/photo-1658657927547-0493d810791f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2F0ZXIlMjBhZ2VuY2llc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "PTCL Telecommunications",
    caption: "Reliable internet and phone services for your needs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/PTCL_phone_shop.jpg/640px-PTCL_phone_shop.jpg",
  },
  {
    id: 4,
    title: "Gas Services",
    caption: "Natural gas connections and billing made simple",
    image:
      "https://media.istockphoto.com/id/616901104/photo/factory-worker-turning-valve.jpg?s=612x612&w=0&k=20&c=_UDq4IdrYevrsGTUdxVF6rNH1qNtQo60RcbnOkUrpCU=",
  },
  {
    id: 5,
    title: "Income Tax Calculator",
    caption: "Calculate your taxes accurately and efficiently",
    image:
      "https://plus.unsplash.com/premium_photo-1677865215414-f78e263f7c85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5jb21lJTIwdGF4JTIwY2FsY3VsYW90cnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Gold Rate Checker",
    caption: "Stay updated with current gold prices and trends",
    image:
      "https://media.istockphoto.com/id/2213657456/photo/gold-bar-trading-business-people-hand-offering-gold%C3%A2%C2%A0investment-in-gold-mining-company-or.jpg?s=612x612&w=0&k=20&c=Kf-SgSsQ80VBaVt8h7Ji5miMdaRyZzOQK5SW0qVb3v4=",
  },
];

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Auto-transition every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black-400 bg-opacity-50" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-gray-200 px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90 animate-fade-in-delay text-white">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-black p-2 rounded-sm transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-black p-2 rounded-sm transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-black scale-110"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
