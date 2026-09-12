const GALLERY = [
  { src: "/duo/duo-1.webp", alt: "iPhone Duo aberto e fechado, em preto e branco" },
  { src: "/duo/duo-2.webp", alt: "iPhone Duo aberto, segurado com as duas mãos" },
  { src: "/duo/duo-3.webp", alt: "iPhone Duo dobrando, vista da dobradiça e câmeras" },
  { src: "/duo/duo-4.webp", alt: "iPhone Duo em destaque num ambiente futurista" },
];

/**
 * iPhone Duo section: a tall product video up top, with an
 * infinitely looping horizontal gallery of square photos below it.
 */
export default function IphoneDuo() {
  // Duplicate the set so the strip can loop seamlessly.
  const loop = [...GALLERY, ...GALLERY];

  return (
    <section className="overflow-hidden bg-[#F4F3EF] py-20 sm:py-28">
      <div className="container">
        <p className="mb-4 text-xs tracking-[0.2em] text-neutral-500">
          03 — IPHONE DUO
        </p>

        <h2 className="max-w-xl font-[Archivo] text-5xl font-extrabold leading-[0.95] text-neutral-900 sm:text-6xl">
          Duas telas.
          <br />
          <span className="font-[Fraunces] font-medium italic">
            Um único iPhone.
          </span>
        </h2>

        <div className="mt-14 flex justify-center">
          <video
            className="h-[70vh] max-h-[720px] w-auto rounded-3xl object-cover shadow-2xl"
            src="/iphone-duo-video.mp4"
            poster="/iphone-duo-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Looping gallery strip — bleeds full width, scrolls on its own */}
      <div className="group relative mt-14 w-full">
        <div className="animate-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="aspect-square w-[70vw] shrink-0 overflow-hidden rounded-2xl sm:w-[320px]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
