import { Metadata } from "next";
import SortLinesUI from "./_components/SortLinesUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Sort Lines Alphabetically - Text Line Sorter",
    description:
        "Sort lines of text alphabetically instantly. Ascending or descending order supported. Perfect for organizing lists, data cleanup, and text processing.",
    keywords: [
        "sort lines",
        "alphabetical sort",
        "line sorter",
        "text sort",
        "organize lines",
        "sort text alphabetically",
    ],
    openGraph: {
        title: "Sort Lines Alphabetically - Free Online Text Sorter",
        description: "Sort text lines in alphabetical order instantly and free.",
        url: "/tools/sort-lines",
        type: "website",
    },
};

const SortLinesPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Sort Lines", href: "/tools/sort-lines" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Sort Lines Tool" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Sort Lines",
        description: "Free online alphabetical line sorting tool",
        url: "/tools/sort-lines",
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
                                    Sort Lines Alphabetically
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Sort lines of text in alphabetical order instantly. Choose
                                    ascending (A-Z) or descending (Z-A) order. Perfect for organizing
                                    lists, cleaning data, and text processing tasks.
                                </p>
                                <ShareButtons
                                    url="/tools/sort-lines"
                                    title="Free Sort Lines Tool"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <SortLinesUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="🔤"
                                        title="Alphabetical Sorting"
                                        description="Sort lines in alphabetical order from A to Z or reverse Z to A."
                                    />
                                    <FeatureBox
                                        icon="🔢"
                                        title="Numerical Sorting"
                                        description="Option to sort lines numerically for number-based lists."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Instant Sorting"
                                        description="See results immediately as you paste or modify your text."
                                    />
                                    <FeatureBox
                                        icon="🎯"
                                        title="Case Sensitive Option"
                                        description="Choose case-sensitive or case-insensitive sorting based on your needs."
                                    />
                                    <FeatureBox
                                        icon="📊"
                                        title="Preserve or Remove Duplicates"
                                        description="Option to keep or remove duplicate lines while sorting."
                                    />
                                    <FeatureBox
                                        icon="🌐"
                                        title="Multi-Language Support"
                                        description="Works with any language and character set including special characters."
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
                                        title="Enter Your Text"
                                        description="Paste your text with each item on a separate line into the input area."
                                    />
                                    <StepCard
                                        number={2}
                                        title="Choose Sort Order"
                                        description="Select ascending (A-Z) or descending (Z-A) order for sorting."
                                    />
                                    <StepCard
                                        number={3}
                                        title="View Sorted Output"
                                        description="See your lines sorted alphabetically in the output area instantly."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Copy Results"
                                        description="Click the copy button to copy the sorted lines to your clipboard."
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
                                        title="Organize Lists Quickly"
                                        description="Sort contact lists, product names, or any text list in seconds."
                                    />
                                    <BenefitItem
                                        title="Data Cleanup"
                                        description="Clean and organize messy data exports or CSV content."
                                    />
                                    <BenefitItem
                                        title="Find Duplicates Easily"
                                        description="Sorted lists make it easier to spot and remove duplicate entries."
                                    />
                                    <BenefitItem
                                        title="Professional Presentation"
                                        description="Present organized, alphabetically sorted lists in documents and reports."
                                    />
                                    <BenefitItem
                                        title="Save Time"
                                        description="Avoid manual sorting - let the tool organize hundreds of lines instantly."
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
                                        question="How are numbers sorted?"
                                        answer="By default, the tool sorts alphabetically (so '10' comes before '2'). Use the numerical sorting option for proper number ordering (1, 2, 10, 20)."
                                    />
                                    <FAQItem
                                        question="What about case sensitivity?"
                                        answer="You can choose case-sensitive sorting (where 'Apple' and 'apple' are treated differently) or case-insensitive sorting (where they're treated the same)."
                                    />
                                    <FAQItem
                                        question="Can it sort special characters?"
                                        answer="Yes! The tool handles special characters, symbols, and accented letters according to standard Unicode sorting rules."
                                    />
                                    <FAQItem
                                        question="Does it remove blank lines?"
                                        answer="You can choose to keep or remove empty lines during the sorting process."
                                    />
                                    <FAQItem
                                        question="Is there a limit on how many lines I can sort?"
                                        answer="You can sort very large text files with thousands of lines. The tool handles large datasets efficiently."
                                    />
                                    <FAQItem
                                        question="Can I reverse the sort order?"
                                        answer="Yes! Choose descending order (Z-A) to reverse alphabetical sorting."
                                    />
                                </div>
                            </section>

                            {/* Related Tools */}
                            <section className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Related Tools
                                </h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <RelatedToolCard title="Duplicate Line Remover" href="/tools/duplicate-line-remover" />
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

export default SortLinesPage;