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
6. Click droit sur "Database" > Create > Database
7. Nommer la db "Lovechaise"
8. Cliquer droit sur la DB Lovechaise
9. Click "Query Tool"
10. Click sur le bouton "Dossier"
11. Importer le fichier tables_db_lovechaise.sql
12. Click sur le bouton "Play Execute Script"
13. Si besoin de tester des queries : refaire l'étape 8 
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


