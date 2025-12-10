import { Metadata } from "next";
import MarkdownToHtmlUI from "./_components/MarkdownToHtmlUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Markdown to HTML Converter - Free Online Tool",
    description:
        "Convert Markdown to HTML instantly. Perfect for blogs, documentation, and static sites. Supports headings, lists, code blocks, tables, and more.",
    keywords: [
        "markdown to html",
        "md to html",
        "markdown converter",
        "html generator",
        "markdown parser",
    ],
    openGraph: {
        title: "Markdown to HTML Converter - Convert MD to HTML Free",
        description: "Convert Markdown syntax to clean HTML code instantly.",
        url: "/tools/markdown-to-html",
        type: "website",
    },
};

const MarkdownToHtmlPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Markdown to HTML", href: "/tools/markdown-to-html" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Markdown to HTML Converter" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Markdown to HTML Converter",
        description: "Free online markdown to HTML conversion tool",
        url: "/tools/markdown-to-html",
    });

    return (
        <>
            <StructuredData data={structuredData} />

            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <Breadcrumb items={breadcrumbItems} />

                    <div className="mt-6 grid gap-8 lg:grid-cols-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="mb-8">
                                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                                    Markdown to HTML Converter
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Convert Markdown syntax to clean, valid HTML code instantly.
                                    Supports all standard Markdown features including headings, lists,
                                    code blocks, tables, and more.
                                </p>
                                <ShareButtons
                                    url="/tools/markdown-to-html"
                                    title="Free Markdown to HTML Converter"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <MarkdownToHtmlUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="📋"
                                        title="Full Markdown Support"
                                        description="Convert headings, bold, italic, links, images, lists, code blocks, tables, and more."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Real-Time Preview"
                                        description="See live HTML output as you type your Markdown code."
                                    />
                                    <FeatureBox
                                        icon="✨"
                                        title="Clean HTML Output"
                                        description="Generate semantic, well-formatted HTML that's ready to use in your projects."
                                    />
                                    <FeatureBox
                                        icon="🎨"
                                        title="Syntax Highlighting"
                                        description="Markdown and HTML code are syntax-highlighted for better readability."
                                    />
                                    <FeatureBox
                                        icon="📱"
                                        title="GitHub Flavored Markdown"
                                        description="Supports GFM extensions like task lists, strikethrough, and tables."
                                    />
                                    <FeatureBox
                                        icon="🔒"
                                        title="Privacy Protected"
                                        description="All conversion happens in your browser. Your content stays private."
                                    />
                                </div>
                            </section>

                            {/* How to Use */}
                            <section id="how-to-use" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    How to Use
                                </h2>
                                <div className="space-y-4">
                                    <StepCard
                                        number={1}
                                        title="Enter Markdown"
                                        description="Type or paste your Markdown content into the left editor pane."
                                    />
                                    <StepCard
                                        number={2}
                                        title="View HTML Output"
                                        description="The HTML output appears automatically in the right pane as you type."
                                    />
                                    <StepCard
                                        number={3}
                                        title="Copy HTML Code"
                                        description="Click the copy button to copy the generated HTML to your clipboard."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Use in Your Project"
                                        description="Paste the HTML into your website, blog, or documentation."
                                    />
                                </div>
                            </section>

                            {/* Benefits */}
                            <section id="benefits" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Benefits
                                </h2>
                                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
                                    <BenefitItem
                                        title="Faster Content Creation"
                                        description="Write in simple Markdown syntax and get HTML instantly without manual coding."
                                    />
                                    <BenefitItem
                                        title="Perfect for Blogs"
                                        description="Convert blog posts written in Markdown to HTML for your website or CMS."
                                    />
                                    <BenefitItem
                                        title="Documentation Ready"
                                        description="Create documentation in Markdown and convert to HTML for static sites or wikis."
                                    />
                                    <BenefitItem
                                        title="Clean Code"
                                        description="Get semantic, valid HTML without unnecessary markup or inline styles."
                                    />
                                    <BenefitItem
                                        title="Learning Tool"
                                        description="See how Markdown translates to HTML, perfect for learning both languages."
                                    />
                                </div>
                            </section>

                            {/* FAQ */}
                            <section id="faq" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    <FAQItem
                                        question="What Markdown syntax is supported?"
                                        answer="We support standard Markdown plus GitHub Flavored Markdown (GFM) extensions including tables, task lists, strikethrough, and autolinks."
                                    />
                                    <FAQItem
                                        question="Can I convert HTML back to Markdown?"
                                        answer="This tool converts Markdown to HTML. For HTML to Markdown conversion, you'll need a different tool."
                                    />
                                    <FAQItem
                                        question="Is the HTML output valid?"
                                        answer="Yes, the converter generates valid, semantic HTML5 code that passes W3C validation."
                                    />
                                    <FAQItem
                                        question="Does it support code blocks?"
                                        answer="Yes! Both inline code with backticks and fenced code blocks with syntax highlighting are supported."
                                    />
                                    <FAQItem
                                        question="Can I use this for my blog?"
                                        answer="Absolutely! Many bloggers write in Markdown and use converters like this to generate HTML for their posts."
                                    />
                                    <FAQItem
                                        question="Is my Markdown content saved?"
                                        answer="No, all conversion happens in your browser. Your content is never uploaded or stored on our servers."
                                    />
                                </div>
                            </section>

                            {/* Related Tools */}
                            <section className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Related Tools
                                </h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <RelatedToolCard title="Text Formatter" href="/tools/text-formatter" />
                                    <RelatedToolCard title="Case Converter" href="/tools/case-converter" />
                                    <RelatedToolCard title="Word Counter" href="/tools/word-counter" />
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-4 space-y-6">
                                <TableOfContents items={tableOfContents} />
                                <SidebarAd slot="toolPageSidebar" />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

// Helper Components
const FeatureBox = ({
    icon,
    title,
    description,
}: {
    icon: string;
    title: string;
    description: string;
}) => (
    <div className="rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-lg">
        <div className="mb-2 text-3xl">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const StepCard = ({
    number,
    title,
    description,
}: {
    number: number;
    title: string;
    description: string;
}) => (
    <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            {number}
        </div>
        <div>
            <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const BenefitItem = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => (
    <div className="border-l-4 border-blue-600 pl-4">
        <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const FAQItem = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => (
    <details className="group rounded-lg border border-gray-200 bg-white p-4">
        <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 list-none">
            {question}
            <span className="transition group-open:rotate-180">▼</span>
        </summary>
        <p className="mt-3 text-gray-600">{answer}</p>
    </details>
);

const RelatedToolCard = ({ title, href }: { title: string; href: string }) => (
    <a
        href={href}
        className="block rounded-lg border border-gray-200 bg-white p-4 transition hover:border-blue-600 hover:shadow-md"
    >
        <h3 className="font-semibold text-gray-900">{title}</h3>
    </a>
);

export default MarkdownToHtmlPage;