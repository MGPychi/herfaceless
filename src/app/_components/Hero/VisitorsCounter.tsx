"use client";

import { Badge } from "@/components/ui/badge";
import { Eye  } from 'lucide-react';
import { useEffect, useState } from "react";

const VisitorsCounter = () => {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    if (viewers === 0) {
      const value = Math.floor(Math.random() * 123) + 200;
      setViewers(value);
    }

    const interval = setInterval(() => {
      // Update viewers count
      const newValue = Math.max(1, Math.floor(Math.random() * 6));
      setViewers(prev => (newValue >= 2) ? prev + newValue : prev - newValue);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mb-6">
      <Badge
        className="bg-[#fff1e5] uppercase    ring-[#C4A48A] hover:bg-[#C4A48A] text-[#cf9765] px-4 py-2  font-bold rounded-full transition-colors duration-300"
      >
          <Eye className="w-4 h-4 mr-2 transition-opacity duration-300" />
        {viewers.toLocaleString()} people are viewing this page
      </Badge>
    </div>
  );
};

export default VisitorsCounter;

