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
                            ## Sobre mim

Olá! Sou estudante de Análise e Desenvolvimento de Sistemas pela UNINTER e desenvolvedor em constante evolução, apaixonado por tecnologia e pela criação de soluções que resolvem problemas reais.

Tenho direcionado meus estudos para o desenvolvimento web e backend, utilizando tecnologias como JavaScript, TypeScript, React, Next.js, Node.js e Express, além de bancos de dados, APIs e integração entre sistemas.

Também estou expandindo meus conhecimentos em Cloud Computing, DevOps e Cibersegurança, estudando Linux, Docker, redes e serviços AWS. Tenho interesse em automação de processos e inteligência artificial, buscando integrar diferentes tecnologias para desenvolver aplicações cada vez mais eficientes, seguras e escaláveis.

Acredito que a melhor forma de aprender é colocando o conhecimento em prática. Por isso, desenvolvo projetos pessoais, estudo boas práticas de programação e busco aprimorar minhas habilidades em arquitetura de software, infraestrutura e segurança.

Meu objetivo é evoluir constantemente como profissional de tecnologia, participar de projetos desafiadores e transformar ideias em soluções funcionais que gerem valor para as pessoas e para os negócios.
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