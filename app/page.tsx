"use client";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [copiedSpinbara, setCopiedSpinbara] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("KASJO");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySpinbara = () => {
    navigator.clipboard.writeText("KASJO");
    setCopiedSpinbara(true);
    setTimeout(() => setCopiedSpinbara(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#111112] text-white font-sans flex flex-col items-stretch px-0">
      {/* Slimmer, premium header */}
      <header className="w-full sticky top-0 z-30 bg-gradient-to-br from-[#1a1010] to-[#18181b] backdrop-blur border-b border-[#222] flex items-center justify-center px-2 sm:px-8 py-2 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full max-w-5xl mx-auto justify-start sm:justify-center">
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between ">
            <a href="https://kick.com/donkasjo" target="_blank" rel="noopener noreferrer">
              <button className="text-white px-4 py-2 rounded-full font-bold text-xs shadow transition-colors cursor-pointer flex items-center justify-center">
                <Image src="/kick-logo.svg" alt="Kick Logo" width={60} height={24} className="h-6 w-auto" />
              </button>
            </a>
            <span className="text-xs text-green-500 font-bold whitespace-nowrap ml-2 sm:ml-0">● LIVE</span>
          </div>
          <span className="hidden md:inline bg-[#18181b] px-3 py-1 rounded text-xs border border-[#222] text-white/80">STREAMY CODZIENNIE O 19 NA KICKU</span>
        </div>
      </header>

      {/* Hero Section with headline and promo cards */}
      <section className="w-full relative flex flex-col items-center justify-center min-h-[420px] py-12 px-4 bg-gradient-to-br from-[#1a1010] to-[#18181b] overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none" />
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center z-10 relative">
          <div className="flex items-center gap-2">
          <Image src="/icon.png" alt="Logo" width={250} height={250} className="rounded-xl shadow-md" />
        </div>
        {/* Recommended Casinos - stacked wide cards */}
<section className="w-full mb-12">
  <h2 className="text-3xl font-extrabold mb-10 text-center">Polecane <span className="text-theme-red">kasyna</span></h2>
  <div className="flex flex-col gap-8">
{/* PODMIENIONA SEKCJA BANEROWA */}
<div className="w-full flex flex-col gap-8">

  
{/* Baner – Stake (TOP1) */}
<div className="w-full bg-gradient-to-br from-[#7F1D1D] via-[#B91C1C] to-[#450A0A] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-red-700/60 relative">

  {/* Naklejka TOP1 */}
  <div className="absolute -top-6 -left-6 rotate-[-12deg] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black text-sm font-extrabold px-6 py-2 rounded-md shadow-2xl animate-pulse border border-yellow-200 z-20">
    🏆 TOP1
  </div>

  {/* Glow effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.25),transparent_45%)] pointer-events-none" />

  {/* Logo */}
  <div className="flex-shrink-0 flex flex-col items-center w-40">
    <Image
      src="/stake.png"
      alt="Stake Logo"
      width={200}
      height={200}
      className="mb-2"
    />
  </div>

  {/* Treść */}
  <div className="flex-1 flex flex-col gap-2">
    <div className="bg-[#2A0A0A]/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-white drop-shadow-[0_1px_6px_rgba(255,215,0,0.6)]">
      3,5% DOŻYWOTNIEGO ZWROTU!
    </div>

    <div className="text-sm text-gray-100 mb-2">
      <span className="font-bold">Największe plusy:</span> 
      Z kodem KASJOWIN 3.5% dożywotniego rakebacku, codzienne turnieje z wysokimi nagrodami.
    </div>
  </div>

  {/* CTA */}
  <div className="flex flex-col gap-2 w-40 relative z-10">
    <span className="text-xs text-gray-300 mb-1 text-center">
      Kliknij, aby skopiować.
    </span>

    <button
      className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-black rounded-full px-4 py-2 font-bold text-sm shadow-lg border border-yellow-200 transition-all duration-300 hover:scale-105"
      type="button"
      onClick={() => {
        handleCopySpinbara();
        (window as any).gtag?.('event', 'copy_code', { code: 'KASJOWIN', banner: 'Stake' });
      }}
    >
      {copiedSpinbara ? "Skopiowano" : "KOD: KASJOWIN"}
    </button>

    <a
      href="https://stake.jp/?offer=kasjowin&c=KasjoWin"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <button
        type="button"
        className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-black rounded-full px-4 py-2 font-bold text-sm shadow-lg border border-yellow-200 transition-all duration-300 mt-2 w-full hover:scale-105"
        onClick={() =>
          (window as any).gtag?.('event', 'external_click', {
            link_url: 'https://stake.jp/?offer=kasjowin&c=KasjoWin',
            banner: 'Stake',
          })
        }
      >
        Odbierz bonusy →
      </button>
    </a>
  </div>
</div>
  
{/* Baner – WPT Global */}
<div className="w-full bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-gray-300/60 relative">

  {/* Subtelny glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_45%)] pointer-events-none" />

  {/* Logo */}
  <div className="flex-shrink-0 flex flex-col items-center w-40">
    <Image
      src="/wptglobal.png"
      alt="WPT Global Logo"
      width={200}
      height={200}
      className="mb-2"
    />
  </div>

  {/* Treść */}
  <div className="flex-1 flex flex-col gap-2">
    <div className="bg-white/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-black shadow-sm">
      Wygraj wyjazd na Battle of Malta!
    </div>

    <div className="text-sm text-gray-800 mb-2">
      <span className="font-bold">Największe plusy:</span> 
      Codzienne satelity o wyjazd na Battle of Malta! Start już od $1.10, a co tydzień także w darmowych freerollach!
    </div>
  </div>

  {/* CTA */}
  <div className="flex flex-col gap-2 w-40 relative z-10">
    <span className="text-xs text-gray-500 mb-1 text-center">
      Kliknij, aby skopiować.
    </span>

    <button
      className="bg-gradient-to-r from-gray-800 to-black text-white rounded-full px-4 py-2 font-bold text-sm shadow-md border border-gray-400 transition-all duration-300 hover:scale-105 hover:from-black hover:to-gray-800"
      type="button"
      onClick={() => {
        handleCopySpinbara();
        (window as any).gtag?.('event', 'copy_code', { code: 'KASJO', banner: 'WPT Global' });
      }}
    >
      {copiedSpinbara ? "Skopiowano" : "KOD: KASJO"}
    </button>

    <a
      href="https://tracking.wptpartners.com/visit/?bta=36435&nci=13695"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
    >
      <button
        type="button"
        className="bg-gradient-to-r from-gray-800 to-black text-white rounded-full px-4 py-2 font-bold text-sm shadow-md border border-gray-400 transition-all duration-300 mt-2 w-full hover:scale-105 hover:from-black hover:to-gray-800"
        onClick={() =>
          (window as any).gtag?.('event', 'external_click', {
            link_url: 'https://tracking.wptpartners.com/visit/?bta=36435&nci=13695',
            banner: 'WPT Global',
          })
        }
      >
        Odbierz bonusy →
      </button>
    </a>
  </div>
</div>

 {/* Baner – Slotuna */}
<div className="w-full bg-gradient-to-br from-[#0A1F44] via-[#1E4ED8] to-[#050E24] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-[#1E4ED8]/60 relative">

  <div className="flex-shrink-0 flex flex-col items-center w-40">
    <Image
      src="/slotuna.png"
      alt="Slotuna Logo"
      width={200}
      height={200}
      className="mb-2"
      priority
    />
  </div>

  <div className="flex-1 flex flex-col gap-2">
    <div className="bg-[#020817]/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-white drop-shadow-[0_1px_4px_#1E4ED8cc]">
      100% BONUS POWITALNY + 200FS
    </div>

    <div className="text-sm text-gray-100 mb-2">
      <span className="font-bold">Największe plusy:</span> Z kodem KASJO bonus powitalny 100% do 2250 PLN, 200 darmowych spinów i 1 Bonus Crab.
    </div>

    <div className="text-sm text-white font-bold mt-2 text-center">
      Wypłacone w lutym: 166 095 PLN
    </div>
  </div>

  <div className="flex flex-col gap-2 w-40 relative">
    <a
      href="https://sltna.pclira.com/?mid=349639_2019132"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="bg-gradient-to-r from-[#0A1F44] via-[#1E4ED8] to-[#050E24] cursor-pointer hover:from-[#050E24] hover:to-[#0A1F44] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#1E4ED8cc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300 mt-2 w-full"
        onClick={() =>
          (window as any).gtag?.("event", "external_click", {
            link_url: "https://sltna.pclira.com/?mid=349639_2019132",
            banner: "Slotuna",
          })
        }
      >
        Odbierz bonusy →
      </button>
    </a>
  </div>
</div>

{/* Baner – Lanista */}
<div className="w-full bg-gradient-to-br from-[#0F3D2E] via-[#1F7A5C] to-[#0A2A20] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-[#1F7A5C]/60 relative">

  <div className="absolute -top-3 -left-3 rotate-[-15deg] bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white text-sm font-bold px-6 py-2 rounded-md shadow-lg animate-pulse">
    NEW
  </div>

  <div className="flex-shrink-0 flex flex-col items-center w-40">
    <Image
      src="/lanista.png"
      alt="Lanista Logo"
      width={200}
      height={200}
      className="mb-2"
    />
  </div>

  <div className="flex-1 flex flex-col gap-2">
    <div className="bg-[#081C15]/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-white drop-shadow-[0_1px_4px_#1F7A5Ccc]">
      125% BONUS POWITALNY + 250 FS
    </div>

    <div className="text-sm text-gray-100 mb-2">
      <span className="font-bold">Największe plusy:</span> Bonus powitalny 125% aż do 3500 PLN, 250 darmowych spinów. Dostępny również bonus na sport: 100% do 450 PLN!
    </div>
  </div>

  <div className="flex flex-col gap-2 w-40 relative">
    <a
      href="https://lntsa.pclira.com/?mid=349639_2086020"
      className="group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="bg-gradient-to-r from-[#0F3D2E] via-[#1F7A5C] to-[#0A2A20] cursor-pointer hover:from-[#0A2A20] hover:to-[#0F3D2E] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#1F7A5Ccc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300 w-full"
        onClick={() =>
          (window as any).gtag?.("event", "external_click", {
            link_url: "https://lntsa.pclira.com/?mid=349639_2086020",
            banner: "Lanista",
          })
        }
      >
        Odbierz bonusy →
      </button>
    </a>
  </div>
</div>

  {/* Baner – Sportuna (RED VERSION) */}
<div className="w-full bg-gradient-to-br from-[#3b0a0a] via-[#dc2626] to-[#1a0505] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-[#dc2626]/60 relative">

  <div className="absolute -top-3 -left-3 rotate-[-15deg] bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white text-sm font-bold px-6 py-2 rounded-md shadow-lg animate-pulse">
    NEW
  </div>

  <div className="flex-shrink-0 flex flex-col items-center w-40">
    <Image
      src="/sportuna.png"
      alt="Sportuna Logo"
      width={200}
      height={200}
      className="mb-2"
    />
  </div>

  <div className="flex-1 flex flex-col gap-2">
    <div className="bg-[#1a0505]/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-white drop-shadow-[0_1px_4px_#dc2626cc]">
      PAKIET POWITALNY 225% DO 13500 PLN + 250 FS
    </div>

    <div className="text-sm text-gray-100 mb-2">
      <span className="font-bold">Największe plusy:</span> Największy pakiet powitalny: 225% do 13500 PLN i 250 darmowych spinów! Dostępny również bonus na sport: 100% do 450 PLN.
    </div>
  </div>

  <div className="flex flex-col gap-2 w-40 relative">
    <a
      href="https://sprt.pclira.com/?mid=349639_2086022"
      className="group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="bg-gradient-to-r from-[#3b0a0a] via-[#dc2626] to-[#1a0505] cursor-pointer hover:from-[#1a0505] hover:to-[#3b0a0a] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#dc2626cc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300 w-full"
        onClick={() =>
          (window as any).gtag?.("event", "external_click", {
            link_url: "https://sprt.pclira.com/?mid=349639_2086022",
            banner: "Sportuna",
          })
        }
      >
        Odbierz bonusy →
      </button>
    </a>
  </div>
</div>
  
 


  {/* Baner – Punter */}
<div className="w-full bg-gradient-to-br from-[#4B2E1E] via-[#6B3E26] to-[#2E1A12] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-[#6B3E26]/60 relative">
  
  <div className="flex-shrink-0 flex flex-col items-center w-40">
    <Image
      src="/punter2.png"
      alt="Punter Logo"
      width={200}
      height={200}
      className="mb-2"
    />
  </div>

  <div className="flex-1 flex flex-col gap-2">
    <div className="bg-[#1E120C]/80 rounded-xl px-4 py-2 text-center text-lg font-bold mb-2 text-white drop-shadow-[0_1px_4px_#6B3E26cc]">
      100% BONUS POWITALNY + 200 FS
    </div>

    <div className="text-sm text-gray-100 mb-2">
      <span className="font-bold">Największe plusy:</span> Bonus powitalny 100% aż do 2250 PLN + 200 darmowych spinów!
    </div>
  </div>

  <div className="flex flex-col gap-2 w-40 relative">
    <a
      href="https://mrp.naralvin.com/?mid=357160_2060521"
      className="group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="bg-gradient-to-r from-[#4B2E1E] via-[#6B3E26] to-[#2E1A12] cursor-pointer hover:from-[#2E1A12] hover:to-[#4B2E1E] text-white rounded-full px-4 py-2 font-bold text-sm drop-shadow-[0_1px_4px_#6B3E26cc] border border-white border-opacity-80 border-[1.5px] transition-all duration-300 w-full"
        onClick={() =>
          (window as any).gtag?.("event", "external_click", {
            link_url: "https://mrp.naralvin.com/?mid=357160_2060521",
            banner: "Punter",
          })
        }
      >
        Odbierz bonusy →
      </button>
    </a>
  </div>
</div>


</div>
</div>
</section>

 
          

      {/* Main Content Layout - stacked casino cards and instructions */}
      <div className="w-full flex justify-center">
  <div className="w-full max-w-6xl bg-gradient-to-r from-white via-[#f8f8ff] to-[#e6e6ff] rounded-2xl p-6 flex flex-col items-center gap-6 shadow-lg border border-[#dcdcff]/60">
    
    {/* Środkowy napis */}
    <div className="text-center mb-4">
      <span className="text-gray-800 font-extrabold text-lg sm:text-xl drop-shadow-md">
        Dołącz do naszej społeczności i zgarniaj najlepsze promocje i BLIKI!
      </span>
    </div>

   <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
  {/* Telegram */}
  <div className="flex-1 flex flex-col items-center text-center gap-2">
    <Image src="/telegram-icon.png" alt="Telegram" width={40} height={40} />
    <span className="text-gray-800 font-extrabold text-lg">Telegram</span>
    <a href="https://t.me/+I8K0pYk488wyYjE8" target="_blank" className="mt-2">
      <button className="bg-[#4b0082] text-white font-bold px-4 py-2 rounded-full shadow hover:scale-105 transition-transform">
        Dołącz
      </button>
    </a>
  </div>

  {/* Discord */}
  <div className="flex-1 flex flex-col items-center text-center gap-2">
    <Image src="/discord-icon.png" alt="Discord" width={40} height={40} />
    <span className="text-gray-800 font-extrabold text-lg">Discord</span>
    <a href="https://discord.com/invite/juJd2jQQrs" target="_blank" className="mt-2">
      <button className="bg-[#4b0082] text-white font-bold px-4 py-2 rounded-full shadow hover:scale-105 transition-transform">
        Dołącz
      </button>
    </a>
  </div>

  {/* Kanał Nadawczy */}
  <div className="flex-1 flex flex-col items-center text-center gap-2">
    <Image src="/instagram-icon.png" alt="Kanał Nadawczy" width={40} height={40} />
    <span className="text-gray-800 font-extrabold text-lg">Kanał Nadawczy</span>
    <a href="https://www.instagram.com/donkasjo/" target="_blank" className="mt-2">
      <button className="bg-[#4b0082] text-white font-bold px-4 py-2 rounded-full shadow hover:scale-105 transition-transform">
        Dołącz
      </button>
    </a>
  </div>
  </div>
  </div>
</div>



<div className="w-full flex justify-center mb-2">
            <div className="w-full max-w-6xl">
            </div>
          </div>
          <div className="w-full text-center text-sm text-gray-400 mt-2">kontakt biznesowy: <a href="mailto:wspolpracadonkasjo@gmail.com">wspolpracadonkasjo@gmail.com</a></div>
        </div>
      </section>

        {/* Useful Instructions - row of cards with ribbons */}
        <section className="w-full mb-12">
  <h2 className="text-3xl font-extrabold mb-10 text-center">
    Przydatne <span className="text-theme-red">Instrukcje</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
    <a href="/spinbara-wplata" className="relative bg-gradient-to-br from-[#3a0a16] via-[#a8002f] to-[#1a1010] rounded-2xl p-6 flex flex-col items-start shadow-lg border border-[#a8002f]/60 transition hover:scale-[1.03]" style={{ textDecoration: 'none' }}>
      <span className="absolute -top-3 left-4 bg-theme-red text-white text-xs font-bold px-3 py-1 rounded-full shadow">PORADNIK</span>
      <span className="text-lg font-extrabold mb-2 text-white drop-shadow-[0_1px_4px_#a8002fcc]">Jak wpłacić pieniądze na kasyno Spinbara?</span>
      <span className="text-gray-100 text-base">Praktyczny poradnik krok po kroku dotyczący wpłaty środków na Spinbara.</span>
    </a>
    <a href="/legiano-wplata" className="relative bg-gradient-to-br from-[#3a0a16] via-[#a8002f] to-[#1a1010] rounded-2xl p-6 flex flex-col items-start shadow-lg border border-[#a8002f]/60 transition hover:scale-[1.03]" style={{ textDecoration: 'none' }}>
      <span className="absolute -top-3 left-4 bg-theme-red text-white text-xs font-bold px-3 py-1 rounded-full shadow">PORADNIK</span>
      <span className="text-lg font-extrabold mb-2 text-white drop-shadow-[0_1px_4px_#a8002fcc]">Jak wpłacić pieniądze na kasyno Legiano?</span>
      <span className="text-gray-100 text-base">Praktyczny poradnik krok po kroku dotyczący wpłaty środków na Legiano.</span>
    </a>
  </div>
</section>
      


     {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto text-center text-xs text-gray-500 py-6 border-t border-[#222] mt-8 px-4">
  <div className="flex justify-center gap-4 mb-3">
    <a
      href="https://kick.com/donkasjo"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1eea5c]/10 hover:bg-[#1eea5c]/30 transition cursor-pointer"
      aria-label="Kick"
    >
      <Image src="/kick-logo.svg" alt="Kick" width={20} height={20} className="w-5 h-5" />
    </a>
    <a
      href="https://www.instagram.com/donkasjo/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#a8002f] to-[#ff0055] hover:opacity-80 transition cursor-pointer"
      aria-label="Instagram"
    >
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect width="18" height="18" x="3" y="3" rx="5" stroke="white" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
        <circle cx="17" cy="7" r="1.2" fill="white"/>
      </svg>
    </a>
    <a
      href="https://x.com/don_kasjo"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#222] hover:bg-[#444] transition cursor-pointer"
      aria-label="X"
    >
      <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
        <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47A.75.75 0 1 0 6.47 7.53L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z"/>
      </svg>
    </a>
    <a
      href="https://www.youtube.com/@DonKasjoKrol"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#ff0000]/20 hover:bg-[#ff0000]/40 transition cursor-pointer"
      aria-label="YouTube"
    >
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="12" rx="4" fill="#ff0000"/>
        <polygon points="10,9 16,12 10,15" fill="white"/>
      </svg>
    </a>
  </div>
  <p>
    Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone wyłącznie dla osób w regionach, gdzie hazard online jest legalny.
    <br />
    Użytkownicy są odpowiedzialni za zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.<br />
    &copy; {new Date().getFullYear()} Don Kasjo
  </p>
</footer>
      {/* Neon green utility classes moved to globals.css */}
    </div>
  );
}
