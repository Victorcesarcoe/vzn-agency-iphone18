import ColorShowcase from "@/components/ColorShowcase";
import Comparison from "@/components/Comparison";
import Design from "@/components/Design";
import Hero from "@/components/Hero";
import IphoneDuo from "@/components/IphoneDuo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Hero />
        <ColorShowcase />
        <Comparison />
        <IphoneDuo />
        <Design />
        {/* Próximas seções da LP entram aqui abaixo */}
      </main>
    </div>
  );
}
