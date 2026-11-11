import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarPlus } from 'lucide-react'
import Reveal from '../components/Reveal'
import GoldButton from '../components/GoldButton'
import { invite } from '../data/invite'

const calc = () => {
  const ms = Math.max(0, new Date(invite.dateISO).getTime() - Date.now())
  const s = Math.floor(ms / 1000)
  return [['DIAS', Math.floor(s / 86400)], ['HORAS', Math.floor(s / 3600) % 24], ['MINUTOS', Math.floor(s / 60) % 60], ['SEGUNDOS', s % 60]] as const
}

export default function Countdown() {
  const [t, setT] = useState(calc)
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id) }, [])
  return (
    <section id="data" className="relative overflow-hidden bg-noir px-6 py-24 md:py-36" aria-label="Data, horário e contagem regressiva">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(90,20,36,.55),transparent_60%)]" />
      <div className="relative">
        <Reveal className="text-center">
          <p className="text-[11px] tracking-[0.6em] text-gold/80">RESERVE A DATA</p>
          <p className="mt-6 font-display text-2xl italic text-cream/80 md:text-3xl">{invite.weekday}</p>
          <p className="font-display text-[clamp(7rem,30vw,15rem)] font-light leading-[0.9] text-gold-metal">{invite.day}</p>
          <p className="font-display text-[clamp(1.6rem,6vw,3rem)] tracking-[0.4em] text-cream">{invite.month} {invite.year}</p>
          <div aria-hidden className="mx-auto my-7 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="font-display text-[clamp(1.8rem,7vw,3.2rem)] tracking-[0.14em] text-gold-light">{invite.timeLabel}</p>
          <p className="mt-2 text-xs tracking-[0.3em] text-cream/55">DAS 19H DE SÁBADO ATÉ 03H DA MADRUGADA</p>
        </Reveal>

        <Reveal className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px bg-gold/25 md:grid-cols-4">
          {t.map(([label, v]) => (
            <div key={label} className="flex flex-col items-center gap-3 bg-noir px-4 py-10">
              <div className="relative h-[1em] overflow-hidden font-display text-[clamp(3rem,10vw,5.5rem)] font-light leading-none tabular-nums text-gold-metal">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span key={v} className="block" initial={{ y: '60%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-60%', opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                    {String(v).padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-[10px] tracking-[0.5em] text-cream/60">{label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12 text-center">
          <GoldButton external href={invite.calendarUrl} icon={<CalendarPlus size={16} />}>ADICIONAR À AGENDA</GoldButton>
        </Reveal>
      </div>
    </section>
  )
}
