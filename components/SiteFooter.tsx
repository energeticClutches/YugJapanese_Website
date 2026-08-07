import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand-mark" href="/">
            <span>YJ</span>
            YugJapanese
          </Link>
          <p>
            Learn Hiragana, Katakana, and Kanji in a clear order. Free, with no
            account and no ads.
          </p>
        </div>
        <div className="footer-links">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <Icon aria-hidden="true" size={16} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>Copyright 2026 {siteConfig.name}. All rights reserved.</span>
        <span>Official website repository only.</span>
      </div>
    </footer>
  );
}
