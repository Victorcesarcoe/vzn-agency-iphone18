import ColorShowcase from "@/components/ColorShowcase";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Hero />
        <ColorShowcase />
        {/* Próximas seções da LP entram aqui abaixo */}
      </main>
    </div>
  );
}
