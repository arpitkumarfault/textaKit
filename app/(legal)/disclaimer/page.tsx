import { Metadata } from "next";
import { siteConfig } from "../../config/site";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for TextToolsHub",
};

const DisclaimerPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Disclaimer</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            1. General Information
          </h2>
          <p className="text-gray-700">
            The information provided by {siteConfig.name} is for general
            informational and educational purposes only. All information on the
            site is provided in good faith; however, we make no representation or
            warranty of any kind, express or implied, regarding the accuracy,
            adequacy, validity, reliability, availability, or completeness of any
            information on the site.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            2. Tool Accuracy
          </h2>
          <p className="text-gray-700">
            While we strive to provide accurate text analysis and editing tools,
            we do not guarantee:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>100% accuracy in grammar or spell checking</li>
            <li>Complete detection of all errors or issues</li>
            <li>Suitability for all types of professional or academic work</li>
            <li>Perfect results for all languages or contexts</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Users should always review and verify tool outputs before using them
            in important documents or submissions.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            3. Professional Advice Disclaimer
          </h2>
          <p className="text-gray-700">
            The tools and content on {siteConfig.name} do not constitute
            professional advice. For important documents, academic papers, or
            professional communications, we recommend consulting with
            professional editors, proofreaders, or relevant experts.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            4. User Responsibility
          </h2>
          <p className="text-gray-700">
            Users are solely responsible for:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Verifying the accuracy of tool outputs</li>
            <li>Ensuring content meets their specific requirements</li>
            <li>Complying with academic integrity policies</li>
            <li>Maintaining backup copies of important content</li>
            <li>Using tools appropriately for their intended purpose</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            5. External Links Disclaimer
          </h2>
          <p className="text-gray-700">
            Our website may contain links to external websites that are not
            provided or maintained by us. We do not guarantee the accuracy,
            relevance, timeliness, or completeness of any information on these
            external websites.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            6. Advertising Disclaimer
          </h2>
          <p className="text-gray-700">
            This website displays advertisements through Google AdSense and other
            advertising partners. We have no control over and assume no
            responsibility for the content, privacy policies, or practices of
            advertisers or any third-party websites or services.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            7. No Warranties
          </h2>
          <p className="text-gray-700">
            {siteConfig.name} is provided "as is" and "as available" without any
            warranties of any kind, whether express or implied. We do not warrant
            that:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>The website will operate error-free or uninterrupted</li>
            <li>Defects will be corrected</li>
            <li>The website is free of viruses or harmful components</li>
            <li>Results from using the website will meet your expectations</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            Under no circumstance shall {siteConfig.name} or its owners be liable
            for any direct, indirect, incidental, consequential, or special
            damages arising out of or in connection with your use of the website
            or tools, even if advised of the possibility of such damages.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            9. Changes to Disclaimer
          </h2>
          <p className="text-gray-700">
            We reserve the right to modify this disclaimer at any time. Changes
            will be effective immediately upon posting to the website. Your
            continued use of the website following any changes indicates
            acceptance of those changes.
          </p>
        </section>

        <section className="my-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            10. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have questions about this disclaimer, please contact us:
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

export default DisclaimerPage;