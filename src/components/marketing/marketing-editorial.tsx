import { IMG } from "./assets";
import { MarketingPrimaryLink } from "./marketing-buttons";

export function MarketingEditorial() {
  return (
    <section className="px-8 py-4 lg:px-16">
      <div className="relative mx-auto flex max-w-[1312px] flex-col items-center gap-8 overflow-hidden rounded-[48px] bg-gradient-to-b from-editorial-from to-editorial-to px-8 py-16 min-[900px]:min-h-[665px] min-[900px]:flex-row min-[900px]:gap-28 min-[900px]:px-20 min-[900px]:py-0">
        <div className="relative z-[2] flex w-full max-w-[492px] shrink-0 flex-col gap-8">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-surface-inverse-fg sm:text-5xl sm:tracking-[-2px]">
              Advice from people, not just algorithms.
            </h2>
            <p className="mt-6 text-lg leading-snug text-surface-inverse-fg-soft">
              Our journalists use 50 years of data to hold the industry
              accountable. We find the fine print so you don&apos;t have to.
            </p>
          </div>
          <MarketingPrimaryLink className="self-start" href="#">
            Meet our editorial team
          </MarketingPrimaryLink>
        </div>

        <div className="relative hidden h-[600px] w-full min-[900px]:absolute min-[900px]:right-0 min-[900px]:top-[-109px] min-[900px]:block min-[900px]:w-[548px] min-[900px]:max-w-none">
          <div className="flex h-full gap-3.5">
            <div className="flex w-[267px] flex-col gap-3.5">
              <div className="relative h-[310px] w-full shrink-0 overflow-hidden rounded-[17px]">
                <img
                  src={IMG.editorial1}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="relative h-[310px] w-full shrink-0 overflow-hidden rounded-[17px] bg-tone-positive">
                <img
                  src={IMG.editorial2}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="relative h-[310px] w-full shrink-0 overflow-hidden rounded-[17px] bg-tone-warn">
                <img
                  src={IMG.editorial3}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="-mt-80 flex w-[267px] flex-col gap-3.5 min-[900px]:-mt-80">
              <div className="relative h-[310px] w-full shrink-0 overflow-hidden rounded-[17px] bg-tone-positive">
                <img
                  src={IMG.editorial3}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="relative h-[310px] w-full shrink-0 overflow-hidden rounded-[17px] bg-tone-warn">
                <img
                  src={IMG.editorial4}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="relative h-[310px] w-full shrink-0 overflow-hidden rounded-[17px] bg-tone-purple">
                <img
                  src={IMG.editorial1}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="relative h-[310px] w-full shrink-0 overflow-hidden rounded-[17px] bg-tone-positive">
                <img
                  src={IMG.editorial2}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
