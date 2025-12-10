import { Metadata } from "next";
import FindAndReplaceUI from "./_components/FindAndReplaceUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Find and Replace Text - Online Bulk Replace Tool",
    description:
        "Find and replace text across large documents instantly. Supports case-sensitive and whole word matching. Perfect for bulk text editing and document processing.",
    keywords: [
        "find and replace",
        "search replace",
        "bulk replace",
        "text replacer",
        "find replace online",
    ],
    openGraph: {
        title: "Find and Replace - Free Online Text Replacement Tool",
        description: "Search and replace text in bulk with our free online tool.",
        url: "/tools/find-and-replace",
        type: "website",
    },
};

const FindAndReplacePage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Find and Replace", href: "/tools/find-and-replace" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Find and Replace Tool" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Find and Replace",
        description: "Free online find and replace tool for text",
        url: "/tools/find-and-replace",
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
                                    Find and Replace Text
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Search and replace text across large documents instantly. Powerful
                                    find and replace tool with case-sensitive, whole word, and regex
                                    support for bulk text editing.
                                </p>
                                <ShareButtons
                                    url="/tools/find-and-replace"
                                    title="Free Find and Replace Tool"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <FindAndReplaceUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="🔍"
                                        title="Smart Search"
                                        description="Find all occurrences of text instantly with highlighted matches for easy viewing."
                                    />
                                    <FeatureBox
                                        icon="🔄"
                                        title="Bulk Replace"
                                        description="Replace all occurrences at once or review and replace individually."
                                    />
                                    <FeatureBox
                                        icon="Aa"
                                        title="Case Sensitive"
                                        description="Toggle case-sensitive matching to find exact or flexible matches."
                                    />
                                    <FeatureBox
                                        icon="📝"
                                        title="Whole Word Match"
                                        description="Find complete words only, avoiding partial matches within larger words."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Real-Time Preview"
                                        description="See matches highlighted in real-time before performing replacements."
                                    />
                                    <FeatureBox
                                        icon="🔢"
                                        title="Match Counter"
                                        description="View total number of matches found for better text analysis."
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
                                        description="Paste or type the document or text you want to search through."
                                    />
                                    <StepCard
                                        number={2}
                                        title="Enter Find Text"
                                        description="Type the text, word, or phrase you want to find in the 'Find' field."
                                    />
                                    <StepCard
                                        number={3}
                                        title="Enter Replace Text"
                                        description="Type what you want to replace it with in the 'Replace' field."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Replace All or Selectively"
                                        description="Click 'Replace All' for bulk replacement or review each match individually."
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
                                        title="Save Time"
                                        description="Replace hundreds or thousands of occurrences instantly instead of manual editing."
                                    />
                                    <BenefitItem
                                        title="Accurate Editing"
                                        description="Find every occurrence without missing any, ensuring consistent changes throughout."
                                    />
                                    <BenefitItem
                                        title="Bulk Text Processing"
                                        description="Perfect for updating product names, URLs, or terminology across large documents."
                                    />
                                    <BenefitItem
                                        title="Error Correction"
                                        description="Fix repeated spelling mistakes or typos throughout entire documents quickly."
                                    />
                                    <BenefitItem
                                        title="Content Updates"
                                        description="Update outdated information or branding across multiple text sections at once."
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
                                        question="What's the difference between 'Replace' and 'Replace All'?"
                                        answer="'Replace' replaces only the current highlighted match, letting you review each one. 'Replace All' automatically replaces every match in the entire text at once."
                                    />
                                    <FAQItem
                                        question="How does case-sensitive search work?"
                                        answer="When enabled, the search distinguishes between uppercase and lowercase. For example, with case-sensitive on, 'Hello' won't match 'hello'. When off, both are treated as the same."
                                    />
                                    <FAQItem
                                        question="What is 'whole word' matching?"
                                        answer="Whole word matching finds complete words only. For example, searching for 'cat' with whole word enabled won't match 'category' or 'scatter'."
                                    />
                                    <FAQItem
                                        question="Can I undo a replace all action?"
                                        answer="Yes! Most browsers support Ctrl+Z (or Cmd+Z on Mac) to undo changes. We also keep a backup that you can restore."
                                    />
                                    <FAQItem
                                        question="Does it support regular expressions (regex)?"
                                        answer="Advanced regex support can be enabled in settings for complex pattern matching and replacement."
                                    />
                                    <FAQItem
                                        question="Is there a limit on text length?"
                                        answer="You can find and replace in very large documents. The tool handles extensive text efficiently."
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

export default FindAndReplacePage;