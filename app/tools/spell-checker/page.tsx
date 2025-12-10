import SpellCheckerTool from "./_components/SpellCheckerTool";
import Breadcrumb from "../../components/shared/Breadcrumb";
import AdBanner from "../../components/ads/AdBanner";
import SidebarAd from "../../components/ads/SidebarAd";
import TableOfContents from "../../components/shared/TableOfContents";
import ShareButtons from "../../components/shared/ShareButtons";

// Export metadata from the separate file
export { metadata } from "./metadata";

const SpellCheckerPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Spell Checker", href: "/tools/spell-checker" },
  ];

  const tocItems = [
    { id: "tool", title: "Spell Checker Tool" },
    { id: "features", title: "Features" },
    { id: "how-to-use", title: "How to Use" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Main Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main Content */}
            <main className="lg:col-span-8">
              {/* Header */}
              <header className="mb-8">
                <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                  Free Online Spell Checker
                </h1>
                <p className="mb-6 text-xl text-gray-600">
                  Instantly find and fix spelling mistakes with intelligent suggestions.
                  Perfect for essays, emails, blogs, and professional writing.
                </p>
                <ShareButtons
                  url="/tools/spell-checker"
                  title="Free Online Spell Checker - Fix Mistakes Instantly"
                />
              </header>

              {/* Ad Banner */}
              <div className="mb-10">
                <AdBanner slot="toolPageTop" format="horizontal" />
              </div>

              {/* Spell Checker Tool */}
              <section id="tool" className="mb-12">
                <SpellCheckerTool />
              </section>

              {/* Features */}
              <section id="features" className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Key Features
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <div className="mb-3 text-3xl">⚡ Instant Checking</div>
                    <p className="text-gray-600">
                      Real-time spell checking as you type — no waiting.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <div className="mb-3 text-3xl">🎯 Smart Suggestions</div>
                    <p className="text-gray-600">
                      Context-aware corrections with multiple options.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <div className="mb-3 text-3xl">💯 100% Free</div>
                    <p className="text-gray-600">
                      No limits, no sign-up, no hidden fees.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6">
                    <div className="mb-3 text-3xl">🔒 Private & Secure</div>
                    <p className="text-gray-600">
                      Your text never leaves your browser.
                    </p>
                  </div>
                </div>
              </section>

              {/* How to Use */}
              <section id="how-to-use" className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  How to Use
                </h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      1
                    </span>
                    <div>
                      <strong>Paste or type your text</strong> in the editor above
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      2
                    </span>
                    <div>
                      <strong>Misspelled words are highlighted</strong> in red instantly
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      3
                    </span>
                    <div>
                      <strong>Click on any word</strong> to see correction suggestions
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      4
                    </span>
                    <div>
                      <strong>Choose the correct spelling</strong> or ignore if it's correct
                    </div>
                  </li>
                </ol>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="rounded-lg border border-gray-200 bg-white p-4">
                    <summary className="cursor-pointer font-semibold text-gray-900">
                      Is this spell checker really free?
                    </summary>
                    <p className="mt-3 text-gray-600">
                      Yes! Completely free with no limits or registration required.
                    </p>
                  </details>
                  <details className="rounded-lg border border-gray-200 bg-white p-4">
                    <summary className="cursor-pointer font-semibold text-gray-900">
                      Is my text private?
                    </summary>
                    <p className="mt-3 text-gray-600">
                      Absolutely. All processing happens in your browser — nothing is sent to servers.
                    </p>
                  </details>
                  <details className="rounded-lg border border-gray-200 bg-white p-4">
                    <summary className="cursor-pointer font-semibold text-gray-900">
                      How accurate is it?
                    </summary>
                    <p className="mt-3 text-gray-600">
                      Very accurate for common words and typos. For specialized terms, you can add them to your personal dictionary.
                    </p>
                  </details>
                </div>
              </section>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-6 space-y-6">
                <TableOfContents items={tocItems} />
                <SidebarAd slot="toolPageSidebar" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpellCheckerPage;
