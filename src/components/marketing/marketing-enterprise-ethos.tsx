import { ENTERPRISE_IMG } from "./enterprise-assets";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mosaicPhotos = [
  { src: ENTERPRISE_IMG.missionPhoto1, bg: "bg-[#a8a8e8]" },
  { src: ENTERPRISE_IMG.missionPhoto2, bg: "bg-[#7ad595]" },
  { src: ENTERPRISE_IMG.missionPhoto3, bg: "bg-[#fbd772]" },
  { src: ENTERPRISE_IMG.missionPhoto4, bg: "bg-[#7ad595]" },
] as const;

export function MarketingEnterpriseEthos() {
  return (
    <section className="bg-background px-6 py-16 sm:px-12 lg:px-16 lg:py-[120px]">
      <div className="mx-auto max-w-[1312px] overflow-hidden rounded-[48px] bg-gradient-to-b from-[#13223b] to-[#0f1b2f] px-8 py-14 lg:px-20 lg:py-16">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-[112px]">
          <div className="flex max-w-[492px] flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.2] tracking-[-2px] text-white lg:text-[48px]">
                We connect people to trusted ways to save, borrow, and thrive.
              </h2>
              <p
                className="text-lg text-white"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Our mission doesn&apos;t stop with the consumer. We are committed to building
                a transparent, efficient marketplace where financial institutions can thrive
                alongside the customers they serve. Let&apos;s build the future of finance
                together.
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              arrow
              className="h-12 w-fit px-5 text-[15px] font-semibold"
              asChild
            >
              <a href="#">Get in touch with our Partnership Team</a>
            </Button>
          </div>

          <div className="relative flex flex-1 justify-center lg:justify-end">
            <div className="grid max-w-[548px] grid-cols-2 gap-3">
              {mosaicPhotos.map((photo, i) => (
                <div
                  key={i}
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden rounded-2xl",
                    photo.bg
                  )}
                >
                  <img
                    src={photo.src}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
