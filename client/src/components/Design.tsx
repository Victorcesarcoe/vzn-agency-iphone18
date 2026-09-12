/**
 * Design section: the four finishes floating over a dark background,
 * dimmed to let the headline read clearly on top.
 */
export default function Design() {
  return (
    <section className="relative flex h-[85vh] min-h-[600px] w-full items-end overflow-hidden bg-[#1a1a1a]">
      <img
        src="/design-phones.webp"
        alt="iPhone 18 nas quatro cores disponíveis"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      {/* Readability gradient behind the text */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="container relative pb-16 sm:pb-20">
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
