import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import book from '../assets/images/book.png'

const categorias = [
  { nome: 'Artes', icon: '🎨' },
  { nome: 'Culinária', icon: '🍳' },
  { nome: 'Suspense', icon: '🧩' },
  { nome: 'Romance', icon: '🍜' },
  { nome: 'Quadrinhos', icon: '📖' },
  { nome: 'Ficção Científica', icon: '🚀' },
  { nome: 'História', icon: '📜' },
  { nome: 'Poesia', icon: '📘' },
  { nome: 'Terror', icon: '👻' }
];

const livros = [
  { titulo: 'O Mercador de Veneza', imagem: book},
  { titulo: 'A Hora da Estrela', imagem: book },
];

const AcervoCarrossel = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Culinária');

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm text-green-600 font-bold uppercase">Um pouco do nosso acervo</h3>
        <h2 className="text-5xl font-bold">NOSSOS LIVROS</h2>
        <div className="flex mt-12 gap-8">
          {/* Categorias */}
          <div className="flex flex-col gap-4 w-1/4">
            {categorias.map((cat) => (
              <button
                key={cat.nome}
                onClick={() => setCategoriaSelecionada(cat.nome)}
                className={`flex items-center gap-3 px-4 py-2 rounded-full font-medium transition-all ${
                categoriaSelecionada === cat.nome ? 'bg-green-600 text-white' : 'bg-transparent text-black hover:bg-gray-200'}`}
              >
                <span>{cat.icon}</span>
                {cat.nome}
              </button>
            ))}
          </div>
          {/* Carrossel */}
          <div className="w-3/4 h-100">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
            >
              {livros.map((livro, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src={livro.imagem} alt={livro.titulo} className="w-100 h-100 object-cotain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcervoCarrossel;
