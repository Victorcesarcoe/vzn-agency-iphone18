import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/const";

/**
 * Hero section: fullscreen looping background video + a single WhatsApp CTA.
 * No headline/copy by design — the video does the talking.
 */
export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Subtle overlay so the floating CTA always stays readable */}
      <div className="absolute inset-0 bg-black/10" />

      {/* WhatsApp CTA — floating bottom center */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-10"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="h-5 w-5 fill-white text-[#25D366]" />
        Fale no WhatsApp
      </a>
    </section>
  );
}
