import figure1 from '../assets/images/figure1.png'
import figure2 from '../assets/images/figure2.png'
import figure3 from '../assets/images/figure3.png'

export const Diferenciais = ({ className, ...props }) => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Explore nossos <br /> diferenciais:
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Comodidade */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <img className="w-32 h-32 mx-auto object-contain" src={figure1} alt="logo" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comodidade</h3>
                        <p className="text-gray-600">
                            Receba seus livros com agilidade e comodidade na sua porta.
                        </p>
                    </div>

                    {/* Entrega Nacional */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <img className="w-32 h-32 mx-auto object-contain" src={figure2} alt="logo" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Entrega Nacional</h3>
                        <p className="text-gray-600">
                            Enviamos livros para todo o Brasil e realizamos entrega rápida por moto táxi em Belo Horizonte.
                        </p>
                    </div>

                    {/* Acervo */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <img className="w-32 h-32 mx-auto object-contain" src={figure3} alt="logo" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Acervo</h3>
                        <p className="text-gray-600">
                            Ampla seleção de livros, dos clássicos às obras contemporâneas, para uma experiência de leitura completa.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
