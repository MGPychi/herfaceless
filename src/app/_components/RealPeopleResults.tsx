"use client";

import React, { FC, useState, useRef, useEffect, RefObject } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Link from "next/link";

interface TestimonialImage {
  id: number;
  src: string;
  alt: string;
}

interface ItemsPerView {
  mobile: number;
  tablet: number;
  desktop: number;
}

const RealPeopleResults: FC = () => {
  const scrollContainerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Placeholder images - replace these with actual testimonial images as needed
  const testimonialImages: TestimonialImage[] = [
    { id: 1, src: "/real-people/1.jpeg", alt: "Customer testimonial 1" },
    // { id: 2, src: "/real-people/2.png", alt: "Customer testimonial 2" },
    { id: 3, src: "/real-people/3.jpeg", alt: "Customer testimonial 3" },
    { id: 5, src: "/real-people/5.png", alt: "Customer testimonial 5" },
    { id: 6, src: "/real-people/6.png", alt: "Customer testimonial 6" },
  ];

  const itemsPerView: ItemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const getItemsPerView = (): number => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return itemsPerView.mobile;
      if (window.innerWidth < 1024) return itemsPerView.tablet;
      return itemsPerView.desktop;
    }
    return itemsPerView.desktop;
  };

  const [itemsVisible, setItemsVisible] = useState<number>(getItemsPerView());

  useEffect(() => {
    const handleResize = (): void => {
      setItemsVisible(getItemsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.max(0, testimonialImages.length - itemsVisible);

  const scrollToIndex = (index: number): void => {
    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = container.scrollWidth / testimonialImages.length;
      container.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = (): void => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const handleNext = (): void => {
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  const handleScroll = (): void => {
    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = container.scrollWidth / testimonialImages.length;
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="bg-gray-50 py-6 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-secondary py-2 max-w-[200px] mx-auto  text-white my-4 font-bold rounded-full px-8 ">
            Results
          </div>
          <h2 className="text-3xl md:text-5xl mt-10 font-bold text-gray-900 mb-4">
            Real People, Real Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t take our word for it - see what our amazing customers have to say about their transformative experiences.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonialImages.map((image) => (
              <div
                key={image.id}
                className="flex-none w-1/2 sm:w-1/3 lg:w-1/4"
              >
                <div className="rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={300}
                    height={200}
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 sm:h-72 lg:h-80 object-contain !rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RealPeopleResults;
