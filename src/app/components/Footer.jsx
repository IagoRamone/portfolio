import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="flex flex-col items-center">
        {/* Foto */}
        <div className="mb-5">
          <Image 
            src="/footer/foto_principal.jpg" 
            alt="Foto principal" 
            width={150} 
            height={150} 
            className="rounded-full"
          />
        </div>

        {/* Nome com efeito de texto */}
        <div className="text-gradient mb-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-center text-3xl font-bold text-transparent">
          Iago Ramone
        </div>

        {/* Descrição do cargo */}
        <div className="mb-5 text-lg text-white">
          Desenvolvedor Full-Stack
        </div>

        {/* Ícones sociais */}
        <div className="mb-5 flex space-x-6">
          <a 
            href="https://www.linkedin.com/in/iagoramone/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://wa.me/+5521972992737?text=Olá,%20gostaria%20de%20mais%20informações!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-500"
          >
            <FaWhatsapp size={24} />
          </a>
          <a 
            href="https://github.com/IagoRamone" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-500"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
