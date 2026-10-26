export type TreatmentOption = {
  duration: string
  price: number
}

export type Treatment = {
  name: string
  description: string
  options: TreatmentOption[]
}

export type TreatmentCategory = {
  id: string
  eyebrow: string
  title: string
  intro: string
  image: string
  imageAlt: string
  treatments: Treatment[]
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: 'spa-capilar',
    eyebrow: 'Head Spa',
    title: 'Spa capilar',
    intro:
      'Rituales concebidos para devolver el equilibrio al cuero cabelludo y la calma a la mente. Diagnóstico, limpieza profunda, masaje y nutrición en una misma experiencia sensorial.',
    image: '/images/spa-capilar.png',
    imageAlt: 'Ritual de spa capilar con masaje del cuero cabelludo y agua templada',
    treatments: [
      {
        name: 'Ritual esencial',
        description:
          'Un primer encuentro con el spa capilar. Comienza con un análisis del cuero cabelludo, seguido de una limpieza purificante, un masaje relajante de cabeza y cuello y una mascarilla nutritiva adaptada a las necesidades de tu cabello.',
        options: [{ duration: '45 minutos', price: 55 }],
      },
      {
        name: 'Ritual detox',
        description:
          'Exfoliación suave del cuero cabelludo para eliminar impurezas y residuos, vapor de ozono y masaje drenante. Devuelve al cabello su ligereza, su brillo natural y una sensación inmediata de frescor.',
        options: [
          { duration: '60 minutos', price: 70 },
          { duration: '90 minutos', price: 95 },
        ],
      },
      {
        name: 'Ritual signature Laura Cabo',
        description:
          'Nuestra experiencia insignia. Respiración consciente, diagnóstico capilar con microcámara, doble limpieza, masaje prolongado de cabeza, cuello y hombros, mascarilla facial hidratante y tratamiento de hidratación profunda con cascada de agua templada.',
        options: [{ duration: '90 minutos', price: 110 }],
      },
    ],
  },
  {
    id: 'masajes',
    eyebrow: 'Cuerpo',
    title: 'Masajes',
    intro:
      'Técnicas manuales lentas y rítmicas que alivian la tensión muscular, mejoran la circulación y ejercen un profundo efecto reparador. Cada masaje se adapta a tus necesidades.',
    image: '/images/masajes.png',
    imageAlt: 'Masaje de espalda con aceites esenciales templados',
    treatments: [
      {
        name: 'Masaje relajante',
        description:
          'Masaje corporal completo con aceites esenciales a elegir. Maniobras envolventes y suaves que liberan el estrés acumulado y te ayudan a reconectar contigo misma.',
        options: [
          { duration: '60 minutos', price: 55 },
          { duration: '90 minutos', price: 75 },
        ],
      },
      {
        name: 'Masaje descontracturante',
        description:
          'Un masaje firme y profundo centrado en las zonas de mayor tensión: espalda, cuello y hombros. Ayuda a mitigar la rigidez y a descargar los músculos sobreexigidos.',
        options: [
          { duration: '30 minutos', price: 35 },
          { duration: '60 minutos', price: 60 },
        ],
      },
      {
        name: 'Drenaje linfático',
        description:
          'Técnica manual suave y rítmica que estimula el sistema linfático, reduce la retención de líquidos y aporta una sensación de ligereza en todo el cuerpo.',
        options: [{ duration: '60 minutos', price: 60 }],
      },
      {
        name: 'Piedras calientes',
        description:
          'El calor de las piedras volcánicas destensa el cuerpo de forma natural, activa la circulación y potencia la relajación muscular. Ideal para quienes tienen dificultad para desconectar.',
        options: [{ duration: '75 minutos', price: 70 }],
      },
    ],
  },
  {
    id: 'tratamientos-faciales',
    eyebrow: 'Rostro',
    title: 'Tratamientos faciales',
    intro:
      'Cuidados personalizados para cada tipo de piel. Combinamos activos de alta eficacia con técnicas de masaje facial para revelar una piel luminosa, firme y visiblemente renovada.',
    image: '/images/faciales.png',
    imageAlt: 'Tratamiento facial con masaje y sérums en frascos de vidrio ámbar',
    treatments: [
      {
        name: 'Limpieza facial profunda',
        description:
          'Un tratamiento purificante para todo tipo de pieles. Limpieza, exfoliación enzimática, extracción e hidratación final para unificar la textura, cerrar los poros y potenciar la vitalidad de la piel.',
        options: [{ duration: '60 minutos', price: 50 }],
      },
      {
        name: 'Hidratación esencial',
        description:
          'Tratamiento profundamente nutritivo que activa la circulación y la renovación celular. Mejora la elasticidad, la textura y el tono de la piel, devolviéndole un brillo luminoso.',
        options: [
          { duration: '60 minutos', price: 55 },
          { duration: '90 minutos', price: 75 },
        ],
      },
      {
        name: 'Ritual efecto lifting',
        description:
          'Masaje facial esculpidor, mascarilla reafirmante y activos ricos en colágeno que tensan y tonifican la piel al instante. Redefine el óvalo facial y aporta un aspecto descansado.',
        options: [{ duration: '75 minutos', price: 80 }],
      },
    ],
  },
]
