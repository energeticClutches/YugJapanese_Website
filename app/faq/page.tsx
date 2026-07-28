import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about YugJapanese and the official website.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers for new users."
        description="A small collection of questions users are likely to ask before downloading or learning more."
      />
      <section className="page-section">
        <div className="shell faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
