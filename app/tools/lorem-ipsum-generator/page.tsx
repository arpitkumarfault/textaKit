import { Metadata } from "next";
import LoremIpsumUI from "./_components/LoremIpsumUI";
import { generateToolSchema } from "../../lib/seo";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";
import StructuredData from "../../components/seo/StructuredData";
import Breadcrumb from "../../components/shared/Breadcrumb";
import SidebarAd from "../../components/ads/SidebarAd";
import AdBanner from "../../components/ads/AdBanner";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Lorem Ipsum Generator - Free Placeholder Text",
    description:
        "Generate lorem ipsum placeholder text instantly. Customizable paragraphs, words, and lists. Perfect for designs, mockups, and templates.",
    keywords: [
        "lorem ipsum",
        "placeholder text",
        "dummy text",
        "filler text",
        "lipsum generator",
        "text generator",
    ],
    openGraph: {
        title: "Lorem Ipsum Generator - Free Dummy Text Tool",
        description: "Generate customizable lorem ipsum placeholder text for your designs.",
        url: "/tools/lorem-ipsum-generator",
        type: "website",
    },
};

const LoremIpsumGeneratorPage = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Lorem Ipsum Generator", href: "/tools/lorem-ipsum-generator" },
    ];

    const tableOfContents = [
        { id: "tool", title: "Lorem Ipsum Generator" },
        { id: "features", title: "Features" },
        { id: "how-to-use", title: "How to Use" },
        { id: "benefits", title: "Benefits" },
        { id: "faq", title: "FAQ" },
    ];

    const structuredData = generateToolSchema({
        name: "Lorem Ipsum Generator",
        description: "Free lorem ipsum placeholder text generator",
        url: "/tools/lorem-ipsum-generator",
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
                                    Lorem Ipsum Generator
                                </h1>
                                <p className="text-xl text-gray-600">
                                    Generate customizable lorem ipsum placeholder text for your web
                                    designs, mockups, templates, and prototypes. Choose paragraphs,
                                    sentences, or words.
                                </p>
                                <ShareButtons
                                    url="/tools/lorem-ipsum-generator"
                                    title="Free Lorem Ipsum Generator"
                                />
                            </div>

                            <AdBanner slot="toolPageTop" format="horizontal" />

                            <div id="tool" className="my-8">
                                <LoremIpsumUI />
                            </div>

                            {/* Features */}
                            <section id="features" className="my-12">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                    Key Features
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FeatureBox
                                        icon="📝"
                                        title="Customizable Output"
                                        description="Generate exact number of paragraphs, sentences, or words you need for your project."
                                    />
                                    <FeatureBox
                                        icon="⚡"
                                        title="Instant Generation"
                                        description="Get placeholder text immediately with a single click. No waiting or loading."
                                    />
                                    <FeatureBox
                                        icon="📋"
                                        title="Easy Copy"
                                        description="Copy generated text to clipboard with one click for quick use in your designs."
                                    />
                                    <FeatureBox
                                        icon="🎯"
                                        title="Multiple Formats"
                                        description="Generate as paragraphs, sentences, words, or even lists for various use cases."
                                    />
                                    <FeatureBox
                                        icon="🔄"
                                        title="Regenerate Anytime"
                                        description="Generate new variations instantly whenever you need fresh placeholder text."
                                    />
                                    <FeatureBox
                                        icon="💯"
                                        title="Classic Lorem Ipsum"
                                        description="Uses the traditional lorem ipsum text that designers have trusted for decades."
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
                                        title="Select Format"
                                        description="Choose whether you want paragraphs, sentences, words, or lists."
                                    />
                                    <StepCard
                                        number={2}
                                        title="Set Quantity"
                                        description="Enter the number of paragraphs, sentences, or words you need."
                                    />
                                    <StepCard
                                        number={3}
                                        title="Generate Text"
                                        description="Click the generate button to create your lorem ipsum placeholder text."
                                    />
                                    <StepCard
                                        number={4}
                                        title="Copy and Use"
                                        description="Copy the generated text and paste it into your design, mockup, or template."
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
                                        title="Professional Mockups"
                                        description="Create realistic design previews with proper text length and formatting."
                                    />
                                    <BenefitItem
                                        title="Save Time"
                                        description="Generate placeholder text instantly instead of writing or copying manually."
                                    />
                                    <BenefitItem
                                        title="Focus on Design"
                                        description="Use neutral filler text so clients focus on design elements, not content."
                                    />
                                    <BenefitItem
                                        title="Test Layouts"
                                        description="Evaluate how different text lengths affect your layout and spacing."
                                    />
                                    <BenefitItem
                                        title="Industry Standard"
                                        description="Use the same placeholder text that professionals worldwide recognize."
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
                                        question="What is Lorem Ipsum?"
                                        answer="Lorem Ipsum is dummy text used in printing and typesetting since the 1500s. It's used as placeholder text to fill space in designs and show how content will look without using actual content."
                                    />
                                    <FAQItem
                                        question="Why use Lorem Ipsum instead of real text?"
                                        answer="Lorem Ipsum is neutral and doesn't distract from the design. It helps clients and stakeholders focus on visual elements like layout, typography, and spacing rather than reading the content."
                                    />
                                    <FAQItem
                                        question="Is the generated text random?"
                                        answer="The text is based on classical Latin literature with some modifications. While it appears random, it follows a pattern that mimics real language structure."
                                    />
                                    <FAQItem
                                        question="Can I use this for commercial projects?"
                                        answer="Yes! Lorem Ipsum is in the public domain and can be used freely in any project, commercial or personal, without attribution."
                                    />
                                    <FAQItem
                                        question="How many paragraphs can I generate?"
                                        answer="You can generate as many paragraphs as you need. Our tool has no limits on the amount of lorem ipsum text you can create."
                                    />
                                    <FAQItem
                                        question="Does it start with 'Lorem ipsum dolor sit amet'?"
                                        answer="Yes, the classic lorem ipsum text begins with these words. You can choose to start with the traditional opening or generate variations."
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
                                    <RelatedToolCard title="Word Counter" href="/tools/word-counter" />
                                    <RelatedToolCard title="Character Counter" href="/tools/character-counter" />
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

export default LoremIpsumGeneratorPage;