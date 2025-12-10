import { Metadata } from "next";
import RemoveLineBreaksUI from "./_components/RemoveLineBreaksUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Remove Line Breaks - Convert to Single Line",
    description:
        "Remove line breaks from text instantly. Convert multi-line text into a single line easily. Perfect for data cleaning and text formatting.",
    keywords: [
        "remove line breaks",
        "single line text",
        "remove newlines",
        "text line breaks",
        "merge lines",
    ],
    openGraph: {
        title: "Remove Line Breaks - Free Text Line Break Remover",
        description: "Convert multi-line text to single line instantly.",
        url: "/tools/remove-line-breaks",
        type: "website",
    },
};

const RemoveLineBreaksPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Remove Line Breaks", href: "/tools/remove-line-breaks" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Remove Line Breaks Tool" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Remove Line Breaks",
        description: "Free online tool to remove line breaks from text",
        url: "/tools/remove-line-breaks",
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
                                    Remove Line Breaks from Text
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Convert multi-line text into a single line instantly by removing
                                    all line breaks and newlines. Perfect for cleaning copied text,
                                    formatting data, and text processing.
                                </p>
                                <ShareButtons
                                    url="/tools/remove-line-breaks"
                                    title="Free Remove Line Breaks Tool"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <RemoveLineBreaksUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="📄"
                                        title="Remove All Line Breaks"
                                        description="Instantly merge all lines into a single continuous line of text."
                                    />
                                    <FeatureBox
                                        icon="🔄"
                                        title="Smart Spacing"
                                        description="Option to add spaces between merged lines or join them directly."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Instant Processing"
                                        description="See results immediately as you paste or modify your text."
                                    />
                                    <FeatureBox
                                        icon="🎯"
                                        title="Preserve Paragraphs"
                                        description="Option to remove line breaks within paragraphs while keeping paragraph breaks."
                                    />
                                    <FeatureBox
                                        icon="✨"
                                        title="Clean Output"
                                        description="Option to remove extra spaces created during the merge process."
                                    />
                                    <FeatureBox
                                        icon="📋"
                                        title="Easy Copy"
                                        description="One-click copy to clipboard for quick use in other applications."
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
                                        title="Paste Multi-Line Text"
                                        description="Copy and paste your multi-line text into the input area."
                                    />
                                    <StepCard
                                        number={2}
                                        title="Choose Options"
                                        description="Select whether to add spaces between lines or preserve paragraph breaks."
                                    />
                                    <StepCard
                                        number={3}
                                        title="View Single Line"
                                        description="See your text converted to a single line instantly in the output area."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Copy Result"
                                        description="Click the copy button to use the single-line text in your project."
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
                                        title="Clean Copied Text"
                                        description="Remove unwanted line breaks from text copied from PDFs or websites."
                                    />
                                    <BenefitItem
                                        title="Data Formatting"
                                        description="Prepare text data for databases or spreadsheets that require single-line entries."
                                    />
                                    <BenefitItem
                                        title="Code Formatting"
                                        description="Convert multi-line strings or commands into single-line format for coding."
                                    />
                                    <BenefitItem
                                        title="URL Formatting"
                                        description="Clean up broken URLs that were split across multiple lines."
                                    />
                                    <BenefitItem
                                        title="Quick Processing"
                                        description="Process large amounts of text instantly without manual editing."
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
                                        question="Will spaces be added between merged lines?"
                                        answer="You can choose! Enable 'Add spaces' to insert a space where each line break was, or disable it to join lines directly without spaces."
                                    />
                                    <FAQItem
                                        question="Can I keep paragraph breaks?"
                                        answer="Yes! Use the 'preserve paragraphs' option to remove line breaks within paragraphs while maintaining separation between paragraphs."
                                    />
                                    <FAQItem
                                        question="What happens to extra spaces?"
                                        answer="You can enable 'clean extra spaces' to remove multiple consecutive spaces that might be created during the merge process."
                                    />
                                    <FAQItem
                                        question="Does it work with different line break types?"
                                        answer="Yes! The tool handles all standard line break types including Windows (CRLF), Unix/Mac (LF), and old Mac (CR) formats."
                                    />
                                    <FAQItem
                                        question="Can I process very long text?"
                                        answer="Yes, the tool efficiently handles large documents with thousands of lines."
                                    />
                                    <FAQItem
                                        question="Is this useful for PDF text?"
                                        answer="Absolutely! Text copied from PDFs often has unwanted line breaks. This tool quickly cleans them up."
                                    />
                                </div>
                            </section>

                            {/* Related Tools */}
                            <section className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Related Tools
                                </h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <RelatedToolCard title="Remove Extra Spaces" href="/tools/remove-extra-spaces" />
                                    <RelatedToolCard title="Text Formatter" href="/tools/text-formatter" />
                                    <RelatedToolCard title="Add Line Numbers" href="/tools/add-line-numbers" />
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

export default RemoveLineBreaksPage;