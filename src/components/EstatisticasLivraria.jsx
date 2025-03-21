import React from 'react';

const EstatisticasLivraria = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        
        <hr className="border-t-1 border-gray-800 my-8" />
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          <span className="text-green-600">CRISÁLIDA</span> LIVRARIA
        </h2>
        <h3 className="text-2xl text-gray-700 font-semibold mb-8">EM NÚMEROS 🚀</h3>

        <div className="grid grid-cols-3 gap-12 p-12 text-center">
          <div>
            <p className="text-5xl font-bold">20</p>
            <p className="text-xl text-gray-600">ANOS DE HISTÓRIA</p>
          </div>
          <div>
            <p className="text-5xl font-bold">70250</p>
            <p className="text-xl text-gray-600">ITENS À VENDA</p>
          </div>
          <div>
            <p className="text-5xl font-bold">20000</p>
            <p className="text-xl text-gray-600">ITENS VENDIDOS</p>
          </div>
        </div>

        <hr className="border-t-1 border-gray-800 my-8" />
      </div>
    </section>
  );
};

export default EstatisticasLivraria;
