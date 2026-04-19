import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Don Kasjo – Kody BLIK, kasyna online, bonusy i promocje",
  description:
    "Dołącz do kanału Don Kasjo i zgarnij kody BLIK do polecanych kasyn online. Sprawdź najlepsze bonusy, promocje i instrukcje krok po kroku!",
  keywords:
    "kasyno, blik, bonus, don kasjo, kasyna online, promocje, kody blik",
  authors: [{ name: "Don Kasjo" }],
  publisher: "Don Kasjo",
  robots: "index, follow",
  alternates: {
    canonical: "https://don-kasjo-krol.vercel.app/",
  },
  openGraph: {
    title: "Don Kasjo – Kody BLIK, kasyna online, bonusy i promocje",
    description:
      "Dołącz do kanału Don Kasjo i zgarnij kody BLIK do polecanych kasyn online. Sprawdź najlepsze bonusy, promocje i instrukcje krok po kroku!",
    images: ["/icon.png"],
    type: "website",
    url: "https://don-kasjo-krol.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Don Kasjo – Kody BLIK, kasyna online, bonusy i promocje",
    description:
      "Dołącz do kanału Don Kasjo i zgarnij kody BLIK do polecanych kasyn online. Sprawdź najlepsze bonusy, promocje i instrukcje krok po kroku!",
    images: ["/icon.png"],
  },
  verification: {
    google: "eHaiWH6LKI2TlrisJsLFCc00YawJ8NPZkd3xqHkD8n0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4SYY1JK9PM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4SYY1JK9PM');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '805450812541053');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Event ViewContent */}
        <Script id="fb-viewcontent" strategy="afterInteractive">
          {`
            fbq('track', 'ViewContent');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=805450812541053&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
