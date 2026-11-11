import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Home, CalendarDays, Shirt, MapPin, CheckCircle2 } from 'lucide-react'

const items = [
  { id: 'inicio', label: 'Início', icon: Home },
  { id: 'data', label: 'Data', icon: CalendarDays },
  { id: 'traje', label: 'Traje', icon: Shirt },
  { id: 'local', label: 'Local', icon: MapPin },
  { id: 'confirmar', label: 'Confirmar', icon: CheckCircle2 },
] as const

/** Menu fixo: barra inferior no celular, barra no topo no computador. Destaca a seção em que você está. */
export default function Nav({ visible }: { visible: boolean }) {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    items.forEach(i => { const el = document.getElementById(i.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <motion.nav
      aria-label="Menu do convite"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-noir/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:bottom-auto md:top-0 md:border-b md:border-t-0 md:pb-0"
    >
      <ul className="mx-auto flex max-w-3xl items-stretch justify-around md:justify-center md:gap-4">
        {items.map(({ id, label, icon: Icon }) => {
          const on = active === id
          return (
            <li key={id} className="flex-1 md:flex-none">
              <a href={`#${id}`} aria-current={on ? 'true' : undefined}
                className={`relative flex flex-col items-center gap-1 px-2 py-2.5 text-[9px] uppercase tracking-[0.2em] transition-colors duration-500 md:flex-row md:gap-2 md:px-5 md:py-4 md:text-[11px] md:tracking-[0.35em] ${on ? 'text-gold-light' : 'text-cream/55 hover:text-gold-light'}`}>
                <Icon size={18} strokeWidth={1.4} />
                <span>{label}</span>
                {on && <motion.span layoutId="nav-ind" className="absolute inset-x-3 top-0 h-px bg-gold-light shadow-[0_0_10px_#ecd28f] md:inset-x-4 md:bottom-0 md:top-auto" />}
              </a>
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
