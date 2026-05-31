"use client";

import { useState, useEffect } from "react";

export default function BatchieCalculator() {
  // =========================
  // INPUT
  // =========================
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [people, setPeople] = useState("1");
  const [currency, setCurrency] = useState("KRW");

  // =========================
  // RESULT
  // =========================
  const [basePrice, setBasePrice] = useState(0);
  const [feePerPerson, setFeePerPerson] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const [displayValue, setDisplayValue] = useState(0);

  // =========================
  // RATE
  // =========================
  const rate =
    currency === "KRW"
      ? 120000
      : 3000;

  // =========================
  // FIXED FEES
  // =========================

  // fee utama transaksi
  const MAIN_FEE = 20000;

  // fee tambahan per orang
  const EXTRA_PERSON_FEE = 3000;

  // =========================
  // ROUNDING
  // =========================
  const roundPrice = (
    value: number
  ) => {
    return (
      Math.ceil(value / 500) *
      500
    );
  };

  // =========================
  // CALCULATE
  // =========================
  const handleCalculate = () => {
    const item =
      Number(price);

    const ship =
      Number(shipping);

    const split =
      Number(people);

    // =========================
    // ITEM → IDR
    // =========================
    const convertedItem =
      item * rate;

    // =========================
    // SHIPPING → IDR
    // =========================
    const convertedShipping =
      ship * rate;

    // =========================
    // TOTAL FEE
    // shipping + fee utama
    // =========================
    const totalFee =
      convertedShipping +
      MAIN_FEE;

    // =========================
    // SPLIT FEE
    // =========================
    const rawFeePerPerson =
      totalFee / split;

    // =========================
    // TAMBAH FEE PER PERSON
    // =========================
    const feeWithExtra =
      rawFeePerPerson +
      EXTRA_PERSON_FEE;

    // =========================
    // ROUNDING
    // =========================
    const roundedFee =
      roundPrice(
        feeWithExtra
      );

    // =========================
    // FINAL TOTAL
    // =========================
    const total =
      convertedItem +
      roundedFee;

    // =========================
    // SAVE
    // =========================
    setBasePrice(
      convertedItem
    );

    setFeePerPerson(
      roundedFee
    );

    setFinalTotal(total);
  };

  // =========================
  // RESET
  // =========================
  const handleReset = () => {
    setPrice("");
    setShipping("");
    setPeople("1");

    setBasePrice(0);
    setFeePerPerson(0);
    setFinalTotal(0);

    setDisplayValue(0);
  };

  // =========================
  // ANIMATION
  // =========================
  useEffect(() => {
    if (finalTotal > 0) {
      let start = 0;

      const end =
        finalTotal;

      const duration = 500;

      const increment =
        end /
        (duration / 16);

      const timer =
        setInterval(() => {
          start += increment;

          if (
            start >= end
          ) {
            setDisplayValue(
              end
            );

            clearInterval(
              timer
            );
          } else {
            setDisplayValue(
              start
            );
          }
        }, 16);

      return () =>
        clearInterval(
          timer
        );
    }
  }, [finalTotal]);

  const isCalculated =
    finalTotal > 0;

    return (
  <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8DDD2] via-[#E2D5C9] to-[#D8CABE] p-6 overflow-hidden">
  
  <div
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage:
      "radial-gradient(#6B5E5E 1px, transparent 1px)",
    backgroundSize: "18px 18px",
  }}
  />

    {/* PINK GLOW */}
    <div
      className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full blur-[120px]"
        style={{
          background: "rgba(216,157,183,0.55)",
      }}
    />

    {/* LILAC GLOW */}
    <div
      className="absolute -top-10 -right-20 w-[380px] h-[380px] rounded-full blur-[140px]"
        style={{
          background: "rgba(184,151,224,0.55)",
        }}
    />

    {/* BOTTOM GLOW */}
    <div
      className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[450px] h-[250px] rounded-full blur-[140px]"
        style={{
          background: "rgba(244,199,215,0.35)",
        }}
    />

    {/* BOTTOM LEFT LILAC */}

<div
  className="
    absolute
    -bottom-24
    -left-24
    w-[320px]
    h-[320px]
    rounded-full
    blur-[120px]
  "
  style={{
    background: "rgba(184,151,224,0.45)",
  }}
/>

{/* BOTTOM RIGHT PINK */}

<div
  className="
    absolute
    -bottom-24
    -right-24
    w-[320px]
    h-[320px]
    rounded-full
    blur-[120px]
  "
  style={{
    background: "rgba(216,157,183,0.45)",
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
  className="absolute top-[30%] left-[8%] text-[#F5E8D8] text-sm animate-sparkle"
  style={{ animationDelay: "2.5s" }}
>
  ✧
</div>

<div
  className="absolute bottom-[18%] right-[8%] text-[#F5E8D8] text-sm animate-sparkle"
  style={{ animationDelay: "1.2s" }}
>
  ✧
</div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#DCC7F2]/10 blur-3xl" />

    <div className="flex flex-col items-center">

      {/* MAIN CARD */}
      <div className="w-[400px] rounded-[28px] p-6 bg-[#FFFDF9]/80 backdrop-blur-md border border-[#E8DCD0] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

        {/* HEADER */}
        <div className="text-center mb-5">

          <div className="flex justify-center mb-3">
            <img
              src="/Batchiee.png"
              alt="Batchie Logo"
              className="w-52 object-contain transition hover:scale-105"
            />
          </div>

          <p className="text-[11px] text-[#9C8F85]">
            Secure Your Batch With US ✨
          </p>
        </div>

        {/* CURRENCY */}
        <div className="flex border border-[#E0D4C8] rounded-xl overflow-hidden mb-4 shadow-sm">

          {["KRW", "CNY"].map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`flex-1 py-2 text-xs font-medium transition-all ${
                currency === c
                  ? "bg-[#D8BEEB] text-[#5C4B3B] shadow-inner"
                  : "bg-[#F3ECE6] text-[#7B6A58]"
              }`}
            >
              {c}
            </button>
          ))}

        </div>

        {/* ITEM */}
        <Box>
          <Label>Item Price</Label>

          <Input
            value={price}
            onChange={setPrice}
          />

          <Helper>
            {currency === "KRW"
              ? "Example: 0.5"
              : "Example: 10"}
          </Helper>
        </Box>

        {/* SHIPPING */}
        <Box>
          <Label>Shipping Fee</Label>

          <Input
            value={shipping}
            onChange={setShipping}
          />
        </Box>

        {/* SPLIT */}
        <Box>
          <Label>Split People</Label>

          <Input
            value={people}
            onChange={setPeople}
          />
        </Box>

        {/* RESULT */}
        {finalTotal > 0 && (
          <div className="mt-5 rounded-2xl p-5 bg-gradient-to-br from-[#6B5E5E] to-[#4B3F3F] border border-[#7C6D6D] shadow-[inset_0_0_20px_rgba(0,0,0,0.25)]">

            {/* TOP */}
            <div className="flex justify-between items-center mb-3">

              <p className="text-[10px] text-[#F3E7DA] tracking-widest">
                BATCHIE SYSTEM
              </p>

              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[#F4C7D7]" />
                <span className="w-2 h-2 rounded-full bg-[#E8DCCF]" />
                <span className="w-2 h-2 rounded-full bg-[#D6C0F0]" />
              </div>

            </div>

            {/* BASE */}
            <div className="flex justify-between text-sm text-[#EADFD5]/80 mb-1">

              <span>BASE PRICE</span>

              <span>
                Rp {basePrice.toLocaleString()}
              </span>

            </div>

            {/* FEE */}
            <div className="flex justify-between text-sm text-[#EADFD5]/80 mb-3">

              <span>FEE / PERSON</span>

              <span>
                Rp {feePerPerson.toLocaleString()}
              </span>

            </div>

            {/* TOTAL */}
            <div className="flex justify-between items-center border-t border-[#7C6D6D] pt-3">

              <span className="text-lg text-[#EADFD5] font-semibold tracking-wide">
                TOTAL
              </span>

              <span className="text-2xl font-bold text-[#E8C7F1] drop-shadow-[0_0_12px_rgba(244,199,215,0.35)]">

                Rp{" "}
                {Math.floor(
                  displayValue
                ).toLocaleString()}

              </span>

            </div>

            <p className="text-[12px] text-[#F1E5DC] mt-3 text-right">

              All Fees Included ✨

              <span className="block italic text-[10px] mt-1 text-[#D8C7B8]">

                (Local Shipping, Warehouse, etc.)

              </span>

            </p>

          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={
            isCalculated
              ? handleReset
              : handleCalculate
          }
          className="w-full mt-5 py-2 rounded-xl bg-[#F8C8DC] text-[#5C4B3B] text-sm font-medium shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
        >

          {isCalculated
            ? "Reset"
            : "Calculate"}

        </button>

      </div>

    
      {/* COPYRIGHT TAG */}

      {/* SHIPPING LABEL */}

<div className="mt-6 relative">

  {/* LABEL */}
  <div
  className="
    absolute
    left-1/2
    -translate-x-1/2
    -top-3
    w-20
    h-7
    bg-[#FFF8C9]/80
    rounded-sm
    rotate-[8deg]
    z-20
    shadow-sm
  "
/>

  <div
  className="
    relative
    bg-gradient-to-br from-[#F3D6E5] to-[#E8BFD1]
    border-2
    border-[#D89DB7]
    rounded-[28px]
    px-6
    py-5
    shadow-[0_8px_25px_rgba(216,157,183,0.25)]
    transition-all
    rotate-[-1.5deg]
    hover:-translate-y-1
    hover:rotate-0
    hover:shadow-xl
    w-[280px]
  "
>

    {/* HEADER */}
    <p className="text-center text-[10px] tracking-[0.3em] font-bold text-[#5C4B3B]">
      BATCHIE EXPRESS 🐿️
    </p>

    <div className="h-px bg-[#D89DB7]/50 my-3" />

    {/* TRACKING */}
    <div className="flex justify-between text-xs">

      <span className="text-[#6B5E5E]">
        TRACKING
      </span>

      <span className="font-medium text-[#5C4B3B]">
        #BT2026
      </span>

    </div>

    {/* BARCODE */}
    <div className="flex justify-center gap-[2px] mt-4">

      <div className="w-[2px] h-8 bg-[#5C4B3B]" />
      <div className="w-[5px] h-8 bg-[#5C4B3B]" />
      <div className="w-[2px] h-8 bg-[#5C4B3B]" />
      <div className="w-[7px] h-8 bg-[#5C4B3B]" />
      <div className="w-[2px] h-8 bg-[#5C4B3B]" />
      <div className="w-[4px] h-8 bg-[#5C4B3B]" />
      <div className="w-[6px] h-8 bg-[#5C4B3B]" />
      <div className="w-[2px] h-8 bg-[#5C4B3B]" />
      <div className="w-[5px] h-8 bg-[#5C4B3B]" />
      <div className="w-[3px] h-8 bg-[#5C4B3B]" />

    </div>

    <p className="text-center text-[9px] tracking-[0.25em] text-[#6B5E5E] mt-2">
      BT-GO-2026
    </p>

    <div className="h-px bg-[#D89DB7]/50 my-3" />

    {/* BRAND */}
    <p className="text-center text-sm font-semibold text-[#5C4B3B]">
      ✨ Your Batch Bestie ✨
    </p>

  </div>

</div>

    </div>

  </div>
);
}

// =========================
// COMPONENTS
// =========================

function Box({
  children,
}: any) {
  return (
    <div className="mb-3 border border-[#E0D4C8] rounded-xl p-3 bg-[#FFFDF9] shadow-sm">
      {children}
    </div>
  );
}

function Label({
  children,
}: any) {
  return (
    <p className="text-[11px] text-[#9C8F85] mb-1">
      {children}
    </p>
  );
}

function Helper({
  children,
}: any) {
  return (
    <p className="text-[10px] text-[#B0A49A] mt-1">
      {children}
    </p>
  );
}

function Input({
  value,
  onChange,
}: any) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value
        )
      }
      className="w-full text-sm bg-transparent outline-none text-[#5C4B3B]"
    />
  );
}