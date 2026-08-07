import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="shell header-inner" aria-label="Primary navigation">
        <Link className="brand-mark" href="/" aria-label="YugJapanese home">
          <span>YJ</span>
          YugJapanese
        </Link>
        <div className="nav-links" aria-label="Main pages">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="header-actions">
          <Link className="nav-cta" href="/learn">
            Start learning
          </Link>
          <details className="mobile-nav">
            <summary className="mobile-nav-toggle" aria-label="Open menu">
              <Menu aria-hidden="true" size={20} />
            </summary>
            <div className="mobile-nav-panel" aria-label="Main pages">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
