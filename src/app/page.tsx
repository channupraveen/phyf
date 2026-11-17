import Image from "next/image";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Crop from "@/components/Crop";
import Gallery from "@/components/Gallery";
import BuyBox from "@/components/BuyBox";
import Newsletter from "@/components/Newsletter";
import { FadeUp, RevealText } from "@/components/Reveal";
import { banner, brand, engineering, faqs, footerLinks, product, specs, stories } from "@/content";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ── Hero ───────────────────────────────────── */}
        <section className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden bg-black">
          {/* blurred backdrop from the same photo */}
          <Crop
            label=""
            zoom="cover"
            focus="50% 55%"
            className="absolute inset-0 scale-125 opacity-60 blur-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

          <div className="hero-zoom relative aspect-[3/4] h-[72svh] max-h-[760px] max-w-[88vw] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/60">
            <Image
              src="/phyf-shaker.jpg"
              alt="phyf electric shaker bottle in blush pink with a black carry strap"
              width={1200}
              height={1600}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-8 left-0 right-0 mx-auto flex max-w-7xl items-end justify-between gap-6 px-6 text-white">
            <div>
              <h1 className="flex items-center gap-3 text-2xl font-bold sm:text-3xl">
                {product.name}
                <span className="rounded-md bg-dot px-2 py-0.5 text-xs font-bold uppercase tracking-wider">New</span>
              </h1>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">{product.kicker}</p>
            </div>
            <a
              href="#shop"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-blush"
            >
              Shop now
            </a>
          </div>
        </section>

        {/* ── Gallery ────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="mx-auto mb-14 max-w-7xl px-5 text-center">
            <RevealText text="Mix. Clip. Go." className="text-sm font-semibold uppercase tracking-[0.5em] text-black/70" />
            <FadeUp>
              <p className="mx-auto mt-6 max-w-xl text-3xl font-bold leading-tight md:text-5xl">
                One bottle. Every detail thought through.
              </p>
            </FadeUp>
          </div>
          <Gallery />
        </section>

        {/* ── Engineering ────────────────────────────── */}
        <section id="engineering" className="scroll-mt-24 bg-black py-24 text-white md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-20">
            <FadeUp>
              <div className="relative overflow-hidden rounded-[2rem]">
                <Crop label="phyf shaker lid and body close-up" zoom="170%" focus="50% 45%" className="aspect-[4/5] w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3 text-center text-xs">
                  {["Lid", "Body", "Motor base"].map((p) => (
                    <span key={p} className="rounded-full border border-white/25 bg-white/10 py-2 backdrop-blur">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <p className="text-sm font-medium text-white/50">{engineering.label}</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">{engineering.title}</h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">{engineering.body}</p>
              <a
                href="#shop"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:bg-white hover:text-ink"
              >
                Explore more →
              </a>
              <p className="mt-10 flex flex-wrap gap-4 text-sm text-blush">
                {engineering.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Banner ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blush via-[#e8636a] to-[#3a0d12] py-28 text-center text-white md:py-36">
          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
          <RevealText
            text={banner}
            className="relative mx-auto max-w-5xl px-5 font-display text-5xl uppercase leading-[0.95] md:text-8xl"
          />
        </section>

        {/* ── Shop ───────────────────────────────────── */}
        <section id="shop" className="scroll-mt-24 bg-white py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-20">
            <FadeUp>
              <div className="overflow-hidden rounded-[2rem] bg-mist">
                <Image
                  src="/phyf-shaker.jpg"
                  alt="phyf shaker bottle, front view"
                  width={1200}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeUp>

            <FadeUp delay={150} className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-dot">Shop</p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">{product.name}</h2>
              <p className="mt-2 text-lg text-black/50">{product.kicker}</p>
              <div className="mt-8">
                <BuyBox />
              </div>

              <div className="mt-12">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-black/50">Specifications</h3>
                <dl className="divide-y divide-black/10 border-y border-black/10">
                  {specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-6 py-3.5">
                      <dt className="font-semibold">{s.label}</dt>
                      <dd className="text-right text-black/60">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Stories ────────────────────────────────── */}
        <section id="stories" className="scroll-mt-24 bg-black py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="mb-12 text-sm font-semibold uppercase tracking-[0.4em] text-white/50">From the phyf journal</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {stories.map((s, i) => (
                <FadeUp key={s.title} delay={i * 150}>
                  <a href={s.href} className="group block overflow-hidden rounded-[2rem] bg-white/5">
                    <div className="overflow-hidden">
                      <Crop label="" zoom="160%" focus={s.focus} className="aspect-[16/10] w-full transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex items-end justify-between gap-6 p-7">
                      <h3 className="max-w-md text-2xl font-bold leading-snug">{s.title}</h3>
                      <span className="shrink-0 text-sm font-semibold uppercase tracking-wider text-white/60 transition group-hover:text-white">
                        Explore more →
                      </span>
                    </div>
                  </a>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────── */}
        <section id="faq" className="scroll-mt-24 py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-center text-4xl font-bold md:text-5xl">Questions?</h2>
            <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-12 text-black/60">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────── */}
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-5 pt-20">
          <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
            <div>
              <Logo className="text-5xl" />
              <p className="mt-5 max-w-sm text-white/50">Get new arrivals, discounts and giveaways first.</p>
              <div className="mt-6">
                <Newsletter />
              </div>
            </div>
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em]">{col.heading}</h3>
                <ul className="space-y-3 text-white/60">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#faq" className="transition hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/10 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-6">
              {brand.socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {s.name}
                </a>
              ))}
            </div>
            <a href={`mailto:${brand.email}`} className="hover:text-white">
              {brand.email}
            </a>
            <p>© 2026 phyf. All rights reserved.</p>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="overflow-hidden">
          <p aria-hidden className="select-none text-center font-display text-[28vw] leading-[0.8] text-white/[0.06]">
            phyf<span className="text-dot/40">.</span>
          </p>
        </div>
      </footer>
    </>
  );
}
