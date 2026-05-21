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
  ["Nikson201", 31068.10],
  ["Dieselek20", 28185.69],
  ["Jaro94", 22281.51],
  ["Blazej725", 19020.60],
  ["PatrykP1312", 15703.28],
  ["nattyso", 6529.49],
  ["Stefkaa1993", 5432.61],
  ["lordszympek", 4248.85],
  ["Lukix333", 4167.67],
  ["BenShelton420", 3709.63],
  ["aveNgda", 3205.14],
  ["Olguchaos", 2693.98],
  ["Pawxioo", 2629.05],
  ["pysiawercia", 2556.33],
  ["dawidziooor19", 2288.29],
  ["Forgyspl", 2188.76],
  ["osatokrol", 2088.56],
  ["Robson9418", 2052.82],
  ["Kubson0002", 1993.25],
  ["Klaaudynka4", 1967.57],
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
            MAJ 2026 (Aktualizacja: 21/05)
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
