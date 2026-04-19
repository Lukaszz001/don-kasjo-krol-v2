import { Metadata } from 'next'
import Script from 'next/script'
import ClientComponent from './ClientComponent'

export const metadata: Metadata = {
  title: 'Spinbara Bonus do Depozytu 2025 - Nawet 150% + Darmowe Spiny',
  description: 'Spinbara bonus do depozytu to najlepsza oferta powitalna w 2025! Sprawdź warunki, bonus 150% + free spiny. Krok po kroku jak odebrać!',

  keywords: [
    'Spinbara bonus do depozytu',
    'bonus depozytowy Spinbara',
    'Spinbara bonus powitalny',
    'promocje kasynowe Spinbara',
    'Spinbara darmowe spiny',
    'bonus do depozytu',
    'kasyno online bonus',
    'bonus powitalny 2025'
  ],

  authors: [{ name: 'Redakcja' }],
  
  openGraph: {
    title: 'Spinbara Bonus do Depozytu 2025 - Kompletny Przewodnik',
    description: 'Odkryj najlepszy bonus powitalny Spinbara - nawet 150% do depozytu plus 225 darmowych spinów. Szczegółowe warunki i instrukcja krok po kroku.',
    url: 'https://don-kasjo-krol.vercel.app/spinbara-bonus-do-depozytu',
    siteName: 'Don Kasjo',
    images: [
      {
        url: 'https://don-kasjo-krol.vercel.app/spinbara-bonus-do-depozytu.webp',
        width: 1200,
        height: 630,
        alt: 'Spinbara Bonus do Depozytu - Przewodnik 2025',
      },
    ],
    locale: 'pl_PL',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Spinbara Bonus do Depozytu 2025 - Nawet 150% + Spiny',
    description: 'Kompletny przewodnik po bonusie powitalnym Spinbara. Warunki, instrukcje i strategie maksymalizacji korzyści.',
    images: ['https://don-kasjo-krol.vercel.app/spinbara-bonus-do-depozytu.webp'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://don-kasjo-krol.vercel.app/spinbara-bonus-do-depozytu',
  },

  category: 'Gaming',
}

// Schema JSON-LD dla FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ile wynosi maksymalny Spinbara bonus do depozytu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maksymalny Spinbara bonus do depozytu wynosi 600 zł przy wpłacie minimum 400 zł (150% bonus). W całym pakiecie powitalnym na trzy depozyty możesz otrzymać łącznie do 1800 zł bonusu plus 225 darmowych spinów."
      }
    },
    {
      "@type": "Question",
      "name": "Czy Spinbara bonus depozytowy jest dostępny dla graczy z Polski?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tak, bonus depozytowy Spinbara jest w pełni dostępny dla wszystkich zweryfikowanych graczy z Polski, którzy ukończyli 18 lat. Kasyno posiada odpowiednie licencje i oferuje pełne wsparcie w języku polskim."
      }
    },
    {
      "@type": "Question",
      "name": "Jak długo mam na wykorzystanie bonusu do depozytu Spinbara?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na wykorzystanie Spinbara bonus do depozytu masz 30 dni kalendarzowych od momentu aktywacji. W tym czasie musisz spełnić wszystkie wymagania obrotu (x35 kwoty bonusowej)."
      }
    },
    {
      "@type": "Question",
      "name": "Jakie są wymagania obrotu dla Spinbara bonus do depozytu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wymagania obrotu dla środków bonusowych wynoszą x35, co oznacza, że musisz postawić w grach kwotę równą 35-krotności otrzymanego bonusu. Na przykład: bonus 200 zł wymaga obrotu 7000 zł."
      }
    },
    {
      "@type": "Question",
      "name": "Na które gry mogę wykorzystać Spinbara darmowe spiny z bonusu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spinbara darmowe spiny możesz wykorzystać na wyselekcjonowanej liście popularnych automatów, w tym Book of Dead, Starburst, Gonzo's Quest, Wolf Gold, Sweet Bonanza i inne hity od NetEnt, Pragmatic Play czy Play'n GO."
      }
    }
  ]
}

export default function Page() {
  return (
    <>
      {/* Schema JSON-LD dla FAQ */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <ClientComponent />
    </>
  )
}
