import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Textakit | Free Text Tools Accuracy Notice",
  description: "Important disclaimer about the use of free online text tools including grammar checker, plagiarism checker, and word counter on Textakit.",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Disclaimer
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Textakit provides powerful free tools — but they are not perfect.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto space-y-12 text-text-secondary">
          <section className="p-8 rounded-2xl bg-orange-500/10 border border-orange-500/30">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Important Notice</h2>
            <p className="text-lg">
              Textakit is a free utility platform. While we strive for maximum accuracy, <strong>our tools should not be your only source of truth</strong> in academic, legal, medical, or professional contexts.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">Grammar & Spell Checker</h2>
            <p className="text-lg">
              Our grammar checker uses advanced rules and contextual analysis, but it may miss nuances, cultural expressions, or specialized terminology. Always proofread important documents manually.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">Plagiarism Checker</h2>
            <p className="text-lg">
              Our plagiarism detection compares against common phrases and public web sources. It is <strong>not</strong> connected to Turnitin, academic databases, or private content. It is a helpful indicator, not definitive proof.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">Word & Character Counter</h2>
            <p className="text-lg">
              Highly accurate for all languages and Unicode characters, but some platforms (e.g., Twitter/X, LinkedIn) may count characters differently due to normalization rules.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">No Liability</h2>
            <p className="text-lg">
              Textakit and its developer (Arpit Kumar Kanwar) are not liable for any consequences resulting from reliance on our tools, including academic penalties, rejected submissions, or professional errors.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-text-primary mb-6">We Keep Improving</h2>
            <p className="text-lg">
              Every week we improve accuracy based on user feedback. If you find an error, please report it — we genuinely read every email.
            </p>
          </section>
        </div>

        <div className="mt-20 text-center">
          <p className="text-text-secondary text-lg">
            Use Textakit as a powerful assistant — not a replacement for human judgment.
          </p>
        </div>
      </div>
    </div>
  );
}