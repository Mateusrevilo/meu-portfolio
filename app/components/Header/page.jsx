

import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-center space-x-8">
                    <Link href="#sobre" className="relative text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium group">
                        Sobre
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="#projetos" className="relative text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium group">
                        Projetos
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="#habilidades" className="relative text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium group">
                        Habilidades
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="#contato" className="relative text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium group">
                        Contato
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;