import Image from 'next/image'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[78vh] items-end overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Sala de tratamientos con paredes de piedra, toallas de lino y ramas de eucalipto"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2b1f16]/75 via-[#2b1f16]/40 to-[#2b1f16]/5" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 text-[#f8f2e9] lg:px-10 lg:pb-24">
        <p className="text-xs uppercase tracking-[0.4em]">Spa capilar · Masajes · Tratamientos faciales</p>
        <h1 className="mt-6 max-w-3xl text-balance font-serif text-5xl font-light leading-[1.05] md:text-7xl">
          Un refugio para cuidar de <em className="font-normal">ti</em>
        </h1>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-[#f8f2e9]/85">
          Rituales pensados para reconectar con tu bienestar más profundo, donde cada gesto busca devolver el equilibrio
          al cuerpo, al rostro y al cabello.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em]">
          <a href="#tratamientos" className="bg-[#f8f2e9] px-7 py-4 text-primary transition-colors hover:bg-white">
            Ver tratamientos
          </a>
          <a
            href="#contacto"
            className="border border-[#f8f2e9]/70 px-7 py-4 transition-colors hover:bg-[#f8f2e9]/10"
          >
            Reservar cita
          </a>
        </div>
      </div>
    </section>
  )
}
