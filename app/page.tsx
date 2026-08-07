import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { FeatureCard } from "@/components/FeatureCard";
import { TrackCard } from "@/components/TrackCard";
import { scriptTracks } from "@/lib/learning";
import { appFeatures, quickLinks, stats, webFeatures } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="reveal">
            <p className="eyebrow">Learn Japanese from zero</p>
            <h1>YugJapanese</h1>
            <p className="hero-copy">
              Japanese starts with its characters. Learn Hiragana, then Katakana,
              then Kanji, in the order that actually works — calmly, and without
              an account.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/learn">Start learning</ButtonLink>
              <ButtonLink href="/download" variant="secondary">
                Get the offline app
              </ButtonLink>
            </div>
            <div className="hero-proof" aria-label="What to expect">
              <span>No account</span>
              <span>No ads</span>
              <span>Free to use</span>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/yugjapanese-hero.png"
              alt="The YugJapanese Android app open on a phone, showing a kana practice screen"
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
            <p className="eyebrow">The learning path</p>
            <h2>Three scripts, learned in order.</h2>
            <p>
              Hiragana covers every sound in Japanese. Katakana writes those same
              sounds for foreign words and names. Kanji adds meaning on top of
              both.
            </p>
          </div>
          <div className="track-grid">
            {scriptTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
          <div className="page-actions">
            <ButtonLink href="/learn">See the full path</ButtonLink>
            <ButtonLink href="/practice" variant="secondary">
              Practise characters
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Why learn here</p>
            <h2>Quiet software for serious practice.</h2>
          </div>
          <div className="feature-grid">
            {webFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <span className="tag">Android app</span>
            <h2>Want the full practice tools offline?</h2>
            <p>
              The website already has writing practice, review, and progress
              tracking. The Android app adds stroke accuracy scoring, spaced
              repetition, and offline pronunciation audio — and runs with no
              connection at all.
            </p>
          </div>
          <div className="feature-grid">
            {appFeatures.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          <div className="page-actions">
            <ButtonLink href="/download">Download the app</ButtonLink>
            <ButtonLink href="/features" variant="secondary">
              See everything it does
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Official resources</p>
            <h2>Everything else in one trusted place.</h2>
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
    </>
  );
}
