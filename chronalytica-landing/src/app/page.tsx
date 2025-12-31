"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Atom01,
  BarChart04,
  Compass,
  LayersThree01,
  MagicWand01,
  ShieldTick,
  Waves,
} from "@untitled-ui/icons-react";
import { HeroHeadline } from "@/components/HeroHeadline";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionBadge } from "@/components/SectionBadge";

const researchPillars = [
  {
    title: "Living observatories",
    description:
      "Always-on research cells map emerging behaviors across frontier industries for future-ready guidance.",
    icon: <Compass className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Signal-distilled intelligence",
    description:
      "Analysts synthesize qualitative interviews, deep data forensics, and scenario modeling into rapid dossiers.",
    icon: <BarChart04 className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Ethics-forward research",
    description:
      "Embedded governance tracks ensure every finding is contextualized with consequences and accountability.",
    icon: <ShieldTick className="h-5 w-5" aria-hidden />,
  },
];

const researchApps = [
  {
    name: "ChronaSight",
    descriptor: "real-time anomaly explorer",
    status: "private beta",
  },
  {
    name: "Pulsefolios",
    descriptor: "narrative-first knowledge vault",
    status: "alpha",
  },
];

const technologyApps = [
  {
    name: "Coherence Engine",
    descriptor: "confidential AI substrate",
    status: "stealth",
  },
  {
    name: "Temporal Loom",
    descriptor: "multi-horizon inference studio",
    status: "prototype",
  },
  {
    name: "VectorQuery",
    descriptor: "cross-surface pattern mapper",
    status: "alpha",
  },
];

const technologyHighlights = [
  {
    title: "AI orchestration core",
    description:
      "Our modular inference pipelines choreograph ensembles of expert models, unlocking orchestral AI interactions.",
    icon: <LayersThree01 className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Adaptive secrecy",
    description:
      "A sealed discovery framework keeps breakthrough IP insulated until launch, while partners tap curated outcomes.",
    icon: <MagicWand01 className="h-5 w-5" aria-hidden />,
  },
  {
    title: "Flow-calibrated UX",
    description:
      "Lenis-powered motion and GSAP microinteractions keep complex insight legible, calm, and tactile across surfaces.",
    icon: <Waves className="h-5 w-5" aria-hidden />,
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(80,180,255,0.2),transparent_65%)] blur-3xl" />
        <div className="absolute right-10 top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(136,92,255,0.22),transparent_62%)] blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(61,255,206,0.18),transparent_60%)] blur-3xl" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-32 px-6 pb-24 pt-12 sm:px-10 lg:px-14">
        <header className="flex flex-col gap-16">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <Atom01 className="h-5 w-5 text-sky-200" aria-hidden />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.48em] text-white/60">
                  Chronalytica
                </span>
                <span className="text-sm font-medium text-white/80">
                  Temporal Foresight Studio
                </span>
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white/80 transition hover:border-sky-300/40 hover:text-white"
            >
              Request dossier
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </nav>

          <section className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <SectionBadge tone="violet">Frontier duality</SectionBadge>
              <HeroHeadline
                text="Chronalytica architects the tempo of research intelligence and confidential AI breakthroughs."
                className="text-4xl leading-[1.05] text-white/95 sm:text-5xl lg:text-6xl"
              />
              <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Two dedicated branches operate in perfect counterpoint: our Research arm generates living insight systems,
                while Technology incubates a sealed AI platform designed to redefine how organizations negotiate time.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#branches"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200/90"
                >
                  Explore branches
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <div className="flex -space-x-3">
                  {["/avatars/1.png", "/avatars/2.png", "/avatars/3.png"].map((avatar, index) => (
                    <span
                      key={avatar}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold uppercase text-white/80"
                    >
                      {index === 0 ? "FT" : index === 1 ? "XR" : "AI"}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-white/50">
                  Future temporalists on-call 24/7
                </span>
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(21,30,71,0.35)]">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(93,209,255,0.2),transparent_75%)]" />
              <div className="absolute -left-12 -top-12 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl" />
              <div className="absolute -bottom-16 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl" />
              <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.38em] text-white/50">
                <span className="h-1 w-6 rounded-full bg-sky-300/70" />
                Signal cadence
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-white/60">Daily research sync</p>
                  <p className="text-3xl font-semibold text-white/90">08:00 / 14:00 / 22:00 UTC</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-white/50">Research</p>
                    <p className="mt-3 text-lg font-semibold text-white/90">Temporal dossiers</p>
                    <p className="mt-2 text-sm text-white/60">Synthesized findings tuned to decision horizons.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-white/50">Technology</p>
                    <p className="mt-3 text-lg font-semibold text-white/90">Experiential sandboxes</p>
                    <p className="mt-2 text-sm text-white/60">Hands-on simulations for strategic rehearsal.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4">
                  <span className="text-sm text-white/60">Live velocity index</span>
                  <span className="text-xl font-semibold text-sky-200">+27.3%</span>
                </div>
              </div>
            </div>
          </section>
        </header>

        <section id="branches" className="grid gap-20 lg:grid-cols-2">
          <RevealOnScroll className="space-y-8">
            <SectionBadge tone="sky">Research branch</SectionBadge>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white/95 sm:text-4xl">
                Research that senses the future before it forms.
              </h2>
              <p className="text-base text-white/70">
                Chronalytica Research orchestrates always-on investigations across emerging domains. Each cell blends
                ethnography, computational analysis, and narrative design to surface the patterns that become tomorrow&apos;s
                advantage.
              </p>
            </div>
            <div className="grid gap-6">
              {researchPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-sky-300/40 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200">
                      {pillar.icon}
                    </span>
                    {pillar.title}
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{pillar.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.36em] text-white/50">Apps in development</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {researchApps.map((app) => (
                  <div key={app.name} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-sm font-medium text-white/80">{app.name}</p>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">{app.status}</p>
                    <p className="mt-3 text-sm text-white/60">{app.descriptor}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="space-y-8" delay={0.12}>
            <SectionBadge tone="mint">Technology branch</SectionBadge>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white/95 sm:text-4xl">
                Technology that bends temporal complexity into clarity.
              </h2>
              <p className="text-base text-white/70">
                A closed, multidisciplinary engineering team is cultivating the Chronalytica platform—an AI-based
                engine engineered for adaptive planning, temporal modeling, and cross-surface coordination.
              </p>
            </div>
            <div className="grid gap-6">
              {technologyHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="group flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-emerald-300/40 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3 text-sm font-medium text-white/70">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200">
                      {highlight.icon}
                    </span>
                    {highlight.title}
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{highlight.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.36em] text-white/50">Under wraps</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {technologyApps.map((app) => (
                  <div key={app.name} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-sm font-medium text-white/80">{app.name}</p>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">{app.status}</p>
                    <p className="mt-3 text-sm text-white/60">{app.descriptor}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </section>

        <RevealOnScroll className="grid gap-12 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-6">
            <SectionBadge tone="violet">Engagement flow</SectionBadge>
            <h3 className="text-3xl font-semibold text-white/95">A cadence built for temporal leverage.</h3>
            <p className="text-sm text-white/65">
              We guide partners through an intentionally compressed journey—from first signal immersion to co-developed
              launch simulations—so every initiative respects the pace of opportunity.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-white"
            >
              Download the engagement primer
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ol className="grid gap-6 text-sm text-white/70">
            {["Temporal immersion", "Branch alignment", "Prototype sprint", "Launch rehearsal"].map(
              (phase, index) => (
                <li
                  key={phase}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition hover:border-white/30 hover:bg-slate-900/60"
                >
                  <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-300/60 via-violet-300/60 to-emerald-300/60 opacity-0 transition group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.32em] text-white/50">
                      Phase {index + 1}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-white/40" aria-hidden />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white/90">{phase}</p>
                  <p className="mt-3 text-sm text-white/60">
                    {index === 0 &&
                      "Shared situational intelligence lab calibrates objectives and hypotheses."}
                    {index === 1 &&
                      "Custom cross-branch roadmap aligns research observatories with stealth platform capabilities."}
                    {index === 2 &&
                      "Hybrid teams prototype experiences leveraging Chronalytica toolkits and data fabrics."}
                    {index === 3 &&
                      "Final simulations synthesize foresight, tech, and orchestration plans for decisive action."}
                  </p>
                </li>
              ),
            )}
          </ol>
        </RevealOnScroll>

        <RevealOnScroll
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/80 p-10"
          delay={0.2}
        >
          <div className="absolute inset-y-0 right-0 w-[40%] bg-[radial-gradient(circle_at_center,rgba(103,238,217,0.25),transparent_70%)] blur-2xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-4">
              <SectionBadge tone="mint">Become a partner</SectionBadge>
              <h3 className="text-3xl font-semibold text-white/95">Let&apos;s orchestrate temporal advantage together.</h3>
              <p className="text-sm text-white/65">
                Schedule a confidential briefing to explore dual-branch collaborations, request a bespoke research dossier,
                or inquire about early access to our AI engine.
              </p>
            </div>
            <Link
              href="mailto:hello@chronalytica.com"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              hello@chronalytica.com
              <ArrowUpRight className="h-4 w-4 text-slate-900 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
            </Link>
          </div>
        </RevealOnScroll>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-12 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Chronalytica. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#branches" className="transition hover:text-white/80">
              Branches
            </Link>
            <Link href="#contact" className="transition hover:text-white/80">
              Contact
            </Link>
            <Link href="mailto:press@chronalytica.com" className="transition hover:text-white/80">
              Press
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
