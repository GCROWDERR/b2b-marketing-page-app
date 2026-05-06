import { MarketingPrimaryLink } from "./marketing-buttons";

export function MarketingEnterpriseMission() {
  return (
    <section className="bg-background px-8 py-20 pb-24 text-center lg:px-16">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6">
        <p className="text-base font-semibold text-primary">The B2B Mission</p>
        <h2 className="max-w-[800px] font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:tracking-[-2px]">
          We connect people to trusted ways to save, borrow, and thrive.
        </h2>
        <p className="max-w-[720px] text-lg leading-snug text-foreground">
          Our mission doesn&apos;t stop with the consumer. We are committed to
          building a transparent, efficient marketplace where financial
          institutions can thrive alongside the customers they serve. Let&apos;s
          build the future of finance together.
        </p>
        <MarketingPrimaryLink href="#" className="mt-2">
          Get in touch with our Partnership Team
        </MarketingPrimaryLink>
      </div>
    </section>
  );
}
