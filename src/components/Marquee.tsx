import { invite } from '../data/invite'

const items = [invite.eventName, invite.weekday, invite.timeLabel, 'Máscara obrigatória', invite.host]

/** Faixa dourada em movimento: chama a atenção e resume o convite. */
export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map(t => (
        <span key={t} className="flex items-center">
          <span className="px-6 text-[11px] font-medium uppercase tracking-[0.45em] md:px-10 md:text-xs">{t}</span>
          <span className="h-1.5 w-1.5 rotate-45 bg-noir" />
        </span>
      ))}
    </div>
  )
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gold-aged via-gold-light to-gold py-3 text-noir" role="note" aria-label={`${invite.eventName}, ${invite.weekday}, ${invite.timeLabel}`}>
      <div className="marquee flex w-max">{row}{row}{row}{row}</div>
    </div>
  )
}
