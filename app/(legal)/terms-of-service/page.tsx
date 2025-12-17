import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Textakit | Free Online Text Tools",
  description: "Terms of Service for Textakit - free, no signup, no limits online text tools platform built by Arpit Kumar Kanwar.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Simple, fair, and human-readable terms for using our completely free text tools.
          </p>
          <p className="text-sm text-text-secondary mt-4">Effective: January 1, 2026</p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto space-y-12 text-text-secondary">
          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">1. Acceptance of Terms</h2>
            <p className="text-lg">
              By using Textakit ("the Service"), you agree to these Terms of Service. If you do not agree, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">2. Description of Service</h2>
            <p className="text-lg">
              Textakit is a free, ad-supported collection of online text manipulation tools including but not limited to word counters, grammar checkers, case converters, JSON formatters, and more. All tools are provided "as-is" with no warranty.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">3. No Account Required</h2>
            <p className="text-lg">
              You do not need to create an account or provide any personal information to use Textakit. We love it that way.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">4. Acceptable Use</h2>
            <p className="text-lg">You agree not to:</p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to overload, attack, or disrupt the Service (DDOS, scraping, etc.)</li>
              <li>Use automated tools to access the Service in a way that impacts other users</li>
              <li>Remove or alter any copyright or attribution notices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">5. Intellectual Property</h2>
            <p className="text-lg">
              The Service and its original content (excluding your input text) are owned by Arpit Kumar Kanwar and protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">6. Limitation of Liability</h2>
            <p className="text-lg">
              Textakit is provided "as-is" without any warranties. We are not responsible for any loss of data, inaccuracies in grammar suggestions, or any consequences from using our tools in academic, legal, or professional settings.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">7. Changes to Terms</h2>
            <p className="text-lg">
              We may update these terms occasionally. Continued use of the Service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">8. Governing Law</h2>
            <p className="text-lg">
              These terms are governed by the laws of India. Any disputes will be resolved in the courts of Jaipur, Rajasthan.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">Contact</h2>
            <p className="text-lg">
              Arpit Kumar Kanwar<br />
              Email: karpit757@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}