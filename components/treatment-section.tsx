import Image from 'next/image'
import { Plus } from 'lucide-react'
import type { TreatmentCategory } from '@/lib/treatments'

type TreatmentSectionProps = {
  category: TreatmentCategory
  index: number
}

export function TreatmentSection({ category, index }: TreatmentSectionProps) {
  const reversed = index % 2 === 1

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-title`}
      className={`scroll-mt-20 px-6 py-24 lg:px-10 lg:py-28 ${reversed ? 'bg-secondary/60' : ''}`}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className={`lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}>
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">
            0{index + 1} · {category.eyebrow}
          </p>
          <h2 id={`${category.id}-title`} className="mt-4 font-serif text-5xl font-light md:text-6xl">
            {category.title}
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{category.intro}</p>

          <div className="mt-12 flex items-baseline justify-between border-b border-primary/80 pb-4">
            <h3 className="text-xs uppercase tracking-[0.3em]">Catálogo de tratamientos</h3>
            <p className="text-xs text-muted-foreground">Precios en euros</p>
          </div>

          <div className="divide-y divide-border">
            {category.treatments.map((treatment) => (
              <details key={treatment.name} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-2xl leading-snug md:text-3xl">{treatment.name}</span>
                  <span className="flex items-center gap-5">
                    <span className="hidden text-sm text-muted-foreground sm:inline">
                      desde {Math.min(...treatment.options.map((o) => o.price))} €
                    </span>
                    <Plus
                      className="size-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <div className="pb-6 pr-2 md:pr-12">
                  <p className="text-pretty leading-relaxed text-muted-foreground">{treatment.description}</p>
                  <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-4">
                    {treatment.options.map((option) => (
                      <div key={option.duration} className="flex flex-col">
                        <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{option.duration}</dt>
                        <dd className="mt-1 font-serif text-3xl text-accent">{option.price} €</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </details>
            ))}
          </div>

          <a
            href="#contacto"
            className="mt-10 inline-block border border-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Reservar {category.title.toLowerCase()}
          </a>
        </div>
      </div>
    </section>
  )
}
