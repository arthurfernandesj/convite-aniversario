import Reveal from '../components/Reveal'
import { invite } from '../data/invite'

export default function DressCode() {
  return (
    <section id="traje" className="grain relative overflow-hidden bg-noir px-6 py-28 text-center md:py-44">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,20,36,.55),transparent_65%)]" />
      <div className="relative">
        <Reveal><p className="text-[11px] tracking-[0.6em] text-gold/80">TRAJE</p></Reveal>
        {invite.dressCode.map((line, i) => (
          <Reveal key={line} delay={0.3 + i * 0.35}>
            <p className={`font-display font-light leading-[1.05] tracking-[0.1em] text-[clamp(2.3rem,9vw,6rem)] ${i === 0 ? 'text-gold-metal mt-8' : 'mt-2 text-transparent [-webkit-text-stroke:1px_#c9a24d]'}`}>{line}</p>
          </Reveal>
        ))}
        <Reveal delay={1.1}><p className="mx-auto mt-10 max-w-sm font-display text-lg italic text-cream/70">{invite.dressNote}</p></Reveal>
        <div className="mx-auto mt-14 grid max-w-3xl gap-5 text-left sm:grid-cols-2">
          {invite.dressIdeas.map((idea, i) => (
            <Reveal key={idea.title} delay={1.3 + i * 0.15}>
              <div className="h-full border border-gold/25 bg-carbon/50 p-6 md:p-8">
                <h3 className="font-display text-2xl text-gold-light">{idea.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{idea.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
