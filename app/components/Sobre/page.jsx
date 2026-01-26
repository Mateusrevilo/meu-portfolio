"use client"

import Image from "next/image";

const Sobre = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="sobre" className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="shrink-0">
                        <Image
                            src="/eu.jpeg"
                            alt="Foto de Mateus"
                            width={200}
                            height={200}
                            className="rounded-full shadow-lg"
                        />
                    </div>
                    <div className="text-center md:text-left max-w-2xl">
                        <h1 className="text-4xl font-serif text-gray-800 mb-6">Olá, eu sou Mateus</h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                             Atualmente, curso Engenharia de Software e recentemente concluí minha formação na EBAC, onde entendi que ser um desenvolvedor Front-End é muito mais do que estética — é sobre engenharia, acessibilidade e cuidado com o usuário.
                            Publiquei 3 projetos que mostram o que aprendi até aqui, mas o que eu mais quero agora é colocar esse conhecimento em prática dentro de um tempo real. Sou focado em aprender, aberto a feedbacks e muito motivado a construir coisas relevantes ao lado das pessoas que combinam esse brilho nos olhos pela tecnologia.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <button
                                onClick={() => scrollToSection('projetos')}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
                            >
                                Ver Projetos
                            </button>
                            <button
                                onClick={() => scrollToSection('contato')}
                                className="border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-6 rounded-md transition-colors duration-200"
                            >
                                Entrar em Contato
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;