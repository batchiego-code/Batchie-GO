"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const loadingTexts = [
  "Gathering squirrels...",
  "Collecting orders...",
  "Packing cute goodies...",
  "Preparing your batch...",
  "Almost there ✨",
];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) =>
        (prev + 1) % loadingTexts.length
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F2ECE7]">

      {/* PINK GLOW */}
      <div
        className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full blur-[90px]"
        style={{
          background: "rgba(216,157,183,0.55)",
        }}
      />

      {/* LILAC GLOW */}
      <div
        className="absolute -top-10 -right-20 w-[380px] h-[380px] rounded-full blur-[90px]"
        style={{
          background: "rgba(184,151,224,0.55)",
        }}
      />

      {/* BOTTOM LEFT */}
      <div
        className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full blur-[90px]"
        style={{
          background: "rgba(184,151,224,0.55)",
        }}
      />

      {/* SPARKLES */}

<div className="absolute top-20 left-[18%] text-[#A97BE0] text-xl animate-sparkle">
  ✦
</div>

<div className="absolute top-40 right-[22%] text-[#D89DB7] text-2xl animate-sparkle"
style={{ animationDelay: "0.5s" }}>
  ✧
</div>

<div className="absolute bottom-40 left-[25%] text-[#A97BE0] text-lg animate-sparkle"
style={{ animationDelay: "1s" }}>
  ✦
</div>

<div className="absolute bottom-32 right-[18%] text-[#D89DB7] text-xl animate-sparkle"
style={{ animationDelay: "1.5s" }}>
  ✧
</div>

<div className="absolute top-[55%] right-[10%] text-[#C5A6E8] text-sm animate-sparkle"
style={{ animationDelay: "2s" }}>
  ✦
</div>

<div
  className="absolute bottom-[18%] right-[8%] text-[#F5E8D8] text-sm animate-sparkle"
  style={{ animationDelay: "1.2s" }}
>
  ✧
</div>

<div
  className="absolute top-[30%] left-[8%] text-[#F5E8D8] text-sm animate-sparkle"
  style={{ animationDelay: "2.5s" }}
>
  ✧
</div>

      {/* BOTTOM RIGHT */}
      <div
        className="absolute -bottom-24 -right-24 w-[320px] h-[320px] rounded-full blur-[90px]"
        style={{
          background: "rgba(216,157,183,0.55)",
        }}
      />

      {/* CONTENT */}
      <div className="relative flex flex-col items-center">

        {/* LOGO */}
        <img
          src="/Batchiee.png"
          alt="Batchie"
          className="w-56 object-contain animate-pulse"
        />

        {/* LOADING CARD */}
        <div
          className="
            mt-6
            px-8
            py-5
            rounded-[24px]
            bg-white/50
            backdrop-blur-sm
            border
            border-[#E5D3DD]
            shadow-[0_10px_30px_rgba(216,157,183,0.15)]
          "
        >

          {/* STATUS */}
          <p className="text-center text-[#6B5E5E] font-medium tracking-wide">
            Preparing your batch 📦
          </p>

          {/* BAR */}
          <div className="mt-4 w-56 h-2 bg-[#EFE5DE] rounded-full overflow-hidden">

            <div
              className="
                h-full
                w-1/2
                rounded-full
                bg-gradient-to-r
                from-[#D89DB7]
                to-[#C7AFE8]
                animate-pulse
              "
            />

          </div>

          {/* CHANGING TEXT */}
          <p className="mt-3 text-center text-xs text-[#9C8F85] italic min-h-[20px] transition-all duration-300">
            {loadingTexts[currentText]}
          </p>

        </div>

      </div>
    </div>
  );
}