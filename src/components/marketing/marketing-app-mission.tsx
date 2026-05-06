import { IMG } from "./assets";
import { MarketingPrimaryLink } from "./marketing-buttons";

export function MarketingApp() {
  return (
    <section className="bg-background px-8 py-16 pb-10 lg:px-16">
      <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-6 lg:flex-row lg:gap-6">
        <div className="relative h-[400px] w-full max-w-[588px] shrink-0 overflow-hidden rounded-[32px] bg-primary lg:h-[616px]">
          <img
            src={IMG.appPhone}
            alt="Bankrate mobile app"
            className="absolute -left-44 -top-11 h-[702px] w-[936px] max-w-none object-cover sm:-left-32 lg:-left-44"
            width={936}
            height={702}
          />
        </div>
        <div className="flex flex-1 flex-col gap-8 pr-0 lg:pr-10">
          <div>
            <p className="text-base font-semibold leading-snug text-primary">
              Backed by Bankrate
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:tracking-[-2px]">
              Confidence shouldn&apos;t be a feeling. It should be a
              calculation.
            </h2>
            <p className="mt-6 text-lg leading-snug text-foreground">
              Our Bankrate member experience is the next evolution of financial
              tooling. We take our 50 years of data and apply it directly to
              your specific financial profile to build a roadmap for your home
              journey.
            </p>
          </div>
          <MarketingPrimaryLink className="self-start" href="#">
            Sign up / Log in
          </MarketingPrimaryLink>
        </div>
      </div>
    </section>
  );
}

export function MarketingMission() {
  return (
    <section className="bg-background px-8 py-16 pb-10 text-center lg:px-16">
      <div className="mx-auto flex max-w-[866px] flex-col items-center gap-6">
        <p className="text-base font-semibold text-primary">Our Mission</p>
        <h2 className="max-w-[742px] font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:tracking-[-2px]">
          We connect people to trusted ways to save, borrow and thrive.
        </h2>
        <p className="max-w-[626px] text-lg leading-snug text-foreground">
          The financial system is designed to be confusing, but it doesn&apos;t
          have to stay that way. We simplify the process and hold lenders
          accountable so you can make your next move with total clarity.
        </p>
      </div>
    </section>
  );
}
