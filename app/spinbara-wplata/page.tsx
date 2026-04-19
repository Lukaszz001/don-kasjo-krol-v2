import React from "react";

export default function SpinbaraWplata() {
  return (
    <div className="min-h-screen relative text-white font-sans flex flex-col items-center justify-center p-8">
      <div className="absolute inset-0 w-full h-full bg-[url('/hero-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-100 pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <a href="/" className="group mb-6">
          <button className="mt-auto bg-gradient-to-r from-[#a8002f] cursor-pointer via-[#ff0033] to-[#ff0055] hover:from-[#ff0033] hover:to-[#a8002f] text-white border border-white border-opacity-80 border-[1.5px] px-4 py-2 rounded-full font-bold text-sm shadow transition-all duration-300 drop-shadow-[0_1px_4px_#a8002fcc] group-hover:scale-105 group-active:scale-95">
            Wróć do strony głównej
          </button>
        </a>
        <div className="max-w-2xl w-full mx-auto bg-[#18181b] rounded-2xl p-8 shadow-lg border border-[#a8002f]/60 mb-8 flex flex-col gap-8">
          <h1 className="text-2xl font-extrabold ">Jak wpłacić pieniądze na kasyno Spinbara?</h1>
          <p className="text-lg text-gray-200 mb-4">
            <span className="font-bold">Zarejestruj się</span> lub <span className="font-bold">zaloguj</span> na swoje konto w kasynie Spinbara.<br/>
            Korzystając z linku do rejestracji (<a href="https://spnbr.monvaki.com/?mid=267041_1760614" className="text-theme-red">Kliknij, aby się zarejestrować.</a>), otrzymasz bonus powitalny do wpłaty.
          </p>
          <img src="logowanie-spinbara.webp" alt="Logowanie Spinbara" className="rounded-2xl mb-6 mx-auto max-w-full" />
          <p className="text-lg text-gray-200 mb-4">
            Następnie kliknij zielony przycisk <span className="font-bold">depozytu</span>.
          </p>
          <img src="depozyt-spinbara.webp" alt="Depozyt Spinbara" className="rounded-2xl mb-6 mx-auto max-w-full"/>
          <p className="text-lg text-gray-200 mb-4">
            Wpisz kwotę (min. 50zł), którą chcesz wpłacić na swoje konto, wybierz preferowaną metodę płatności (np. BLIK, karta, przelew, portfele elektroniczne), a na końcu kliknij <span className="font-bold">zielony przycisk depozytu</span>, aby potwierdzić transakcję.
          </p>
          <img src="platnosc-spinbara.webp" alt="Płatność Spinbara" className="rounded-2xl mb-6 mx-auto max-w-full"/>
          <p className="text-lg text-gray-200 mb-4">Ukończ płatność wpisując kod BLIK albo wg. instrukcji na ekranie. Po chwili pieniądze pojawią się na Twoim koncie. <br/><span className="font-bold">Miłej gry!</span></p>
        </div>
      </div>
    </div>
  );
}
