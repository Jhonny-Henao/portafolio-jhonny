// ModalMundiHuellas.tsx
import React from 'react';

type ModalProps = {
  isOpenCrm: boolean;
  onCloseCrm: () => void;
};

const ModalMundiHuellas: React.FC<ModalProps> = ({ isOpenCrm, onCloseCrm }) => {
  if (!isOpenCrm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full md:w-3/5 lg:w-2/3 max-h-[90vh] overflow-hidden relative">
        <button
          onClick={onCloseCrm}
          className="absolute top-4 right-4 text-gray-600 font-bold text-xl hover:text-red-500 hover:scale-110"
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4 flex justify-center">Proyecto CRM Cobro</h2>
        
        <div className="overflow-y-auto h-[70vh] flex flex-col gap-4 items-center">
          {[
            "login.png", 
            "admin.png", 
            "admin-esta.png", 
            "admin-menu.png", 
            "admin-usuarios.png", 
            "olvido-contra.png", 
            "olvido-exitoso.png", 
            "admin-recuperar.png", 
            "admin-form.png", 
            "cambio-exitoso.png", 
            "telefono.png", 
            "leader.png",
            "leader-esta.png",
            "ayudas.png",
            "ayudas-2.png",
            "asesor.png",
            "asesor-tabla.png",
            "asesor-trabajo.png",
          ].map((imageName, index) => (
            <img 
              key={imageName}
              src={`/img/crm-cobro/${imageName}`} 
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