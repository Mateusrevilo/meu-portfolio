"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'



const Projetos = () => {

    const projeto = [
        {
            id: 0,
            nome: "Lista de tarefas",
            descricao: "Uma aplicação moderna de lista de tarefas (Todo List) construída com Next.js 15, React, TypeScript e CSS Modules. Este projeto demonstra as melhores práticas de desenvolvimento web moderno, incluindo testes automatizados, linting, formatação de código e CI/CD.",
            link: "https://toodo-list-test.vercel.app/",
            tecnologias: ["next.png","reactjs.png","typescript.png","CSS.png"]
            
        },

        {
            id: 1,
            nome: "Sport News",
            descricao: "Um portal moderno de notícias esportivas construído com Next.js 14, TypeScript e Tailwind CSS, oferecendo uma experiência responsiva e otimizada para todos os dispositivos.",
            link: "https://sport-news-2vq9.vercel.app/",
            tecnologias:  ["next.png","reactjs.png","typescript.png","tailwind.png"]
        },

        {
            id: 2,
            nome: "Juga Sistemas",
            descricao: "O ERP Lite é um sistema completo de gestão desenvolvido especificamente para depósitos de bebidas, oferecendo controle total sobre vendas, estoque, entregas, financeiros e relatórios. O sistema foi criado com foco na simplicidade e eficiência, proporcionando uma experiência intuitiva para todos os tipos de usuários.",
            link: "https://www.jugasistemas.com.br/",
            tecnologias:  ["next.png","reactjs.png","typescript.png", "vercel.png", "tailwind.png"]

        }
    ]

    const router = useRouter()

  

    return (
        <section id="projetos" className="py-12">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projeto.map(list => (
                    <div key={list.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
                        <div className="grow mb-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{list.nome}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{list.descricao}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                             {list.tecnologias.map((tec, idx) => (
                               <Image
                                 key={idx}
                                 src={`/habilidades/${tec}`}
                                 width={30}
                                 height={30}
                                 alt={`Tecnologia ${tec} do projeto ${list.nome}`}
                                 className="rounded"
                               />
                             ))}
                        </div>
                        <button
                            onClick={() => router.push(list.link)}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                        >
                            Visitar
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projetos