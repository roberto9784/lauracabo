import Image from 'next/image'
import { treatmentCategories } from '@/lib/treatments'

export function Intro() {
  return (
    <section id="tratamientos" className="scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[1304/816] w-full overflow-hidden shadow-[0_30px_60px_-30px_rgba(58,42,30,0.45)]">
          <Image
            src="/images/logo-laura-cabo.jpg"
            alt="Logotipo de Laura Cabo Spa Capilar: Masajes y tratamientos faciales"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Menú de tratamientos</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
            Experiencias diseñadas a la medida de cada persona
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            En Laura Cabo creemos que el bienestar empieza por detenerse. Cada tratamiento comienza con una escucha
            atenta para adaptar técnicas, aromas y productos a lo que tu cuerpo necesita en ese momento.
          </p>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {treatmentCategories.map((category, index) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="group flex items-baseline justify-between gap-6 py-5 transition-colors hover:text-accent"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-xs tracking-[0.2em] text-muted-foreground">0{index + 1}</span>
                    <span className="font-serif text-2xl">{category.title}</span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-transform group-hover:translate-x-1">
                    Ver menú
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
