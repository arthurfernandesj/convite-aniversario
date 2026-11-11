// Fonte única dos dados do convite. Edite aqui e o site inteiro atualiza.

// ⚠️ Confira este número antes de publicar:
const WHATSAPP_NUMBER = '5561985997985' // seu número: 55 + DDD + número (só dígitos)

const startISO = '2026-11-14T19:00:00-03:00' // sábado, 19h (Brasília)
const endISO = '2026-11-15T03:00:00-03:00'   // madrugada de domingo, 03h

const toCal = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

export const invite = {
  eventName: 'Baile de Máscaras',
  tagline: 'Uma noite para ser lembrada.',
  host: 'ARTHUR FERNANDES',
  hostFirstName: 'Arthur',
  lead: 'Você está convidado para o baile de',
  subtitle: 'Uma noite de mistério, elegância e celebração.',

  weekday: 'Sábado',
  day: '14',
  month: 'NOVEMBRO',
  year: '2026',
  dateShort: 'Sábado, 14/11',
  timeLabel: '19h às 03h',
  dateISO: startISO, // usado na contagem regressiva

  calendarUrl:
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    `&text=${encodeURIComponent('Baile de Máscaras do Arthur')}` +
    `&dates=${toCal(startISO)}/${toCal(endISO)}` +
    `&details=${encodeURIComponent('Máscara obrigatória. O endereço será enviado pelo WhatsApp após a confirmação.')}`,

  about: {
    title: 'Uma noite de mistério',
    text: 'Vista sua melhor máscara, prepare seu traje e venha celebrar comigo esta noite especial.',
  },
  dressCode: ['TRAJE A RIGOR', 'MÁSCARA OBRIGATÓRIA'],
  dressNote: 'Venha com seu visual mais elegante — e não esqueça da máscara.',
  dressIdeas: [
    {
      title: 'Traje',
      text: 'Smoking, terno escuro, vestido longo ou macacão elegante. Preto, vinho e dourado combinam com a noite.',
    },
    {
      title: 'Máscara',
      text: 'Preta, dourada, de renda ou com detalhes brilhantes. Escolha um modelo confortável para aproveitar a festa.',
    },
  ],

  rsvp: {
    text: 'Sua presença fará parte desta noite.',
    number: WHATSAPP_NUMBER,
    message: (nome: string) =>
      `Olá, Arthur! Aqui é ${nome}. Estou confirmando minha presença no seu Baile de Máscaras, sábado (14/11), das 19h às 03h. Estarei de máscara! 🎭`,
  },
  closing: ['Até lá.', 'Prepare sua máscara.'],
}
