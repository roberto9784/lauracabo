import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const contactDetails = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+34 600 000 000',
    href: 'https://wa.me/34600000000',
  },
  { icon: Phone, label: 'Teléfono', value: '+34 600 000 000', href: 'tel:+34600000000' },
  { icon: Mail, label: 'Email', value: 'hola@lauracabo.com', href: 'mailto:hola@lauracabo.com' },
  { icon: MapPin, label: 'Dirección', value: 'Calle Ejemplo, 12 · 28001 Madrid' },
]

const hours = [
  { days: 'Lunes a viernes', time: '10:00 – 20:00' },
  { days: 'Sábados', time: '10:00 – 14:00' },
  { days: 'Domingos', time: 'Cerrado' },
]

export function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-20 bg-primary px-6 py-24 text-primary-foreground lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#d6b98a]">Contacto</p>
          <h2 id="contacto-title" className="mt-5 text-balance font-serif text-5xl font-light leading-tight md:text-6xl">
            Reserva tu momento de calma
          </h2>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
            Todos los tratamientos se realizan con cita previa. Escríbenos y te ayudaremos a elegir el ritual que mejor
            se adapte a ti.
          </p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:bg-white"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Reservar por WhatsApp
          </a>
        </div>

        <div className="grid gap-12 sm:grid-cols-2">
          <ul className="flex flex-col gap-8">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <Icon className="mt-1 size-5 shrink-0 text-[#d6b98a]" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">{label}</p>
                  {href ? (
                    <a href={href} className="mt-1 block font-serif text-xl transition-colors hover:text-[#d6b98a]">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 font-serif text-xl">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Clock className="mt-1 size-5 shrink-0 text-[#d6b98a]" aria-hidden="true" />
            <div className="w-full">
              <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">Horario</p>
              <dl className="mt-3 divide-y divide-primary-foreground/15">
                {hours.map((item) => (
                  <div key={item.days} className="flex justify-between gap-4 py-3">
                    <dt className="text-primary-foreground/80">{item.days}</dt>
                    <dd className="font-serif text-lg">{item.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
