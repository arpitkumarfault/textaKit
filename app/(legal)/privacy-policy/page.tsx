import { Metadata } from "next";
import { siteConfig } from "../../config/site";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for TextToolsHub - Learn how we protect your data",
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            1. Introduction
          </h2>
          <p className="text-gray-700">
            Welcome to {siteConfig.name}. We respect your privacy and are
            committed to protecting your personal data. This privacy policy
            explains how we collect, use, and safeguard your information when
            you visit our website.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            2. Information We Collect
          </h2>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            2.1 Information You Provide
          </h3>
          <p className="text-gray-700">
            We collect information that you voluntarily provide to us:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Contact form submissions (name, email, message)</li>
            <li>Newsletter subscriptions (email address)</li>
            <li>Comments on blog posts (name, email, comment content)</li>
          </ul>

          <h3 className="mb-2 mt-4 text-xl font-semibold text-gray-900">
            2.2 Automatically Collected Information
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referral source</li>
          </ul>

          <h3 className="mb-2 mt-4 text-xl font-semibold text-gray-900">
            2.3 Text Processing
          </h3>
          <p className="text-gray-700">
            <strong>Important:</strong> All text you enter into our tools is
            processed locally in your browser. We do NOT store, transmit, or
            have access to any text you process using our tools. Your content
            remains private and never leaves your device.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            3. Cookies and Tracking
          </h2>
          <p className="text-gray-700">We use cookies for:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              <strong>Essential Cookies:</strong> Required for website
              functionality
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Google Analytics to understand
              user behavior
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Google AdSense for
              displaying relevant ads
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            You can control cookies through your browser settings.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            4. Third-Party Services
          </h2>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            4.1 Google AdSense
          </h3>
          <p className="text-gray-700">
            We use Google AdSense to display advertisements. Google may use
            cookies to show ads based on your visits to this and other websites.
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>

          <h3 className="mb-2 mt-4 text-xl font-semibold text-gray-900">
            4.2 Google Analytics
          </h3>
          <p className="text-gray-700">
            We use Google Analytics to analyze website traffic. Google Analytics
            uses cookies to collect anonymous information about user behavior.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            5. How We Use Your Information
          </h2>
          <p className="text-gray-700">We use collected information to:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Send newsletters (with your consent)</li>
            <li>Improve our website and user experience</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            6. Data Security
          </h2>
          <p className="text-gray-700">
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            7. Your Rights
          </h2>
          <p className="text-gray-700">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Withdraw consent</li>
            <li>Data portability</li>
          </ul>
          <p className="mt-4 text-gray-700">
            To exercise these rights, contact us at{" "}
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="text-blue-600 hover:underline"
            >
              {siteConfig.author.email}
            </a>
            .
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            8. Children's Privacy
          </h2>
          <p className="text-gray-700">
            Our services are not directed to children under 13. We do not
            knowingly collect information from children under 13. If you believe
            we have collected such information, please contact us immediately.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this privacy policy from time to time. We will notify
            you of significant changes by posting a notice on our website. Your
            continued use of the website after changes constitutes acceptance.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            10. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have questions about this privacy policy, contact us:
          </p>
          <ul className="mt-4 text-gray-700">
            <li>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="text-blue-600 hover:underline"
              >
                {siteConfig.author.email}
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="/contact"
                className="text-blue-600 hover:underline"
              >
                Contact Form
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;