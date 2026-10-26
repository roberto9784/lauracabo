import { treatmentCategories } from '@/lib/treatments'

export function SiteFooter() {
  return (
    <footer className="bg-[#2e2118] px-6 py-12 text-[#f8f2e9]/70 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em] text-[#f8f2e9]">LAURA CABO</p>
          <p className="mt-1 text-[0.62rem] uppercase tracking-[0.42em]">Spa capilar · Masajes · Tratamientos faciales</p>
        </div>
        <nav aria-label="Navegación del pie de página">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em]">
            {treatmentCategories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`} className="transition-colors hover:text-[#f8f2e9]">
                  {category.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="transition-colors hover:text-[#f8f2e9]">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-[#f8f2e9]/10 pt-6 text-xs">
        © {new Date().getFullYear()} Laura Cabo Spa Capilar. Todos los derechos reservados.
      </p>
    </footer>
  )
}
