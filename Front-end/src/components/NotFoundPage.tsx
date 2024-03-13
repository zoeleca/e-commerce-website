import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-xl font-medium text-gray-600">Page non trouvée</p>
        <p className="mt-4">
          OOPS, la page que vous cherchez n'existe pas encore ou a été déplacée !
        </p>
        <a href="/" className="mt-6 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Retourner à la page d'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;