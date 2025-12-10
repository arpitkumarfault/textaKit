import { Metadata } from "next";
import AddLineNumbersUI from "./_components/AddLineNumbersUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Add Line Numbers - Number Lines Online",
    description:
        "Add line numbers to your text or code automatically. Great for documentation, code sharing, and reference. Customizable numbering format.",
    keywords: [
        "add line numbers",
        "number lines",
        "line numbering tool",
        "code line numbers",
        "text numbering",
    ],
    openGraph: {
        title: "Add Line Numbers - Free Online Line Numbering Tool",
        description: "Automatically add line numbers to text and code.",
        url: "/tools/add-line-numbers",
        type: "website",
    },
};

const AddLineNumbersPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Add Line Numbers", href: "/tools/add-line-numbers" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Add Line Numbers Tool" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Add Line Numbers",
        description: "Free online line numbering tool for text and code",
        url: "/tools/add-line-numbers",
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
                                    Add Line Numbers to Text
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Automatically add line numbers to your text, code, or documents.
                                    Perfect for sharing code snippets, creating documentation, or
                                    referencing specific lines.
                                </p>
                                <ShareButtons
                                    url="/tools/add-line-numbers"
                                    title="Free Add Line Numbers Tool"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <AddLineNumbersUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="🔢"
                                        title="Automatic Numbering"
                                        description="Instantly number every line in your text or code with sequential numbers."
                                    />
                                    <FeatureBox
                                        icon="⚙️"
                                        title="Customizable Format"
                                        description="Choose numbering style, padding, and separator characters to match your needs."
                                    />
                                    <FeatureBox
                                        icon="📝"
                                        title="Starting Number"
                                        description="Set custom starting number for line numbering (e.g., start from 0, 1, or any number)."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Real-Time Update"
                                        description="See line numbers update instantly as you type or modify text."
                                    />
                                    <FeatureBox
                                        icon="💻"
                                        title="Code-Friendly"
                                        description="Perfect for code snippets, logs, configuration files, and technical documentation."
                                    />
                                    <FeatureBox
                                        icon="📋"
                                        title="Easy Copy"
                                        description="Copy numbered text with one click to use in documentation or presentations."
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
                                        description="Copy and paste your text, code, or document into the input area."
                                    />
                                    <StepCard
                                        number={2}
                                        title="Customize Settings"
                                        description="Choose starting number, padding style, and separator format if needed."
                                    />
                                    <StepCard
                                        number={3}
                                        title="View Numbered Output"
                                        description="See your text with line numbers added automatically in the output area."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Copy Result"
                                        description="Click copy to get the numbered text ready for use in your project."
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
                                        title="Better Code Sharing"
                                        description="Share code snippets with line numbers for easier reference in discussions and reviews."
                                    />
                                    <BenefitItem
                                        title="Improved Documentation"
                                        description="Create technical documentation with numbered lines for clear explanations."
                                    />
                                    <BenefitItem
                                        title="Easy Referencing"
                                        description="Reference specific lines in bug reports, code reviews, or tutorials."
                                    />
                                    <BenefitItem
                                        title="Professional Presentation"
                                        description="Make code examples and text listings look more professional and organized."
                                    />
                                    <BenefitItem
                                        title="Save Time"
                                        description="Avoid manually numbering lines - let the tool do it automatically."
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
                                        question="What format are the line numbers?"
                                        answer="By default, line numbers are sequential starting from 1. You can customize the starting number, add padding (e.g., 001, 002), and choose separators like colon, pipe, or period."
                                    />
                                    <FAQItem
                                        question="Can I start numbering from a specific number?"
                                        answer="Yes! You can set any starting number you want. This is useful when you're showing a portion of a larger file."
                                    />
                                    <FAQItem
                                        question="Does it work with code?"
                                        answer="Absolutely! This tool is perfect for code snippets in any programming language. The line numbers make it easy to reference specific lines."
                                    />
                                    <FAQItem
                                        question="Can I remove line numbers from numbered text?"
                                        answer="This tool adds line numbers. To remove them, you can use a text editor's find and replace feature with regex to strip the numbering pattern."
                                    />
                                    <FAQItem
                                        question="Is there a limit on text length?"
                                        answer="You can number very large text files. The tool handles thousands of lines efficiently."
                                    />
                                    <FAQItem
                                        question="Will my text be modified?"
                                        answer="No, only line numbers are added at the beginning of each line. Your original text content remains unchanged."
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
                                    <RelatedToolCard title="Line Counter" href="/tools/line-counter" />
                                    <RelatedToolCard title="Sort Lines" href="/tools/sort-lines" />
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

export default AddLineNumbersPage;