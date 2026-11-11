import { MapPin, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import GoldButton from '../components/GoldButton'
import { invite } from '../data/invite'

export default function Venue() {
  return (
    <section id="local" className="bg-noir px-6 py-24 md:py-40">
      <Reveal className="mx-auto max-w-3xl border border-gold/30 p-9 text-center shadow-[0_0_60px_rgba(201,162,77,.08)] md:p-16">
        <MapPin className="mx-auto text-gold-light" size={34} strokeWidth={1.2} />
        <p className="mt-6 text-[11px] tracking-[0.6em] text-gold/80">LOCAL</p>
        <h2 className="mt-6 font-display text-[clamp(2.2rem,8vw,4.2rem)] font-light leading-tight tracking-[0.06em] text-cream">O endereço será enviado pelo WhatsApp</h2>
        <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
          Confirme sua presença pelo WhatsApp para receber o endereço e os detalhes do baile.
        </p>
        <p className="mt-6 font-display text-xl tracking-[0.12em] text-gold-light">{invite.dateShort} <span className="whitespace-nowrap">· {invite.timeLabel}</span></p>
        <div className="mt-10"><GoldButton solid href="#confirmar" icon={<CheckCircle2 size={16} />}>CONFIRMAR PRESENÇA!</GoldButton></div>
      </Reveal>
    </section>
  )
}
