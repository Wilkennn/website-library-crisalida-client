import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-14 px-8 md:px-24 shadow-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo e Descrição */}
        <div>
          <img src="/logo.png" alt="Crisálida Logo" className="w-32" />
          <p className="text-gray-600 mt-6">
            Nosso trabalho é encher sua barriga com comida deliciosa, com entrega rápida e gratuita.
          </p>
          <div className="flex items-center gap-6 mt-6 text-green-600">
            <FaInstagram size={22} />
            <FaFacebookF size={22} />
            <FaTwitter size={22} />
          </div>
        </div>
        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Sobre</h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li>Quem Somos</li>
            <li>Recursos</li>
            <li>Notícias</li>
            <li>Acervo</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Empresa</h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li>Por que Crisálida?</li>
            <li>Seja Nosso Parceiro</li>
            <li>Perguntas Frequentes</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Suporte</h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li>Conta</li>
            <li>Central de Suporte</li>
            <li>Feedback</li>
            <li>Fale Conosco</li>
            <li>Acessibilidade</li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Entre em Contato</h3>
          <p className="text-gray-600 mt-4">Dúvidas ou sugestões? Adoraríamos ouvir você.</p>
          <div className="mt-6 flex items-center border border-gray-300 rounded-full px-5 py-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            <button className="text-green-600">➜</button>
          </div>
        </div>
      </div>
    </footer>
  );
}