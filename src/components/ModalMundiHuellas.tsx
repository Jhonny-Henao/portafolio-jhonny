// ModalMundiHuellas.tsx
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalMundiHuellas: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full md:w-3/5 lg:w-2/3 max-h-[90vh] overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 font-bold text-xl hover:text-red-500 hover:scale-110"
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4 flex justify-center">Proyecto MundiHuellas</h2>
        
        <div className="overflow-y-auto h-[70vh] flex flex-col gap-4 items-center">
          {[
            "inicio.png", 
            "comprar.png", 
            "login.png", 
            "admin.png", 
            "agreProd.png", 
            "gestiProdu.png", 
            "citaPendiAdm.png", 
            "citaApro.png", 
            "perfilUsua.png", 
            "citaPendi.png", 
            "citaAgenda.png", 
            "quienesSomos.png", 
            "footer.png"
          ].map((imageName, index) => (
            <img 
              key={imageName}
              src={`/img/mundi-huellas/${imageName}`} 
              alt={`Imagen ${index + 1}`} 
              className="w-full md:w-3/4 max-w-[800px] object-contain rounded-md" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalMundiHuellas;