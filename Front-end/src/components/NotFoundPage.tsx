import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-xl font-medium text-gray-600">Page non trouvée</p>
        <p className="mt-4 mb-4">
          OOPS, la page que vous cherchez n'existe pas encore ou a été déplacée !
        </p>
        <a href="/"
          className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-amber-800 bg-opacity-10
       transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white"
        >
          Retourner à la page d'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
