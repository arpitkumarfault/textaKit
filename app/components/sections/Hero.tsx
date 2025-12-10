"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";
import { HiLightningBolt } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { Button } from "../ui";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-surface to-background py-20 md:py-28">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
                <div className="absolute -right-4 top-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container-custom relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Badge */}
                    <motion.div
                        className="mb-6 inline-flex"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm px-4 py-2 text-sm font-medium shadow-lg">
                            <HiSparkles className="h-4 w-4 text-accent" />
                            <span className="gradient-text">100% Free Forever</span>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="mb-6 text-5xl font-bold tracking-tight text-text-primary md:text-7xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Professional{" "}
                        <span className="gradient-text">Text Tools</span>
                        <br />
                        For Everyone
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="mb-10 text-lg text-text-secondary md:text-xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Enhance your writing with our suite of powerful text editing tools.
                        <br className="hidden md:block" />
                        No registration required. Works instantly in your browser.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href="/tools">
                            <Button variant="gradient" size="lg" className="group">
                                <FaRocket className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                Explore All Tools
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button variant="outline" size="lg">
                                <HiLightningBolt className="mr-2 h-5 w-5" />
                                Read Writing Tips
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="mt-16 grid grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div>
                            <div className="text-4xl font-bold gradient-text">30+</div>
                            <div className="text-sm text-text-tertiary">Text Tools</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold gradient-text">100%</div>
                            <div className="text-sm text-text-tertiary">Free & Private</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold gradient-text">0s</div>
                            <div className="text-sm text-text-tertiary">Setup Time</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                >
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        className="fill-background"
                    />
                </svg>
            </div>
        </section>
    );
}
