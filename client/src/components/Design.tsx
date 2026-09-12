const PHONES = [
  { src: "/colors/preto.webp", rotate: -8, z: 1 },
  { src: "/colors/branco.webp", rotate: -4, z: 2 },
  { src: "/colors/azul.webp", rotate: -1, z: 3 },
  { src: "/colors/bordo.webp", rotate: 3, z: 4 },
];

/**
 * Design section: the four finishes tilted and cascading across a dark
 * studio background, with the headline anchored bottom-left.
 */
export default function Design() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-[#3a3a3a]">
      {/* Cascading phones */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 px-4 sm:gap-4">
        {PHONES.map((phone, i) => (
          <img
            key={phone.src}
            src={phone.src}
            alt=""
            aria-hidden="true"
            className="h-[55vh] max-h-[520px] w-auto drop-shadow-2xl sm:h-[65vh]"
            style={{
              transform: `rotate(${phone.rotate}deg) translateY(${i % 2 === 0 ? "-10px" : "10px"})`,
              zIndex: phone.z,
            }}
          />
        ))}
      </div>

      {/* Readability gradient behind the text */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="container relative flex h-full flex-col justify-end pb-16 sm:pb-20">
        <p className="mb-4 text-xs tracking-[0.2em] text-white/60">
          04 — DESIGN
        </p>

        <h2 className="font-[Archivo] text-5xl font-extrabold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          Feito para ser visto.
          <br />
          <span className="font-[Fraunces] font-medium italic">
            Criado para ser desejado.
          </span>
        </h2>
      </div>
    </section>
  );
}
