import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-700 to-sky-900 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MOST TRUSTED VENDOR
          </h1>
          <p className="text-xl md:text-2xl text-yellow-300">
            CHEAPEST PRICES. PHENOMENAL SELECTION
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image src="/Product1.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
