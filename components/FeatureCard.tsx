import type { Feature } from "@/types/site";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="feature-card">
      <div className="icon-box">
        <Icon aria-hidden="true" size={22} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </article>
  );
}
