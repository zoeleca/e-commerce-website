# Ada Love Chaise (school project)
Le projet consiste, pour deux équipes back-end et front-end, à créer une plateforme de vente de meubles d'occasion.

## Bien démarrer

Ces instructions vous permettront d'obtenir une copie du projet en fonctionnement sur votre machine locale pour le développement et les tests. 

Consultez la section déploiement pour des notes sur comment déployer le projet sur un système en production.

### Pré-requis

Ce dont vous avez besoin pour installer le logiciel :

- un IDE
- un shell
- un navigateur
- Node.js
- npm

### Installation

Ce qui est entre pararenthèses est normalement déjà en place.

#### - Back end

Se placer dans le dossier `/Back-end` :

- Installer les dépendances de Node : `npm install`

(Installer express : `npm install express --save`)

- Lancer `npm run start` (toujours garder un terminal ouvert)
- Lancer le serveur : `nodemon server`
- Vérifier que l'objet {message} est bien affiché : [http://localhost:3000/](http://localhost:3000/) 

Le point d'entrée est server.js, ce qui donne dans le fichier package.json : `"main": "server.js",`


#### - DataBase

- Installer PostgreSQL
- Installer pgAdmin4 (minimum)
- Suivre les instructions contenues dans le script : `tables_db_lovechaise.sql`

```
/* POUR UTILISER CE SCRIPT .SQL :
1) Télécharger PostgreSQL (au moins pgAdmin 4) 
2) Executer le fichier d'installation et enregistrer le mot de passe "postgres" pour l'user par default "postgres"
2) Ouvrir pgAdmin
3) Ouvrir le dossier "Server"
4) Insérer le mot de passe "postgres" dans le prompt
5) Click droit sur "Database" > Create > Database
6) Nommer la db "Lovechaise"
7) Cliquer droit sur la DB Lovechaise
8) Click "Query Tool"
9) Click sur le bouton "Dossier" 
10) Importer le fichier tables_db_lovechaise.sql
11) Click sur le bouton "Play Execute Script"
12) Si besoin de tester des queries : refaire l'étape 8 
*/

```



#### - Front end


## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Conçu avec

* [React](https://react.dev/) 
* [Express](https://expressjs.com/) pour Node.js
* [PostgreSQL](https://www.postgresql.org/)
* [Tailwind CSS](https://tailwindcss.com/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Repository

[Ada tech School GitHub](https://github.com/adatechschool/projet-plateforme-de-vente-de-meubles-adalovechaises)

## Auteur·es

* **Morgane Le Moal** - [GitHub](https://github.com/M0nline) - [LinkedIn](https://www.linkedin.com/in/morganelemoal/)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


