import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Hero />
        {/* Próximas seções da LP entram aqui abaixo da hero */}
      </main>
    </div>
  );
}
