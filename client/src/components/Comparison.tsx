import {
  BatteryCharging,
  Camera,
  Cpu,
  MemoryStick,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SpecRow {
  label: string;
  icon: typeof Smartphone;
  v17: string[];
  v18: string[];
  changed: boolean;
}

const SPECS: SpecRow[] = [
  {
    label: "Tela",
    icon: Smartphone,
    v17: ["6.9\" OLED", "Dynamic Island"],
    v18: ["6.9\" OLED", "Dynamic Island"],
    changed: false,
  },
  {
    label: "Chip",
    icon: Cpu,
    v17: ["A19 Pro", "com chip Apple N1"],
    v18: ["A20 Pro", "com Apple C2 e chip Apple N2"],
    changed: true,
  },
  {
    label: "Câmeras",
    icon: Camera,
    v17: ["48+48+48 MP", "Câmera frontal de 18MP"],
    v18: ["48+48+48 MP", "Abertura variável", "Câmera frontal de 24MP"],
    changed: true,
  },
  {
    label: "Bateria",
    icon: BatteryCharging,
    v17: ["5.088 mAh"],
    v18: ["5.391 mAh"],
    changed: true,
  },
  {
    label: "Memória",
    icon: MemoryStick,
    v17: ["12GB RAM", "128GB / 512GB / 1TB / 2TB"],
    v18: ["12GB RAM", "256GB / 512GB / 1TB / 2TB"],
    changed: true,
  },
];

export default function Comparison() {
  return (
    <section className="relative overflow-hidden bg-[#150506] py-20 sm:py-28">
      {/* Ambient glow, echoing the reference art */}
      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #7a1f2b 0%, transparent 70%)" }}
      />

      <div className="container relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs tracking-[0.2em] text-[#c98a91]">
            02 — O QUE MUDOU
          </p>

          <h2 className="max-w-xl font-[Archivo] text-5xl font-extrabold leading-[0.95] text-white sm:text-6xl">
            Do 17 Pro Max
            <br />
            <span className="font-[Fraunces] font-medium italic text-[#e7b3ba]">
              ao 18 Pro Max.
            </span>
          </h2>

          {/* Column headers */}
          <div className="mt-12 grid grid-cols-[1fr_1fr_1fr] gap-4 border-b border-white/10 pb-4 sm:grid-cols-[minmax(0,1.1fr)_1fr_1fr]">
            <span className="hidden sm:block" />
            <span className="text-sm font-semibold text-white/50">
              17 Pro Max
            </span>
            <span className="text-sm font-semibold text-white">
              18 Pro Max
            </span>
          </div>

          {/* Spec rows */}
          <div className="divide-y divide-white/10">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-[1fr_1fr_1fr] items-start gap-4 py-6 sm:grid-cols-[minmax(0,1.1fr)_1fr_1fr]"
              >
                <div className="col-span-3 flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-white/40 sm:col-span-1">
                  <spec.icon className="h-4 w-4" strokeWidth={1.75} />
                  {spec.label.toUpperCase()}
                </div>

                <div className="space-y-0.5">
                  {spec.v17.map((line, i) => (
                    <p
                      key={i}
                      className={cn(
                        "text-sm text-white/40",
                        i === 0 && "font-semibold text-white/60"
                      )}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="space-y-0.5">
                  {spec.v18.map((line, i) => (
                    <p
                      key={i}
                      className={cn(
                        "text-sm",
                        i === 0
                          ? "font-semibold text-white"
                          : "text-white/60"
                      )}
                    >
                      {line}
                    </p>
                  ))}
                  {spec.changed && (
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-[#e7838d]">
                      <Sparkles className="h-3 w-3" />
                      Novidade
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product visual */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <img
            src="/comparison-phones.webp"
            alt="iPhone 18 Pro Max na cor bordô, frente e verso"
            className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
