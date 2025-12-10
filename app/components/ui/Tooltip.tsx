"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({ 
  children, 
  content, 
  position = "top" 
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-sm text-white shadow-lg",
            positionClasses[position]
          )}
        >
          {content}
          <div
            className={cn(
              "absolute h-2 w-2 rotate-45 bg-gray-900",
              position === "top" && "-bottom-1 left-1/2 -translate-x-1/2",
              position === "bottom" && "-top-1 left-1/2 -translate-x-1/2",
              position === "left" && "-right-1 top-1/2 -translate-y-1/2",
              position === "right" && "-left-1 top-1/2 -translate-y-1/2"
            )}
          />
        </div>
      )}
    </div>
  );
};