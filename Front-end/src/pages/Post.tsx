import React, { useState } from "react";
import PostForm from "../components/PostForm";
import { FormValues } from "../components/PostForm";

// on initialise les valeurs du formulaire
const Post = () => {
  const [values, setValues] = useState<FormValues>({
    product_name: "",
    product_category: "",
    sub_category: "",
    product_materials: "",
    product_color: "",
    product_description: "",
    price: 0,
    product_state: "en attente",
  });

  // on crée un gestionnaire d'événement
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // on extrait name et value de e.target
    const { name, value } = e.target; // élément de form dont la valeur a été modifiée
    // on met à jour l'état "values"
    setValues({
      // on copie toutes les propriétés existantes de l'objet values dans un nouvel objet
      ...values,
      // on met à jour la propriété itemName de l'état values avec la nouvelle valeur entrée par l'utilisateur
      [name]: value,
    });
  };

  // actions lors de la soumission du form
  const handleSubmit = async (e: React.FormEvent) => {
    // on empêche le rechargement auto
    e.preventDefault();
    // Appel à l'API pour ajouter l'annonce
    try {
      const response = await fetch('http://localhost:3000/post', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
    }
  };

  return (
    <>
      <div className="font-helvetica border-t border-b p-20 flex flex-col">
        <h1 className="text-xl font-bold text-center">
          Publier une annonce pour vendre un meuble
        </h1>
        <br />
        <p className="text-sm text-center">
          Chez Anciens Meubles pour une Nouvelle Vie, nous croyons en la beauté
          intemporelle et en la durabilité des meubles anciens, et nous sommes
          fiers de vous proposer de donner une seconde vie à vos meubles !
        </p>
      </div>

      <PostForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Post;
