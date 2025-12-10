"use client";

import { motion } from "framer-motion";
import {
    HiLightningBolt,
    HiShieldCheck,
    HiDeviceMobile,
    HiCurrencyDollar,
    HiCheckCircle
} from "react-icons/hi";
import { FaRocket } from "react-icons/fa";

const features = [
    {
        icon: HiLightningBolt,
        title: "Lightning Fast",
        description: "All tools run instantly in your browser. No server uploads or waiting times.",
        color: "from-yellow-500 to-amber-500",
    },
    {
        icon: HiShieldCheck,
        title: "100% Private",
        description: "Your text never leaves your browser. Complete privacy guaranteed.",
        color: "from-emerald-500 to-teal-500",
    },
    {
        icon: HiDeviceMobile,
        title: "Works Everywhere",
        description: "Fully responsive design. Use on desktop, tablet, or mobile devices.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: HiCurrencyDollar,
        title: "Always Free",
        description: "No hidden fees, no premium tiers. All features available to everyone.",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: HiCheckCircle,
        title: "Accurate Results",
        description: "Advanced algorithms ensure precise text analysis and formatting.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: FaRocket,
        title: "No Registration",
        description: "Start using tools immediately. No sign-up or account required.",
        color: "from-indigo-500 to-purple-500",
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-background">
            <div className="container-custom">
                {/* Header */}
                <div className="mb-16 text-center">
                    <motion.h2
                        className="mb-4 text-4xl font-bold text-text-primary md:text-5xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Why Choose Our{" "}
                        <span className="gradient-text">Text Tools?</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-text-secondary max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Built for writers, students, professionals, and content creators
                    </motion.p>
                </div>

                {/* Feature Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                className="glass-card group hover:shadow-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Icon */}
                                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                    <Icon className="h-7 w-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 text-xl font-bold text-text-primary">
                                    {feature.title}
                                </h3>
                                <p className="text-text-secondary">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
