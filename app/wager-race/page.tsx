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
    ["Nikson201", 22745.48],
    ["Dieselek20", 18754.18],
    ["Jaro94", 18260.81],
    ["PatrykP1312", 15703.28],
    ["Blazej725", 15600.45],
    ["nattyso", 5950.62],
    ["Stefkaa1993", 4642.59],
    ["Lukix333", 4167.67],
    ["lordszympek", 3962.78],
    ["BenShelton420", 3709.63],
    ["aveNgda", 2831.88],
    ["Olguchaos", 2693.98],
    ["Pawxioo", 2414.51],
    ["dawidziooor19", 2288.29],
    ["Forgyspl", 2188.76],
    ["pysiawercia", 2185.24],
    ["Robson9418", 1984.92],
    ["Mamusia1250", 1953.85],
    ["Kubson0002", 1945.78],
    ["BrooShon", 1843.72],
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
    <div className="min-h-screen bg-[#111112] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-wide">
            🏁 WAGER RACE
          </h1>
          <p className="text-white/50 mt-2">
            TOP 20 leaderboard • LIVE RANKING
          </p>
        </div>

        {/* TABLE */}
        <div className="rounded-2xl overflow-hidden border border-red-900 shadow-xl">

          {/* HEADER ROW */}
          <div className="grid grid-cols-3 bg-[#1a1010] p-4 text-red-300 font-bold text-sm uppercase">
            <div>Gracz</div>
            <div>Wager</div>
            <div>Nagroda</div>
          </div>

          {/* ROWS */}
          {data.map((item, index) => {
            const place = index + 1;
            const name = item[0];
            const wager = item[1];

            return (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 border-b border-white/5 ${rowStyle(place)}`}
              >

                {/* LOGIN */}
                <div className="font-semibold flex items-center gap-2">
                  <span className="text-lg">
                    {medal(place)}
                  </span>
                  {mask(name)}
                </div>

                {/* WAGER */}
                <div className="text-white/80">
                  ${formatMoney(wager)}
                </div>

                {/* PRIZE */}
                <div className={prizeColor(place)}>
                  {place <= 10 ? rewards[place] : "w grze o TOP10"}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
