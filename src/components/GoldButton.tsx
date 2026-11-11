import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  external?: boolean
  solid?: boolean   // versão cheia, com brilho pulsante (chamada principal)
  icon?: ReactNode
}

/** Botão/link dourado. `solid` = destaque máximo; sem `solid` = contorno com varredura de metal no hover. */
export default function GoldButton({ href, children, external, solid, icon }: Props) {
  const ext = external ? { target: '_blank', rel: 'noreferrer' } : {}
  if (solid) {
    return (
      <a href={href} {...ext}
        className="glow-pulse group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-gold-aged via-gold-light to-gold px-8 py-4 text-[11px] font-medium tracking-[0.35em] text-noir transition-transform duration-300 hover:scale-[1.04] active:scale-95 md:px-10">
        <span aria-hidden className="shine absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40" />
        {icon && <span className="relative">{icon}</span>}
        <span className="relative">{children}</span>
      </a>
    )
  }
  return (
    <a href={href} {...ext}
      className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border border-gold/60 px-8 py-4 text-[11px] tracking-[0.35em] text-gold-light transition-colors duration-700 hover:border-gold-light hover:text-noir focus-visible:text-noir md:px-10">
      <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-aged via-gold-light to-gold transition-transform duration-700 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0" />
      {icon && <span className="relative">{icon}</span>}
      <span className="relative">{children}</span>
    </a>
  )
}
