import { FaStar } from "react-icons/fa";
import feedback from "../assets/images/feedback.png";
import perfil from "../assets/images/perfil-logo.jpg";

export default function Feedback() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 bg-white  rounded-2xl shadow-lg">
      <div className="flex justify-center">
        <img
          src={feedback}
          alt="Ilustração de cliente satisfeito"
          className="w-full max-w-[500px] h-auto md:max-w-[600px]"
        />
      </div>
      <div className="flex-1">
        <p className="text-green-600 font-semibold uppercase text-4xl">Sobre nós</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          O que nossos clientes dizem ?
        </h2>
        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
          Desde o primeiro pedido na Crisálida, fiquei impressionado com a qualidade do atendimento e a rapidez da entrega. 
          Os pratos são saborosos e bem preparados, e o serviço sempre supera minhas expectativas. 
          Recomendo a todos que buscam uma experiência gastronômica excepcional!
        </p>
        <div className="flex items-center mt-6">
          <img
            src={perfil}
            alt="Foto de Maria Campos"
            className="w-12 h-12 rounded-full mr-4 object-fit"
          />
          <div>
            <p className="font-semibold text-gray-900 text-lg">Maria Campos</p>
            <p className="text-gray-500 text-sm">Cliente Satisfeito</p>
          </div>
        </div>
        <div className="flex items-center mt-3 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={24} className="mr-1" />
          ))}
          <span className="text-gray-800 text-lg ml-2">5,0</span>
        </div>
      </div>
    </div>
  );
}
