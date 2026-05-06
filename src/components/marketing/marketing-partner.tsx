import { IMG } from "./assets";
import { MarketingPrimaryLink } from "./marketing-buttons";
import { Card } from "@/components/ui/card";

export function MarketingPartner() {
  return (
    <section>
      <div className="bg-background px-8 py-16 pb-10 text-center lg:px-16">
        <h2 className="mx-auto max-w-[742px] font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:tracking-[-2px]">
          Partner with the marketplace that powers homeownership.
        </h2>
      </div>
      <div className="flex flex-col items-center gap-10 bg-background px-8 pb-24 lg:flex-row lg:px-16 lg:pb-28">
        <div className="w-full max-w-[644px] shrink-0 lg:pr-14">
          <Card className="relative mx-auto flex h-[400px] w-full max-w-[588px] items-center justify-center overflow-hidden rounded-[32px] border-0 bg-card shadow-none ring-0 sm:h-[534px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={IMG.partnerBlob}
                alt=""
                className="size-full object-contain opacity-90"
              />
            </div>
            <div className="relative z-[2] grid w-full grid-cols-2 gap-2 p-6 drop-shadow-[-8px_3px_10px_rgba(15,27,47,0.05)]">
              <Card className="flex h-[116px] items-center justify-center rounded-[21px] border-0 bg-card p-5 shadow-none ring-0">
                <img
                  src={IMG.partner1}
                  alt="Veterans United"
                  className="max-h-[55px] max-w-[130px] object-contain"
                />
              </Card>
              <Card className="flex h-[144px] items-center justify-center rounded-[21px] border-0 bg-card p-5 shadow-none ring-0">
                <img
                  src={IMG.partner2}
                  alt="Tomo Mortgage"
                  className="max-h-[55px] max-w-[130px] object-contain"
                />
              </Card>
              <Card className="flex h-[147px] items-center justify-center rounded-[21px] border-0 bg-card p-5 shadow-none ring-0">
                <img
                  src={IMG.partner3}
                  alt="Morty"
                  className="max-h-[55px] max-w-[130px] object-contain"
                />
              </Card>
              <Card className="flex h-[120px] items-center justify-center rounded-[21px] border-0 bg-card p-5 shadow-none ring-0">
                <img
                  src={IMG.partner4}
                  alt="Mr. Cooper"
                  className="max-h-[55px] max-w-[130px] object-contain"
                />
              </Card>
            </div>
          </Card>
        </div>
        <div className="flex-1 lg:pr-10">
          <h3 className="mb-6 font-display text-3xl font-semibold leading-snug tracking-tight text-foreground sm:text-4xl sm:tracking-[-1.44px]">
            We don&apos;t just connect people to rates; we connect them to the
            right institutions.
          </h3>
          <p className="mb-8 text-lg leading-snug text-foreground">
            Bankrate provides a high-intent, data-driven platform where the
            nation&apos;s top lenders meet qualified borrowers. Whether you are
            looking to scale your mortgage volume or deepen customer loyalty, we
            offer the technology and trust to help your business thrive.
          </p>
          <div className="mb-8 flex flex-col gap-4">
            {[
              {
                icon: IMG.bullet1,
                body: (
                  <>
                    <span className="font-bold">Qualified Reach: </span>
                    Access over 25 million high-intent monthly users.
                  </>
                ),
              },
              {
                icon: IMG.bullet2,
                body: (
                  <>
                    <span className="font-bold">Data-Driven Matchmaking:</span>{" "}
                    Use our 50 years of market intelligence to find the right
                    customers for your specific products.
                  </>
                ),
              },
              {
                icon: IMG.bullet3,
                body: (
                  <>
                    <span className="font-bold">Trusted Integration:</span> Join
                    a marketplace cited by the Federal Reserve and top-tier
                    financial media.
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-lg leading-[1.4] text-foreground"
              >
                <span className="mt-[5px] flex size-[18px] shrink-0 items-center justify-center">
                  <span className="inline-flex rotate-[90.32deg]">
                    <img
                      src={item.icon}
                      alt=""
                      className="block h-auto w-[15px] max-w-none"
                      width={15}
                      height={15}
                    />
                  </span>
                </span>
                <p className="min-w-0 flex-1">{item.body}</p>
              </div>
            ))}
          </div>
          <MarketingPrimaryLink href="#">Become a Bankrate Partner</MarketingPrimaryLink>
        </div>
      </div>
    </section>
  );
}
