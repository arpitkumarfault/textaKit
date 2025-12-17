// app/contact/page.tsx
import { Metadata } from "next";
import { HiMail, HiLocationMarker } from "react-icons/hi";

export const dynamic = "force-dynamic";

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
                        {/* Support Card */}
                        <div className="glass-card p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <HiMail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-2">24×7 Support</h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        I personally read and reply to <span className="font-medium text-primary">every single message</span> — usually within minutes,
                                        max 24 hours (even on weekends!).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="glass-card p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                    <HiLocationMarker className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary mb-2">Made with ❤️ from India</h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        Jabalpur, Madhya Pradesh<br />
                                        Proudly built by a solo developer serving users worldwide 🌍
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bonus Trust Card – people love this */}
                        <div className="glass-card p-6 border border-green-500/20 bg-green-500/5">
                            <div className="text-center">
                                <p className="text-2xl mb-2">100% Human Replies</p>
                                <p className="text-text-secondary text-sm">
                                    No bots. No auto-replies. Just me — a real person from Jabalpur who cares about your feedback ✨
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form + Success Message on SAME PAGE */}
                    <div className="glass-card p-8">
                        <h2 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h2>

                        <div id="formspree-container">
                            {/* Success message (shown when Formspree redirects back with #thank-you) */}
                            <div id="thank-you-message" className="hidden rounded-xl bg-green-500/10 border border-green-500/30 p-10 text-center">
                                <div className="text-6xl mb-4">✨</div>
                                <p className="text-2xl font-bold text-green-400">Thank You!</p>
                                <p className="mt-4 text-text-secondary text-lg">
                                    Your message has been sent successfully ❤️<br />
                                    I reply personally — usually within minutes!
                                </p>
                            </div>

                            {/* The actual form */}
                            <form
                                action="https://formspree.io/f/myzrqywd"
                                method="POST"
                                id="contact-form"
                                className="space-y-6"
                            >
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                        Name (optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                                        placeholder="your@gmail.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={6}
                                        required
                                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition"
                                        placeholder="Share your feedback, idea, bug report, or just say hi! I read every message ❤️"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-4 font-bold text-white text-lg shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl"
                                >
                                    Send Message – I'll Reply Fast! 🚀
                                </button>
                            </form>
                        </div>

                        <p className="mt-6 text-center text-xs text-text-secondary opacity-70">
                            ✅ Messages go straight to my personal Gmail · Zero spam · Fast replies
                        </p>
                    </div>
                </div>
            </div>

            {/* Tiny script — shows success message without page reload */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            const checkHash = () => {
              if (location.hash.includes("thank-you") || location.hash.includes("thankyou")) {
                document.getElementById("contact-form").classList.add("hidden");
                document.getElementById("thank-you-message").classList.remove("hidden");
                history.replaceState(null, null, location.pathname);
              }
            };
            checkHash();
            window.addEventListener("hashchange", checkHash);
          `,
                }}
            />
        </div>
    );
}