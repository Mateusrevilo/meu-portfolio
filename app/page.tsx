import Header from "@/app/components/Header/page"
import Sobre from "@/app/components/Sobre/page"
import Projetos from "@/app/components/Projetos/page"
import Habilidades from "@/app/components/Habilidades/page"
import Contato from "@/app/components/Contato/page"
import BemVindo from "@/app/components/BemVindo/page"
import TransitionOptions from "@/app/components/TransitionOptions/page"

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <BemVindo />
      <div className="page-content-reveal">
        <Header />
        <Sobre />
        <main className="container mx-auto px-4 py-8 space-y-16">
          <Projetos />
          <Habilidades />
          <Contato />
          <div className="flex justify-center py-8">
            <TransitionOptions />
          </div>
        </main>
      </div>
    </div>
  );
}
