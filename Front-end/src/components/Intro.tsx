import React from "react";
import BackgroundImage from "../assets/background-img.jpg";
const Intro = () => {
  console.log("This is Intro components");

  return (
    <>
      <img src={BackgroundImage} className="w-full auto" alt="Background" />
      <div className="font-helvetica border-t border-b p-20 flex flex-col">
        <h1 className="text-xl font-bold text-center">
          Bienvenue sur Anciens Meubles pour une Nouvelle Vie
        </h1>
        <br />
        <p className="text-sm text-center">
          Découvrez notre collection unique de meubles de seconde main
          soigneusement sélectionnés pour donner une nouvelle vie à votre espace
          de vie. Chez Anciens Meubles pour une Nouvelle Vie, nous croyons en la
          beauté intemporelle et en la durabilité des meubles anciens, et nous
          sommes fiers de vous offrir une sélection variée qui saura répondre à
          tous les goûts et à tous les styles.
        </p>
      </div>
    </>
  );
};

export default Intro;
