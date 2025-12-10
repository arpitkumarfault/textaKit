import { Metadata } from "next";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "About Us - TextToolsHub",
    description: "Learn more about TextToolsHub, our mission to provide free, high-quality text manipulation tools for everyone.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="bg-gradient-to-b from-surface to-background py-16">
                <div className="container-custom">
                    <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
                        About TextToolsHub
                    </h1>
                    <p className="text-xl text-text-secondary">
                        Empowering your text editing workflow with efficient, free tools.
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <div className="space-y-6 text-text-secondary">
                        <h2 className="text-3xl font-bold text-text-primary">Our Mission</h2>
                        <p>
                            At TextToolsHub, we believe that simple text tasks shouldn't require complex software or expensive subscriptions. Our mission is to provide a comprehensive suite of free, easy-to-use online text tools that help writers, developers, and students work smarter.
                        </p>
                        <p>
                            Whether you need to format code, count words, or convert case, our tools are designed to work instantly in your browser with no installation required.
                        </p>

                        <h2 className="text-3xl font-bold text-text-primary pt-6">Why Choose Us?</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="mr-3 text-primary text-xl">✓</span>
                                <span><strong>100% Free:</strong> No hidden fees, subscriptions, or paywalls.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-primary text-xl">✓</span>
                                <span><strong>Privacy Focused:</strong> All processing happens in your browser. Your text never leaves your device.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-primary text-xl">✓</span>
                                <span><strong>Fast & Reliable:</strong> Built with modern technology for instant results.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-card p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
                        <div className="text-6xl mb-6">🚀</div>
                        <h3 className="text-2xl font-bold text-text-primary mb-4">Start Creating Today</h3>
                        <p className="text-text-secondary mb-8">
                            Join thousands of users who rely on TextToolsHub for their daily text processing needs.
                        </p>
                        <Link
                            href="/tools"
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
                        >
                            Explore All Tools
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
