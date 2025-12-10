import { Metadata } from "next";
import { siteConfig } from "../../config/site";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for TextToolsHub",
};

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Terms of Service</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            By accessing and using {siteConfig.name}, you accept and agree to be
            bound by the terms and provision of this agreement. If you do not
            agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            2. Use of Services
          </h2>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            2.1 Permitted Use
          </h3>
          <p className="text-gray-700">
            You may use our text tools for lawful purposes only. You agree not to use the services:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>In any way that violates applicable laws or regulations</li>
            <li>To transmit harmful, offensive, or illegal content</li>
            <li>To attempt to gain unauthorized access to our systems</li>
            <li>To interfere with or disrupt the services</li>
            <li>For any automated or systematic data collection without permission</li>
          </ul>

          <h3 className="mb-2 mt-4 text-xl font-semibold text-gray-900">
            2.2 Service Availability
          </h3>
          <p className="text-gray-700">
            We strive to maintain service availability but do not guarantee
            uninterrupted access. We may suspend or discontinue services at any
            time for maintenance or other reasons.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700">
            All content, features, and functionality on {siteConfig.name} are
            owned by us and are protected by international copyright, trademark,
            and other intellectual property laws.
          </p>
          <p className="mt-4 text-gray-700">
            You retain all rights to the text content you process using our
            tools. We do not claim ownership of your content.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            4. Disclaimer of Warranties
          </h2>
          <p className="text-gray-700">
            Our services are provided "as is" and "as available" without any
            warranties of any kind, either express or implied. We do not warrant that:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>The services will meet your requirements</li>
            <li>The services will be error-free or uninterrupted</li>
            <li>Results obtained from the tools will be accurate or reliable</li>
            <li>Any errors in the services will be corrected</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            To the fullest extent permitted by law, {siteConfig.name} shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages resulting from your use of or inability to use the
            services.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            6. User Content
          </h2>
          <p className="text-gray-700">
            You are solely responsible for the content you process through our
            tools. You warrant that:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>You own or have the necessary rights to the content</li>
            <li>The content does not violate any third-party rights</li>
            <li>The content is not illegal, harmful, or offensive</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            7. Third-Party Services
          </h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites and services,
            including Google AdSense advertisements. We are not responsible for
            the content, privacy policies, or practices of third-party sites.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            8. Changes to Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. We will
            notify users of significant changes by posting a notice on our
            website. Continued use of the services after changes constitutes
            acceptance of the new terms.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            9. Termination
          </h2>
          <p className="text-gray-700">
            We may terminate or suspend your access to our services immediately,
            without prior notice, for any reason, including breach of these terms.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            10. Governing Law
          </h2>
          <p className="text-gray-700">
            These terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law provisions.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            11. Contact Information
          </h2>
          <p className="text-gray-700">
            If you have questions about these terms, please contact us at:
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
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;