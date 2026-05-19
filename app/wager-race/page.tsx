
"use client";

export default function WagerRacePage() {
  const rewards = {
    1: "3500 zł",
    2: "1500 zł",
    3: "1000 zł",
    4: "500 zł",
    5: "400 zł",
    6: "300 zł",
    7: "200 zł",
    8: "150 zł",
    9: "100 zł",
    10: "100 zł",
  };

  const data = [
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

  const maskLogin = (login: string) => {
    if (login.length <= 4) return login;

    const start = login.slice(0, 2);
    const end = login.slice(-2);
    const middle = "*".repeat(Math.max(2, login.length - 4));

    return `${start}${middle}${end}`;
  };

  return (
    <div className="min-h-screen bg-[#111112] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-wide">
            🏁 WAGER RACE
          </h1>
          <p className="text-white/60 mt-2">
            TOP 10 zgarnia nagrody • reszta walczy dalej
          </p>
        </div>

        {/* TABLE */}
        <div className="rounded-2xl overflow-hidden border border-red-800 shadow-2xl">
          
          {/* HEADER ROW */}
          <div className="grid grid-cols-3 bg-[#1a1010] text-red-300 font-bold p-4 text-sm uppercase tracking-wider">
            <div>Gracz</div>
            <div>Wager</div>
            <div>Nagroda</div>
          </div>

          {/* ROWS */}
          {data.map(([login, wager], index) => {
            const place = index + 1;
            const isTop10 = place <= 10;

            return (
              <div
                key={login}
                className={`grid grid-cols-3 p-4 text-sm border-b border-white/5 
                ${place === 1 ? "bg-yellow-500/10" : ""}
                ${place === 2 ? "bg-gray-300/10" : ""}
                ${place === 3 ? "bg-orange-500/10" : ""}
                hover:bg-red-950/30 transition`}
              >
                
                {/* LOGIN */}
                <div className="font-semibold tracking-wide">
                  {maskLogin(login)}
                </div>

                {/* WAGER */}
                <div className="text-white/80">
                  ${wager.toLocaleString()}
                </div>

                {/* PRIZE */}
                <div>
                  {isTop10 ? (
                    <span className="text-yellow-400 font-bold">
                      {rewards[place as keyof typeof rewards]}
                    </span>
                  ) : (
                    <span className="text-white/30 italic">
                      w grze o TOP10
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* FOOTER INFO */}
        <div className="text-center mt-6 text-white/40 text-sm">
          Aktualizowane na żywo • walcz o TOP10 🔥
        </div>

      </div>
    </div>
  );
}
