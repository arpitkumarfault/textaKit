import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Textakit | 100% Client-Side, No Data Collection",
  description: "Textakit respects your privacy. 99% of tools run entirely in your browser. We do not store, track, or sell your text. Full privacy policy for our free online text tools platform.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Your text never leaves your device. This is not a marketing claim — it's how Textakit was built from day one.
          </p>
          <p className="text-sm text-text-secondary mt-4">
            Last updated: July 15, 2026
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto space-y-12 text-text-secondary">
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">1. We Do Not Collect Your Text</h2>
            <p className="text-lg leading-relaxed">
              Unlike most online tools, <strong>99% of Textakit features operate entirely in your browser (client-side)</strong>. When you use our Word Counter, Grammar Checker, Case Converter, JSON Formatter, or any other tool — your text is processed using JavaScript directly on your device.
            </p>
            <p className="text-lg mt-4">
              This means: <strong>We never see, store, log, or transmit your pasted text to any server.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">2. What Minimal Data We Do Collect</h2>
            <ul className="list-disc pl-8 space-y-4 text-lg">
              <li><strong>Anonymous Usage Analytics</strong> via Plausible Analytics (privacy-first, cookie-less, GDPR-compliant)</li>
              <li><strong>Page views and tool usage counts</strong> (e.g., "Word Counter used 10,000 times today") — no IP addresses stored</li>
              <li><strong>Crash reports</strong> (only if you explicitly allow via browser prompt)</li>
            </ul>
            <p className="mt-6 text-lg">
              We do <strong>NOT</strong> use Google Analytics, Meta Pixel, or any tracking that profiles users.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">3. Advertisements (AdSense)</h2>
            <p className="text-lg leading-relaxed">
              Textakit is completely free because of non-intrusive Google AdSense ads. Google may use cookies to serve ads based on your prior visits to this and other websites.
            </p>
            <p className="text-lg mt-4">
              You can opt out of personalized advertising by visiting <Link href="https://adssettings.google.com" className="text-primary underline">Google Ads Settings</Link> or using browser extensions like uBlock Origin.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">4. Third-Party Services We Use</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="font-bold text-text-primary">Vercel</h4>
                <p className="text-sm">Hosting & Edge Network (no logs of user content)</p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="font-bold text-text-primary">Plausible Analytics</h4>
                <p className="text-sm">Lightweight, privacy-first analytics</p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="font-bold text-text-primary">Google AdSense</h4>
                <p className="text-sm">Non-intrusive advertisements</p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="font-bold text-text-primary">Cloudflare</h4>
                <p className="text-sm">CDN & DDoS protection</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">5. Children's Privacy (COPPA Compliant)</h2>
            <p className="text-lg">
              Textakit is safe and suitable for users of all ages, including children under 13. We do not collect any personal information from anyone.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">6. Contact Us</h2>
            <p className="text-lg">
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <p className="text-lg font-medium text-primary mt-4">
              Arpit Kumar Kanwar<br />
              Email: contact@texttoolshub.com
            </p>
          </section>
        </div>

        <div className="mt-20 text-center">
          <p className="text-text-secondary">
            Thank you for trusting Textakit with your writing, code, and ideas.
          </p>
        </div>
      </div>
    </div>
  );
}