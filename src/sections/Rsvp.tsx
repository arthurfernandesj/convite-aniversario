import { useState } from 'react'
import { Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import { invite } from '../data/invite'

export default function Rsvp() {
  const [nome, setNome] = useState('')
  const [erro, setErro] = useState(false)
  const nomeLimpo = nome.trim()

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nomeLimpo) { setErro(true); return }
    const url = `https://wa.me/${invite.rsvp.number}?text=${encodeURIComponent(invite.rsvp.message(nomeLimpo))}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section id="confirmar" className="bg-gradient-to-b from-noir to-wine/60 px-6 py-24 text-center md:py-40">
      <Reveal className="mx-auto max-w-xl">
        <p className="text-[11px] tracking-[0.6em] text-gold/80">CONFIRMAÇÃO</p>
        <h2 className="mt-6 font-display text-3xl font-light italic leading-snug text-cream md:text-5xl">{invite.rsvp.text}</h2>
        <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
          Digite seu nome e toque no botão. O WhatsApp abre com a mensagem de confirmação pronta para enviar ao {invite.hostFirstName}.
        </p>

        <form onSubmit={enviar} className="mx-auto mt-10 flex max-w-md flex-col gap-4" noValidate>
          <label htmlFor="nome" className="text-left text-[10px] tracking-[0.4em] text-gold/80">SEU NOME</label>
          <input id="nome" value={nome} onChange={e => { setNome(e.target.value); setErro(false) }}
            placeholder="Como você se chama?" autoComplete="name"
            aria-invalid={erro} aria-describedby={erro ? 'nome-erro' : undefined}
            className={`w-full border bg-noir/60 px-5 py-4 font-display text-xl text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-gold-light ${erro ? 'border-red-400' : 'border-gold/40'}`} />
          {erro && <p id="nome-erro" role="alert" className="text-left text-sm text-red-300">Digite seu nome para confirmar.</p>}

          <p className="border-l border-gold/40 py-1 pl-4 text-left font-display text-base italic leading-snug text-cream/60">
            “{invite.rsvp.message(nomeLimpo || 'seu nome')}”
          </p>

          <button type="submit"
            className="glow-pulse group relative mt-2 inline-flex items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-gold-aged via-gold-light to-gold px-8 py-4 text-[11px] font-medium tracking-[0.35em] text-noir transition-transform duration-300 hover:scale-[1.03] active:scale-95">
            <span aria-hidden className="shine absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40" />
            <Send size={16} className="relative" />
            <span className="relative">CONFIRMAR NO WHATSAPP</span>
          </button>
        </form>
      </Reveal>
    </section>
  )
}
