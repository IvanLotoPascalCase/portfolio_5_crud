import React from 'react';

function BackgroundCard() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url('ruta-de-tu-imagen.jpg')` }}>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Mi Botón</button>
    </div>
  );
}

export default BackgroundCard;