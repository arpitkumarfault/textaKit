import { Metadata } from "next";
import DuplicateLineRemoverUI from "./_components/DuplicateLineRemoverUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Remove Duplicate Lines - Free Online Tool",
    description:
        "Remove duplicate lines from text instantly. Keep first occurrence and maintain order. Perfect for data cleanup, text processing, and list management.",
    keywords: [
        "remove duplicate lines",
        "deduplicate text",
        "unique lines",
        "remove duplicates",
        "text deduplication",
    ],
    openGraph: {
        title: "Duplicate Line Remover - Remove Duplicate Text Lines",
        description: "Remove duplicate lines from text while preserving order.",
        url: "/tools/duplicate-line-remover",
        type: "website",
    },
};

const DuplicateLineRemoverPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Duplicate Line Remover", href: "/tools/duplicate-line-remover" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Duplicate Line Remover" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Duplicate Line Remover",
        description: "Free online tool to remove duplicate lines from text",
        url: "/tools/duplicate-line-remover",
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
                                    Remove Duplicate Lines
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Remove duplicate lines from your text instantly while preserving
                                    the original order. Perfect for cleaning data, managing lists, and
                                    text processing tasks.
                                </p>
                                <ShareButtons
                                    url="/tools/duplicate-line-remover"
                                    title="Free Duplicate Line Remover"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <DuplicateLineRemoverUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="🔍"
                                        title="Smart Detection"
                                        description="Automatically identifies and removes exact duplicate lines from your text."
                                    />
                                    <FeatureBox
                                        icon="📋"
                                        title="Preserve Order"
                                        description="Maintains the original order of lines, keeping the first occurrence of each unique line."
                                    />
                                    <FeatureBox
                                        icon="⚙️"
                                        title="Case Sensitivity"
                                        description="Choose case-sensitive or case-insensitive duplicate detection."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Instant Results"
                                        description="See duplicate lines removed in real-time as you paste or edit text."
                                    />
                                    <FeatureBox
                                        icon="📊"
                                        title="Statistics"
                                        description="View count of duplicates found and removed for better insight."
                                    />
                                    <FeatureBox
                                        icon="🎯"
                                        title="Trim Whitespace"
                                        description="Option to ignore leading/trailing spaces when comparing lines."
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
                                        title="Paste Your Text"
                                        description="Copy and paste your text with each item on a separate line into the input area."
                                    />
                                    <StepCard
                                        number={2}
                                        title="Configure Options"
                                        description="Choose case sensitivity and whitespace trimming options if needed."
                                    />
                                    <StepCard
                                        number={3}
                                        title="View Results"
                                        description="See the deduplicated text with all duplicate lines removed instantly."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Copy Unique Lines"
                                        description="Click copy to get the clean text with only unique lines."
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
                                        title="Clean Data Quickly"
                                        description="Remove duplicates from data exports, CSV files, or text lists in seconds."
                                    />
                                    <BenefitItem
                                        title="Save Storage Space"
                                        description="Reduce file size by eliminating redundant duplicate entries."
                                    />
                                    <BenefitItem
                                        title="Improve Data Quality"
                                        description="Ensure data accuracy by keeping only unique entries in your lists."
                                    />
                                    <BenefitItem
                                        title="Better Organization"
                                        description="Maintain clean, organized lists without manual checking for duplicates."
                                    />
                                    <BenefitItem
                                        title="Time Efficient"
                                        description="Process thousands of lines instantly instead of manual deduplication."
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
                                        question="Which occurrence of a duplicate line is kept?"
                                        answer="The tool keeps the first occurrence of each unique line and removes all subsequent duplicates. This preserves the original order of your text."
                                    />
                                    <FAQItem
                                        question="Is the comparison case-sensitive?"
                                        answer="You can choose! Enable case-sensitive mode to treat 'Hello' and 'hello' as different lines, or disable it to treat them as duplicates."
                                    />
                                    <FAQItem
                                        question="What about lines with extra spaces?"
                                        answer="Use the 'trim whitespace' option to ignore leading and trailing spaces when comparing lines. This helps catch duplicates that differ only in spacing."
                                    />
                                    <FAQItem
                                        question="Can it handle very large files?"
                                        answer="Yes! The tool efficiently processes large text files with thousands of lines."
                                    />
                                    <FAQItem
                                        question="Does it work with empty lines?"
                                        answer="Yes, empty lines are treated as unique entries. If you have multiple empty lines, only the first one will be kept."
                                    />
                                    <FAQItem
                                        question="Is my data stored or shared?"
                                        answer="No, all processing happens locally in your browser. Your text is never uploaded to our servers or stored."
                                    />
                                </div>
                            </section>

                            {/* Related Tools */}
                            <section className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Related Tools
                                </h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <RelatedToolCard title="Sort Lines" href="/tools/sort-lines" />
                                    <RelatedToolCard title="Text Formatter" href="/tools/text-formatter" />
                                    <RelatedToolCard title="Line Counter" href="/tools/line-counter" />
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

export default DuplicateLineRemoverPage;