'use client'

import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { treatmentCategories } from '@/lib/treatments'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(true)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#inicio" className="flex flex-col leading-none" aria-label="Laura Cabo, ir al inicio">
          <span className="font-serif text-2xl font-medium tracking-[0.18em] text-primary">LAURA CABO</span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.42em] text-muted-foreground">
            Spa capilar
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-10 text-xs uppercase tracking-[0.25em]">
            <li className="group relative">
              <a
                href="#tratamientos"
                className="flex items-center gap-1.5 py-8 text-foreground transition-colors hover:text-accent"
                aria-haspopup="true"
              >
                Tratamientos
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
              </a>
              <ul className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 border border-border bg-card py-3 opacity-0 shadow-sm transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {treatmentCategories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      className="block px-6 py-3 normal-case tracking-normal text-sm text-foreground transition-colors hover:bg-secondary hover:text-accent focus-visible:bg-secondary"
                    >
                      <span className="font-serif text-lg">{category.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#contacto" className="py-8 text-foreground transition-colors hover:text-accent">
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="border border-primary px-5 py-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Reservar
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="p-2 text-primary md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" aria-label="Navegación móvil" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-6 py-4">
            <li className="border-b border-border">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-xs uppercase tracking-[0.25em]"
                onClick={() => setMobileTreatmentsOpen((open) => !open)}
                aria-expanded={mobileTreatmentsOpen}
              >
                Tratamientos
                <ChevronDown
                  className={`size-4 transition-transform ${mobileTreatmentsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {mobileTreatmentsOpen && (
                <ul className="pb-4 pl-4">
                  {treatmentCategories.map((category) => (
                    <li key={category.id}>
                      <a href={`#${category.id}`} onClick={closeMobile} className="block py-2 font-serif text-xl text-foreground">
                        {category.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="#contacto" onClick={closeMobile} className="block py-4 text-xs uppercase tracking-[0.25em]">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
