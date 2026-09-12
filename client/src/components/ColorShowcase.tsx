import { useState } from "react";
import { cn } from "@/lib/utils";

interface ColorOption {
  number: string;
  name: string;
  hex: string;
  image: string;
}

const COLORS: ColorOption[] = [
  { number: "01", name: "Preto", hex: "#161616", image: "/colors/preto.webp" },
  { number: "02", name: "Branco", hex: "#E4E5E4", image: "/colors/branco.webp" },
  { number: "03", name: "Azul", hex: "#8CA8C9", image: "/colors/azul.webp" },
  { number: "04", name: "Bordô", hex: "#5E1C29", image: "/colors/bordo.webp" },
];

/**
 * Color showcase: a horizontally scrollable strip of the four finishes,
 * each numbered as part of the choosing sequence. Clicking a card selects
 * it and reveals its name below the strip.
 */
export default function ColorShowcase() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-[#EFEDE7] py-20 sm:py-28" id="produtos">
      <div className="container">
        <p className="mb-4 text-xs tracking-[0.2em] text-neutral-500">
          01 — ESCOLHA O SEU
        </p>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-[Archivo] text-5xl font-extrabold leading-[0.95] text-neutral-900 sm:text-6xl lg:text-7xl">
            Quatro versões.
            <br />
            <span className="font-[Fraunces] font-medium italic">
              Uma nova geração.
            </span>
          </h2>

          <p className="max-w-xs text-sm leading-relaxed text-neutral-500 lg:text-right">
            Deslize para revelar os acabamentos do iPhone 18. Clique em uma
            cor para ver os detalhes.
          </p>
        </div>

        <div className="mt-14 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 sm:[scrollbar-width:none]">
          {COLORS.map((color, i) => (
            <button
              key={color.number}
              onClick={() => setSelected(i)}
              className={cn(
                "group relative w-[70%] shrink-0 snap-start text-left sm:w-[45%] lg:w-[23%]",
                "transition-opacity duration-300",
                selected === i ? "opacity-100" : "opacity-60 hover:opacity-90"
              )}
            >
              <span className="absolute left-4 top-4 text-xs tracking-[0.2em] text-neutral-500">
                {color.number}
              </span>
              <div
                className={cn(
                  "aspect-[3/4] w-full overflow-hidden rounded-2xl border transition-colors duration-300",
                  selected === i
                    ? "border-neutral-900"
                    : "border-transparent"
                )}
                style={{ backgroundColor: "#F7F6F3" }}
              >
                <img
                  src={color.image}
                  alt={`iPhone 18 na cor ${color.name}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span
            className="h-3 w-3 rounded-full border border-black/10"
            style={{ backgroundColor: COLORS[selected].hex }}
          />
          <span className="text-sm font-medium text-neutral-800">
            {COLORS[selected].name}
          </span>
        </div>
      </div>
    </section>
  );
}
