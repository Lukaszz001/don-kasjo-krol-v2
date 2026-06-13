"use client";

export default function WagerRacePage() {
  const rewards: Record<number, string> = {
    1: "3500 PLN",
    2: "1500 PLN",
    3: "1000 PLN",
    4: "500 PLN",
    5: "400 PLN",
    6: "300 PLN",
    7: "200 PLN",
    8: "150 PLN",
    9: "100 PLN",
    10: "100 PLN",
  };

const data: [string, number][] = [
  ["Dieselek20", 40282.27],
  ["lordszympek", 16716.62],
  ["Blazej725", 16585.61],
  ["bberni1234", 10681.74],
  ["Degenerat365", 9768.71],
  ["Nikson201", 8641.79],
  ["Maciek703", 6569.56],
  ["Lajgota", 5509.96],
  ["Stefkaa1993", 4870.84],
  ["Lukix333", 4130.39],
  ["Klaaudynka4", 4079.42],
  ["Lysinek82629", 3767.27],
  ["N5ive", 3700.99],
  ["bakajoko", 3550.42],
  ["nattyso", 3443.34],
  ["Robson9418", 2942.81],
  ["mikron1337", 2274.75],
  ["PabloElCzepec", 2063.97],
  ["aveNgda", 1980.85],
  ["pysiawercia", 1882.38],
];

  const mask = (name: string) => {
    if (!name) return "";
    if (name.length <= 4) return name;
    return name.slice(0, 2) + "****" + name.slice(-2);
  };

  const formatMoney = (x: number) => {
    return Number(x).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const medal = (place: number) => {
    if (place === 1) return "🥇";
    if (place === 2) return "🥈";
    if (place === 3) return "🥉";
    return "";
  };

  const rowStyle = (place: number) => {
    if (place === 1) return "bg-yellow-500/10";
    if (place === 2) return "bg-gray-300/10";
    if (place === 3) return "bg-orange-500/10";
    return "hover:bg-red-950/30 transition";
  };

  const prizeColor = (place: number) => {
    if (place <= 3) return "text-yellow-300 font-extrabold";
    if (place <= 10) return "text-yellow-400 font-bold";
    return "text-white/30";
  };

  return (
    <div className="min-h-screen bg-[#111112] text-white px-3 md:px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-wide">
            🏁 STAKE.COM WAGER RACE
          </h1>
          <p className="text-white/50 mt-2">
            CZERWIEC 2026 - AKTUALIZACJA 13/06
          </p>
        </div>

        {/* TABLE */}
        <div className="rounded-2xl overflow-hidden border border-red-900 shadow-xl">

          {/* HEADER ROW */}
          <div className="grid grid-cols-4 bg-[#1a1010] p-3 md:p-4 text-red-300 font-bold text-xs md:text-sm uppercase">
            <div className="w-10 md:w-16">#</div>
            <div className="truncate">Gracz</div>
            <div className="text-right md:text-left">Wager</div>
            <div className="text-right md:text-left">Nagroda</div>
          </div>

          {/* ROWS */}
          {data.map((item, index) => {
            const place = index + 1;
            const name = item[0];
            const wager = item[1];

            return (
              <div
                key={index}
                className={`grid grid-cols-4 items-center p-3 md:p-4 border-b border-white/5 ${rowStyle(place)}`}
              >

                {/* PLACE */}
                <div className="w-10 md:w-16 text-white/40 font-bold">
                  {place}
                </div>

                {/* LOGIN */}
                <div className="font-semibold flex items-center gap-1 md:gap-2 truncate">
                  <span>{medal(place)}</span>
                  <span className="truncate">{mask(name)}</span>
                </div>

                {/* WAGER */}
                <div className="text-white/80 text-right md:text-left text-sm md:text-base">
                  ${formatMoney(wager)}
                </div>

                {/* PRIZE */}
                <div className={`text-right md:text-left text-sm md:text-base ${prizeColor(place)}`}>
                  {place <= 10 ? rewards[place] : ""}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
