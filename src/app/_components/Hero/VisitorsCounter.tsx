"use client";

import { useEffect, useState } from "react";
import {   useAnimation } from "framer-motion";
import * as motion from "framer-motion/m";
import { Badge } from "@/components/ui/badge";
import { Eye  } from 'lucide-react';

  const variants = {
    visible: { 
      x: 0, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
    hidden: { 
      x: 0, 
      y: 0, 
      bottom: "1rem",
      left: "1rem",
      transition: { duration: 0.5 } 
    }
  };

const VisitorsCounter = () => {
  const [viewers, setViewers] = useState(200);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (viewers === 0) {
      const value = Math.floor(Math.random() * 123) + 200;
      setViewers(value);
    }

    const interval = setInterval(() => {
      const newValue = Math.max(1, Math.floor(Math.random() * 6));
      setViewers(prev => (newValue >= 2) ? prev + newValue : prev - newValue);
    }, 5000);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Adjust this value as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start("hidden");
    } else {
      controls.start("visible");
    }
  }, [controls, isScrolled]);


  return (
    <motion.div
      initial="visible"
      animate={controls}
      variants={variants}
      className={ `z-50 ${isScrolled&&"fixed"}` }
    >
      <Badge
        className="bg-[#C4A48A]/10 hover:bg-[#C4A48A]/20 text-[#C4A48A] px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 flex items-center"
      >
          <Eye className="w-4 h-4 mr-2 transition-opacity duration-300" />
        <span className=" duration-300" >
          {viewers.toLocaleString()} {!isScrolled&&"people are viewing this page"}
        </span>
      </Badge>
    </motion.div>
  );
};

export default VisitorsCounter;

