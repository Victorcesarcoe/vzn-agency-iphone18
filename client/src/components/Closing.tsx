import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/const";

/**
 * Closing section: the final call-to-action before the footer.
 * Dark, quiet, and focused on the two things a visitor can still do.
 */
export default function Closing() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#0b0b0c] py-28 sm:py-36">
      {/* Ambient radial glow behind the copy */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #1f1f22 0%, transparent 70%)" }}
      />

      <div className="container relative flex flex-col items-center text-center">
        <p className="mb-6 text-xs tracking-[0.2em] text-white/50">
          VZN AGENCY · 2026
        </p>

        <h2 className="max-w-3xl font-[Archivo] text-5xl font-extrabold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
          Seu próximo
          <br />
          <span className="font-[Fraunces] font-medium italic">
            aparelho está aqui.
          </span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Ver produtos
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
