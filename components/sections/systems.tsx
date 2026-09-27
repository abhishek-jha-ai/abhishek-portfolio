import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { employerSystems, products, shipped, type System } from "@/content/systems";
import { GitHubIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { StatusDot } from "@/components/ui/status-dot";
import { TagList } from "@/components/ui/tag";
import { cx } from "@/lib/cx";

function Improvement({ data }: { data: NonNullable<System["improvement"]> }) {
  const ratio = Math.max(data.afterHours / data.beforeHours, 0.006);
  return (
    <figure className="mt-6 rounded-lg border border-line bg-canvas/60 p-4">
      <figcaption className="font-mono text-[11px] text-subtle">{data.label}</figcaption>
      <div className="mt-3 space-y-2.5 font-mono text-[11.5px]">
        <div className="grid grid-cols-[48px_1fr_84px] items-center gap-3">
          <span className="text-subtle">before</span>
          <span className="h-1.5 rounded-full bg-subtle/40" />
          <span className="text-right text-muted">{data.before}</span>
        </div>
        <div className="grid grid-cols-[48px_1fr_84px] items-center gap-3">
          <span className="text-subtle">after</span>
          <span className="h-1.5">
            <span className="block h-full min-w-1.5 rounded-full bg-accent" style={{ width: `${ratio * 100}%` }} />
          </span>
          <span className="text-right text-accent">{data.after}</span>
        </div>
      </div>
    </figure>
  );
}

const NewTab = () => <span className="sr-only"> (opens in new tab)</span>;

const quietLink = "inline-flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors hover:text-fg";

function SystemLinks({ name, links }: { name: string; links: NonNullable<System["links"]> }) {
  return (
    <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} live product (opens in new tab)`}
          className="inline-flex items-center gap-2 text-[13.5px] font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-fg"
        >
          <StatusDot state="running" />
          Live product
          <ArrowUpRight aria-hidden className="size-3.5 text-muted" />
        </a>
      )}
      {links.caseStudy && (
        <Link href={links.caseStudy} className={quietLink}>
          Case study <ArrowUpRight aria-hidden className="size-3.5" />
        </Link>
      )}
      {links.github && (
        <a href={links.github} target="_blank" rel="noopener noreferrer" className={quietLink}>
          <GitHubIcon className="size-3.5" /> Code
          <NewTab />
        </a>
      )}
    </p>
  );
}

function SystemCard({ system }: { system: System }) {
  return (
    <article
      aria-labelledby={`sys-${system.id}`}
      className={cx(
        "flex flex-col rounded-xl border border-line bg-panel p-5 transition-colors duration-300 hover:border-line-strong sm:p-7",
        system.wide && "md:col-span-2 md:grid md:grid-cols-2 md:gap-x-12",
      )}
    >
      <div>
        <p className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-subtle">
          <span>
            {system.code} <span className="text-line-strong">·</span> {system.domain}
          </span>
          {system.org && <span className="text-muted">{system.org}</span>}
        </p>
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 id={`sys-${system.id}`} className="text-[22px] font-medium leading-tight tracking-[-0.025em] sm:text-2xl">
              {system.name}
            </h3>
            {system.role && <p className="mt-1.5 text-[13px] text-subtle">{system.role}</p>}
          </div>
          {system.metric && (
            <p className="shrink-0 text-right">
              <span className="block text-[26px] font-medium leading-none tracking-[-0.03em] tabular-nums sm:text-[30px]">
                {system.metric.value}
              </span>
              <span className="mt-1.5 block font-mono text-[11px] text-subtle">{system.metric.label}</span>
            </p>
          )}
        </div>
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">{system.summary}</p>
        {system.improvement && <Improvement data={system.improvement} />}
      </div>

      {(system.groups || system.links) && (
        <div className={cx("mt-auto pt-7", system.wide && "md:mt-0 md:pt-0")}>
          {system.groups && (
            <dl className="space-y-3">
              {system.groups.map((g) => (
                <div key={g.label} className="grid gap-2 sm:grid-cols-[88px_1fr] sm:gap-3">
                  <dt className="pt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-subtle">{g.label}</dt>
                  <dd>
                    <TagList items={g.items} />
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {system.links && (
            <div className={cx(system.groups && "mt-6 border-t border-line pt-5")}>
              <SystemLinks name={system.name} links={system.links} />
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function Shipped() {
  return (
    <div className="mt-14 rounded-xl border border-line bg-panel/60">
      <h3 className="border-b border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle sm:px-6">
        Shipped &amp; live
      </h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
        {shipped.map((item) => {
          const body = (
            <>
              <span className="flex items-center gap-2 text-[14.5px] font-medium text-fg">
                {item.live ? <StatusDot state="running" /> : <StatusDot state="idle" />}
                {item.name}
                {item.live && <span className="font-mono text-[10.5px] font-normal uppercase tracking-[0.12em] text-accent">Live</span>}
              </span>
              <span className="mt-1 flex items-center gap-1.5 pl-3.5 font-mono text-[11.5px] text-subtle transition-colors group-hover:text-muted">
                {item.what} · {item.label}
                <ArrowUpRight aria-hidden className="size-3 shrink-0" />
              </span>
            </>
          );
          const cls = "group flex h-full flex-col px-5 py-4 transition-colors hover:bg-raised/60 sm:px-6";
          return (
            <li key={item.name} className="border-b border-line last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0">
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {body}
                  <NewTab />
                </a>
              ) : (
                <Link href={item.href} className={cls}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-14">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{label}</h3>
      {children}
    </div>
  );
}

export function Systems() {
  return (
    <Section
      id="systems"
      index="02"
      label="Systems"
      title="Shipped to real users."
      lede="Beyond the flagship — live AI and SaaS products you can open today, plus the healthcare, platform and enterprise systems I built inside companies."
    >
      <Shipped />

      <Group label="Products">
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((s) => (
            <SystemCard key={s.id} system={s} />
          ))}
        </div>
      </Group>

      <Group label="Inside companies">
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {employerSystems.map((s) => (
            <SystemCard key={s.id} system={s} />
          ))}
        </div>
      </Group>
    </Section>
  );
}
