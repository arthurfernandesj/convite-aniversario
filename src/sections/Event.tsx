import { CalendarDays, Shirt, CheckCircle2, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import { invite } from '../data/invite'

type Step = { n: string; icon: ReactNode; title: string; text: string; cta: string; href: string; external?: boolean }

const steps: Step[] = [
  { n: '01', icon: <CalendarDays size={26} strokeWidth={1.2} />, title: 'Anote a data', text: `${invite.weekday}, ${invite.day}/11, das ${invite.timeLabel}.`, cta: 'VER DATA', href: '#data' },
  { n: '02', icon: <Shirt size={26} strokeWidth={1.2} />, title: 'Prepare o traje e a máscara', text: 'Traje a rigor e máscara obrigatória.', cta: 'VER TRAJE', href: '#traje' },
  { n: '03', icon: <CheckCircle2 size={26} strokeWidth={1.2} />, title: 'Confirme presença', text: 'Leva 10 segundos e vai direto para o meu WhatsApp.', cta: 'CONFIRMAR', href: '#confirmar' },
]

export default function Event() {
  return (
    <section id="passos" className="relative overflow-hidden bg-gradient-to-b from-noir via-wine/40 to-noir px-6 py-24 md:py-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] tracking-[0.6em] text-gold/80">COMO PARTICIPAR</p>
        <h2 className="mt-5 font-display text-4xl font-light italic text-cream md:text-6xl">{invite.about.title}</h2>
        <div aria-hidden className="mx-auto my-8 h-px w-24 bg-gold/70" />
        <p className="font-display text-xl leading-relaxed text-cream/75 md:text-2xl">{invite.about.text}</p>
      </Reveal>

      <ol className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 0.15} className="h-full">
              <a href={s.href} {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group relative flex h-full flex-col gap-4 border border-gold/30 bg-carbon/80 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-light hover:shadow-[0_0_40px_rgba(201,162,77,.25)]">
                <div className="flex items-center justify-between text-gold-light">
                  {s.icon}
                  <span className="font-display text-4xl font-light text-gold/40 transition-colors group-hover:text-gold-light">{s.n}</span>
                </div>
                <h3 className="font-display text-2xl text-cream">{s.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-cream/65">{s.text}</p>
                <span className="flex items-center gap-2 text-[10px] tracking-[0.35em] text-gold-light">
                  {s.cta} <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1.5" />
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
