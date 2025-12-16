import { Metadata } from "next";
import { HiMail, HiLocationMarker } from "react-icons/hi";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Contact Us - Textakit",
    description: "Get in touch with the Textakit team. We'd love to hear your feedback, suggestions, or questions.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="bg-gradient-to-b from-surface to-background py-16">
                <div className="container-custom">
                    <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
                        Contact Us
                    </h1>
                    <p className="text-xl text-text-secondary">
                        We'd love to hear from you. Send us your feedback or questions.
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-card p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <HiMail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-2">Email Us</h3>
                                    <p className="text-text-secondary mb-4">
                                        For general inquiries, feedback, or support requests.
                                    </p>
                                    <a href="mailto:contact@texttoolshub.com" className="text-primary hover:underline font-medium">
                                        contact@texttoolshub.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                    <HiLocationMarker className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-2">Location</h3>
                                    <p className="text-text-secondary">
                                        Digital Nomad HQ<br />
                                        Global Availability 🌍
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
