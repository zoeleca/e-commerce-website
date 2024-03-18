# Ada Love Chaise (school project)
Le projet consiste, pour deux équipes back-end et front-end, à créer une plateforme de vente de meubles d'occasion.

## Bien démarrer

Ces instructions vous permettront d'obtenir une copie du projet en fonctionnement sur votre machine locale pour le développement et les tests. 

Consultez la section déploiement pour des notes sur comment déployer le projet sur un système en production.

### Pré-requis

Ce dont vous avez besoin pour installer le logiciel :

- un IDE
- un shell
- Node.js (vérifier qu'il est installé en tapant $`node -v`)
- npm (verifier qu'il est installé en tapant $`npm -v` )
- un navigateur


### Installation / lancement

#### - Back end

Se placer dans le dossier `/Back-end` :

- Installer/mettre à jour les dépendances de Node : `npm install`
- Lancer `npm run dev` (si vous êtes en environnement de dev)
  OU
- Lancer `npm run start` (si vous êtes en environnement de production)

#### - DataBase

- Installer [PostgreSQL](https://www.postgresql.org/)
- Installer [pgAdmin4](https://www.pgadmin.org/) (minimum)
- Suivre les instructions contenues dans le script :   `tables_db_lovechaise.sql`

```
POUR UTILISER CE SCRIPT .SQL :
1. Télécharger PostgreSQL (au moins pgAdmin 4)
2. Executer le fichier d'installation et enregistrer le mot de passe "postgres" pour l'user par default "postgres"
3. Ouvrir pgAdmin
4. Ouvrir le dossier "Server"
5. Insérer le mot de passe "postgres" dans le prompt
6. Cliquer droit sur "Database" > Create > Database
7. Nommer la db "Lovechaise" + save
8. Cliquer droit sur la DB Lovechaise
9. Cliquer sur "Query Tool"
10. Cliquer sur le bouton "open file" (icône "dossier")
11. Sélectionner et importer le fichier tables_db_lovechaise.sql
12. Cliquer sur le bouton "Execute Script" (icône "play")
13. Si besoin de tester des queries : repartir de l'étape 8 
```

#### - Front end
Se placer dans le dossier `/Front-end` :

- Installer/mettre à jour les dépendances de Node : `npm install`
- Lancer `npm run dev` (si vous êtes en environnement de dev)
  OU
- Lancer `npm run start` (si vous êtes en environnement de production)

## Conçu avec

* [Express](https://expressjs.com/) pour Node.js
* [PostgreSQL](https://www.postgresql.org/)
* [pgAdmin](https://www.pgadmin.org/)
* [Postman](https://www.postman.com/)
* [React](https://react.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [GitHub](https://github.com/)

## Repository (origine)

[Ada tech School GitHub](https://github.com/adatechschool/projet-plateforme-de-vente-de-meubles-adalovechaises)

## Auteur·es

* **Clément Coadou**
* **Guillaume Depecker**
* **Marion Ochem**
* **Morgane Le MoaL** - [GitHub](https://github.com/M0nline) - [LinkedIn](https://www.linkedin.com/in/morganelemoal/)
* **Philippe Deslous-Paoli**
* **Tijana Laporte-Mitrovic** - [GitHub](https://github.com/Tiki102) - [LinkedIn](https://www.linkedin.com/in/tijana-laporte-mitrovic-b13859152/)
* **Zoé Lecaille**

Avec le soutien de Sofiane Khireddine et des encadrant·es d'Ada Tech School.
