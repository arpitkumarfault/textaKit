import { Metadata } from "next";
import TextReverserUI from "./_components/TextReverserUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Text Reverser - Reverse Text Online Free",
    description:
        "Reverse text instantly. Flip entire strings or reverse words individually with one click. Perfect for puzzles, creative writing, and fun text effects.",
    keywords: [
        "text reverser",
        "reverse text",
        "backwards text",
        "mirror text",
        "flip text",
        "reverse string",
    ],
    openGraph: {
        title: "Text Reverser - Flip and Reverse Text Online",
        description: "Reverse text or words instantly with our free online tool.",
        url: "/tools/text-reverser",
        type: "website",
    },
};

const TextReverserPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Text Reverser", href: "/tools/text-reverser" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Text Reverser Tool" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Text Reverser",
        description: "Free online text reversing tool",
        url: "/tools/text-reverser",
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
                                    Text Reverser Tool
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Reverse entire text strings or flip words individually. Create
                                    mirror text, solve puzzles, or add creative effects to your content
                                    with this simple yet powerful tool.
                                </p>
                                <ShareButtons
                                    url="/tools/text-reverser"
                                    title="Free Text Reverser Tool"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <TextReverserUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="🔄"
                                        title="Reverse Entire Text"
                                        description="Flip complete text strings from end to beginning, creating perfect mirror text."
                                    />
                                    <FeatureBox
                                        icon="📝"
                                        title="Reverse Words Only"
                                        description="Reverse individual words while keeping them in the same order."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Instant Results"
                                        description="See reversed text appear immediately as you type or paste content."
                                    />
                                    <FeatureBox
                                        icon="📋"
                                        title="Easy Copy"
                                        description="One-click copy to clipboard for quick use in other applications."
                                    />
                                    <FeatureBox
                                        icon="🎯"
                                        title="Character Preservation"
                                        description="Maintains all characters, spaces, and special symbols in reversed output."
                                    />
                                    <FeatureBox
                                        icon="🌐"
                                        title="Universal Support"
                                        description="Works with any language and character set, including emojis."
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
                                        description="Type or paste the text you want to reverse into the input area."
                                    />
                                    <StepCard
                                        number={2}
                                        title="Choose Reverse Mode"
                                        description="Select whether to reverse the entire text or just individual words."
                                    />
                                    <StepCard
                                        number={3}
                                        title="View Result"
                                        description="See the reversed text appear instantly in the output area."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Copy and Use"
                                        description="Click the copy button to copy reversed text to your clipboard."
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
                                        title="Puzzle Creation"
                                        description="Create text-based puzzles, games, and brain teasers for entertainment."
                                    />
                                    <BenefitItem
                                        title="Creative Writing"
                                        description="Add unique text effects to creative projects, social media posts, or designs."
                                    />
                                    <BenefitItem
                                        title="Cryptography Practice"
                                        description="Learn basic text manipulation and simple cipher techniques."
                                    />
                                    <BenefitItem
                                        title="Mirror Text Effects"
                                        description="Create mirror text for artistic purposes or special visual effects."
                                    />
                                    <BenefitItem
                                        title="Fun and Learning"
                                        description="Explore how text reversing works and have fun with language patterns."
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
                                        question="What's the difference between reversing text and reversing words?"
                                        answer="Reversing text flips the entire string backwards (e.g., 'Hello World' becomes 'dlroW olleH'). Reversing words only flips each word individually while keeping their order (e.g., 'Hello World' becomes 'olleH dlroW')."
                                    />
                                    <FAQItem
                                        question="Can I reverse text in different languages?"
                                        answer="Yes! The tool works with any language and character set including Latin, Cyrillic, Chinese, Arabic, and even emojis."
                                    />
                                    <FAQItem
                                        question="What happens to spaces and punctuation?"
                                        answer="All characters including spaces, punctuation, and special symbols are preserved and reversed along with the text."
                                    />
                                    <FAQItem
                                        question="Is there a character limit?"
                                        answer="You can reverse large amounts of text. There's no strict character limit for this tool."
                                    />
                                    <FAQItem
                                        question="Can I use this for encoding messages?"
                                        answer="While text reversing is a simple form of text manipulation, it's not secure encryption. It's best used for fun, puzzles, or creative purposes rather than security."
                                    />
                                    <FAQItem
                                        question="Is my text stored anywhere?"
                                        answer="No, all text reversing happens locally in your browser. Your text is never uploaded to our servers or stored."
                                    />
                                </div>
                            </section>

                            {/* Related Tools */}
                            <section className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Related Tools
                                </h2>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <RelatedToolCard title="Case Converter" href="/tools/case-converter" />
                                    <RelatedToolCard title="Alternating Case" href="/tools/alternating-case" />
                                    <RelatedToolCard title="Text Formatter" href="/tools/text-formatter" />
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

export default TextReverserPage;