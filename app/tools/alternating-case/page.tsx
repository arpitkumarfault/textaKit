import { Metadata } from "next";
import AlternatingCaseUI from "./_components/AlternatingCaseUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Alternating Case Generator - Spongebob Text Maker",
    description:
        "Convert text to aLtErNaTiNg cAsE instantly. Create mock text, spongebob case, or meme text easily. Perfect for fun text effects and social media.",
    keywords: [
        "alternating case",
        "spongebob text",
        "mock text",
        "meme text generator",
        "alternating caps",
    ],
    openGraph: {
        title: "Alternating Case Generator - Create Mock Text Online",
        description: "Convert text to aLtErNaTiNg cAsE for memes and fun formatting.",
        url: "/tools/alternating-case",
        type: "website",
    },
};

const AlternatingCasePage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Alternating Case", href: "/tools/alternating-case" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Alternating Case Tool" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Alternating Case Generator",
        description: "Free online alternating case text converter",
        url: "/tools/alternating-case",
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
                                    aLtErNaTiNg cAsE Generator
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Convert text to alternating case (also known as spongebob case or
                                    mock text). Create fun, sarcastic text for memes, social media
                                    posts, and creative content.
                                </p>
                                <ShareButtons
                                    url="/tools/alternating-case"
                                    title="Free Alternating Case Generator"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <AlternatingCaseUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="🔤"
                                        title="Automatic Alternating"
                                        description="Automatically alternates between uppercase and lowercase for every letter."
                                    />
                                    <FeatureBox
                                        icon="😂"
                                        title="Meme Text Style"
                                        description="Perfect for creating sarcastic meme text in the popular spongebob mocking style."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Instant Conversion"
                                        description="See your text converted to alternating case in real-time as you type."
                                    />
                                    <FeatureBox
                                        icon="🎯"
                                        title="Smart Spacing"
                                        description="Preserves spaces, punctuation, and numbers while alternating letter cases."
                                    />
                                    <FeatureBox
                                        icon="🔄"
                                        title="Multiple Patterns"
                                        description="Choose different alternating patterns - start with uppercase or lowercase."
                                    />
                                    <FeatureBox
                                        icon="📋"
                                        title="Easy Copy"
                                        description="One-click copy to clipboard for quick use in social media or messages."
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
                                        description="Type or paste the text you want to convert into alternating case."
                                    />
                                    <StepCard
                                        number={2}
                                        title="Choose Pattern"
                                        description="Select whether to start with uppercase or lowercase for the alternating pattern."
                                    />
                                    <StepCard
                                        number={3}
                                        title="View Result"
                                        description="See your text automatically converted to aLtErNaTiNg cAsE format."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Copy and Share"
                                        description="Click copy and use your alternating case text in memes, tweets, or messages."
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
                                        title="Perfect for Memes"
                                        description="Create authentic spongebob mocking meme text for social media and messaging."
                                    />
                                    <BenefitItem
                                        title="Express Sarcasm"
                                        description="Add sarcastic tone to text messages and social media posts effectively."
                                    />
                                    <BenefitItem
                                        title="Stand Out"
                                        description="Make your text unique and eye-catching in comments and replies."
                                    />
                                    <BenefitItem
                                        title="Fun Communication"
                                        description="Add humor and personality to your online conversations."
                                    />
                                    <BenefitItem
                                        title="Social Media Ready"
                                        description="Instantly create text that's perfect for Twitter, Discord, Instagram, and more."
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
                                        question="What is alternating case?"
                                        answer="Alternating case is a text style where each letter alternates between uppercase and lowercase (e.g., 'aLtErNaTiNg'). It's also known as spongebob case or mock text, commonly used in memes to convey sarcasm."
                                    />
                                    <FAQItem
                                        question="Why is it called spongebob case?"
                                        answer="It's named after the 'Mocking Spongebob' meme where Spongebob repeats someone's words in a mocking tone. The alternating case text visually represents this mocking tone."
                                    />
                                    <FAQItem
                                        question="What happens to numbers and punctuation?"
                                        answer="Numbers, spaces, and punctuation marks remain unchanged. Only letters (A-Z, a-z) are alternated between uppercase and lowercase."
                                    />
                                    <FAQItem
                                        question="Can I choose which letter case to start with?"
                                        answer="Yes! You can choose to start the alternation with either uppercase or lowercase."
                                    />
                                    <FAQItem
                                        question="Does it work with non-English text?"
                                        answer="Yes, the tool works with any language that has uppercase and lowercase letters, including accented characters."
                                    />
                                    <FAQItem
                                        question="Where can I use alternating case text?"
                                        answer="Alternating case is perfect for social media (Twitter, Instagram, Discord), text messages, memes, and anywhere you want to add a sarcastic or humorous tone."
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
                                    <RelatedToolCard title="Toggle Case" href="/tools/toggle-case" />
                                    <RelatedToolCard title="Text Reverser" href="/tools/text-reverser" />
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

export default AlternatingCasePage;