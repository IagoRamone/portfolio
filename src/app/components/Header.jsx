"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-10 py-5 text-white">
      <div className="group ml-40 text-4xl font-bold">
        <span className="text-white group-hover:text-purple-500">
          {['I', 'a', 'g', 'o', ' ', 'R', 'a', 'm', 'o', 'n', 'e'].map((letter, index) => (
            <span
              key={index}
              className="inline-block opacity-100 transition-all duration-500 group-hover:text-purple-500"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>

      {/* Navegação */}
      <nav className="mr-20 flex space-x-6">
        <Link href="#projetos" className="hover:text-gray-400">
          Projetos
        </Link>
        <Link href="#sobre" className="hover:text-gray-400">
          Sobre mim
        </Link>
        <Link href="#contato" className="hover:text-gray-400">
          Contato
        </Link>
      </nav>
    </header>
  );
}
