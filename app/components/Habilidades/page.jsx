import Image from "next/image"

const Habilidades = () => {

    const skills = [
        {
            id: 0,
            nome: 'HTML5',
            img: "html.png"

        },
        {
            id: 1,
            nome: 'CSS 3',
            img: "CSS.png"

        },
        {
             id:2,
            nome: 'JavaScript',
            img: "javascript.png"

        },
        {
             id:3,
            nome: 'React.js',
            img: "reactjs.png"

        },
        {
             id:4,
            nome: 'TypeScript',
            img: "typescript.png"

        },
        {
             id:5,
            nome: 'Tailwind CSS',
            img: "tailwind.png"

        },
        {
             id:6,
            nome: 'Next.js',
            img: "next.png"

        },

        {
             id:7,
            nome: 'Git',
            img: "git.png"

        },
        {
             id:8,
            nome: 'Github',
            img: "github.png"

        },
        {
            id:9,
            nome: 'Vercel',
            img: "vercel.png"

        }
    ]





    return (
        <section id="habilidades" className="py-12">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills.map(itens => {
                    const precisaInversao = itens.nome === "Github" || itens.nome === "Vercel";
                    return (
                        <div key={itens.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center hover:scale-105">
                            <div className="h-[60px] flex items-center justify-center mb-2">
                                <Image
                                    src={`/habilidades/${itens.img}`}
                                    alt={`Ícone de ${itens.nome}`}
                                    width={60}
                                    height={60}
                                    className={`object-contain ${precisaInversao ? 'invert' : ''}`}
                                    unoptimized
                                />
                            </div>
                            <p className="text-gray-700 font-medium">{itens.nome}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}


export default Habilidades