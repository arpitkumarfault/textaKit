"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ToolCard from "../shared/ToolCard";
import { Tool } from "../../types/tools";
import { HiArrowRight } from "react-icons/hi";
import { Button } from "../ui";

interface FeaturedToolsProps {
    tools: Tool[];
}

export default function FeaturedTools({ tools }: FeaturedToolsProps) {
    return (
        <section className="py-20 bg-surface/50">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-12 text-center">
                    <motion.h2
                        className="mb-4 text-4xl font-bold text-text-primary md:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Featured <span className="gradient-text">Tools</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Start with our most popular text editing tools
                    </motion.p>
                </div>

                {/* Tools Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {tools.map((tool, index) => (
                        <ToolCard key={tool.slug} tool={tool} index={index} />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link href="/tools">
                        <Button variant="gradient" size="lg" className="group">
                            View All Tools
                            <HiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
