/**
 * Design section: a quiet, text-led moment between the product sections —
 * just the headline over a dark studio-style background, no product photos.
 */
export default function Design() {
  return (
    <section className="relative flex h-[70vh] min-h-[480px] w-full items-end overflow-hidden bg-gradient-to-b from-[#2b2b2b] to-[#131313]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #6a6a6a 0%, transparent 70%)" }}
      />

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
