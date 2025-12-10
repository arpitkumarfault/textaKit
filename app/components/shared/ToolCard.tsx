"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Tool } from "../../types/tools";
import { HiArrowRight, HiStar } from "react-icons/hi";
import { Badge } from "../ui";

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

const ToolCard = ({ tool, index = 0 }: ToolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="h-full"
    >
      <Link
        href={`/tools/${tool.slug}`}
        className="group block h-full"
      >
        <div className="glass-card h-full overflow-hidden relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-6">
          {/* Icon with gradient background */}
          <div className="relative mb-4 flex-shrink-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-2xl shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
              {tool.icon || "🔧"}
            </div>
            {tool.featured && (
              <div className="absolute -top-2 -right-2 transform translate-x-2 -translate-y-2">
                <Badge variant="warning" className="shadow-md">
                  <HiStar className="mr-1 h-3 w-3" />
                  Popular
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <h3 className="mb-2 text-xl font-bold text-text-primary group-hover:gradient-text transition-all line-clamp-1">
            {tool.title}
          </h3>

          <p className="mb-4 text-sm text-text-secondary line-clamp-3 min-h-[4.5rem] flex-grow">
            {tool.description}
          </p>

          {/* Category Badge */}
          {tool.category && (
            <div className="mb-4">
              <Badge variant="primary">
                {tool.category}
              </Badge>
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all mt-auto">
            <span>Use Tool</span>
            <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>

          {/* Hover Gradient Border Effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-10 transition-opacity -z-10 blur-xl pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ToolCard;