import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FeatureCard } from "@/components/FeatureCard";
import { features, quickLinks, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="reveal">
            <p className="eyebrow">Official YugJapanese website</p>
            <h1>YugJapanese</h1>
            <p className="hero-copy">
              A beautiful, offline-first Japanese learning experience designed for
              focused practice, privacy, and steady progress.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/download">Download APK</ButtonLink>
              <ButtonLink href="/features" variant="secondary">
                Explore features
              </ButtonLink>
            </div>
            <div className="hero-proof" aria-label="Brand promises">
              <span>No ads</span>
              <span>No subscriptions</span>
              <span>Built for offline learning</span>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/yugjapanese-hero.png"
              alt="YugJapanese app interface preview on a phone"
              width={1680}
              height={945}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Why it feels different</p>
            <h2>Quiet software for serious Japanese practice.</h2>
            <p>
              YugJapanese is shaped around simplicity, care, and a learning flow
              that respects attention instead of competing for it.
            </p>
          </div>
          <div className="feature-grid">
            {features.slice(0, 6).map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell screenshot-grid">
          <div className="screenshot-card">
            <Image
              src="/yugjapanese-hero.png"
              alt="YugJapanese interface screenshot mockup"
              width={1680}
              height={945}
            />
          </div>
          <div className="interface-panel">
            <div className="mini-row">
              <strong>Kana focus</strong>
              <div className="progress-line" aria-hidden="true">
                <span />
              </div>
            </div>
            <div className="mini-row">
              <strong>Vocabulary review</strong>
              <p>Short, repeatable sessions for daily consistency.</p>
            </div>
            <div className="mini-row">
              <strong>Offline ready</strong>
              <p>Learning stays available when the connection disappears.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Official resources</p>
            <h2>Everything users need in one trusted place.</h2>
          </div>
          <div className="quick-grid">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link className="quick-link" href={link.href} key={link.href}>
                  <Icon aria-hidden="true" size={22} />
                  <span>
                    {link.label}
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell content-grid">
          <div className="section-heading">
            <p className="eyebrow">Install with confidence</p>
            <h2>Clear APK download guidance for every release.</h2>
          </div>
          <div className="step-list">
            {["Download the latest APK", "Allow install from trusted source", "Open YugJapanese and begin"].map(
              (step, index) => (
                <article className="step-card" key={step}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step}</h3>
                    <p>
                      <CheckCircle2 aria-hidden="true" size={16} /> Official
                      website guidance keeps each install step simple and visible.
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
