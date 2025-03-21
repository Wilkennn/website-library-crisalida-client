import character from '../assets/images/character.png';

export const Welcome = ({ className, ...props }) => {
  return (
    <section className={`flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-32 bg-white ${className}`}>
      {/* Texto */}
      <div className="max-w-lg text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Descubra novos mundos em nossa biblioteca{' '}
          <span className="text-custom-green">clássica</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Explore nosso acervo de livros e mergulhe em histórias incríveis.
        </p>
        {/* Botão centralizado */}
        <button
          className="mt-8 px-6 py-3 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 mx-auto md:mx-0"
          style={{ backgroundColor: '#588C3C', width: '80%' }}
        >
          Comprar
        </button>
      </div>

      {/* Imagem */}
      <div className="flex-shrink-0">
        <img
          src={character}
          alt="Personagem ilustrado segurando um livro"
          className="w-100 h-80"
        />
      </div>
    </section>
  );
};