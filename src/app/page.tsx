import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,189,122,0.4),rgba(255,255,255,0))] dark:bg-zinc-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,189,122,0.2),rgba(255,255,255,0))]"></div>
      <Header />
      <Hero />
    </main>
  );
}
