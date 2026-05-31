export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3EEEA]">

      <div className="flex flex-col items-center gap-5">

        {/* LOGO */}
        <img
          src="/Batchiee.png"
          alt="Batchie"
          className="w-40 object-contain animate-pulse"
        />

        {/* SPINNER */}
        <div className="w-6 h-6 border-2 border-[#DCC7F2] border-t-transparent rounded-full animate-spin" />

        {/* TEXT */}
        <p className="text-[#8B7B6B] text-sm tracking-wide">
          Preparing your batch ✨
        </p>

      </div>
    </div>
  );
}