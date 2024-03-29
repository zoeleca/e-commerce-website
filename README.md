# Ada Love Chaise (a School Project)
Ada Loce Chaise is a responsive a second-hand furnitures e-commerce website that anwser the need of a client that want to have a website were people can post their products, and were the admin can valid or not the selling of a product.
Two teams were created : Front Team (3), Back Team (4)

## Features Expected

### Achievement
* connection Back / Front => DB (API)
* Relational DB (PostgreSQL)
* Documentation (Code + SQL) 
* Clean code
* 404 Page
* Complete products Pages
* Product Display Filters
* Product Details
* Pages : Home / Login / Post / Backoffice


### WIP

* Backoffice : feature :  validate / remove a post
* Login : Connection Script/ PW Hashed / Session Token
* Register : Form + DB Query / Table in DB

### Backlog

* Pages : Profile / Cart / My posts
* Management of an Event Calendar
* Test environment
* Deployment

## How to use the project

These instructions will enable you to get a copy of the project up and running on your local machine for development and testing purposes.
Please refer to the deployment section for notes on how to deploy the project on a production system.

### Installation 

#### - Back end

Navigate to the `/Back-end` directory:

Install/update Node dependencies: npm install
Run `npm run dev` (if you're in a development environment)
OR
Run `npm run start` (if you're in a production environment)

#### - DataBase

- Install PostgreSQL : [PostgreSQL](https://www.postgresql.org/)
- Install pgAdmin4 [pgAdmin4](https://www.pgadmin.org/) (minimum)
- Follow the instructions in the script: `tables_db_lovechaise.sql`

```
Step by Step guide to use SQL Script:

1. Download PostgreSQL (at least pgAdmin 4).
2. Run the installation file and set the password "postgres" for the default user "postgres".
3. Open pgAdmin.
4. Open the "Server" folder.
5. Enter the password "postgres" in the prompt.
6. Right-click on "Database" > Create > Database.
7. Name the database "Lovechaise" and save.
8. Right-click on the "Lovechaise" database.
9. Click on "Query Tool".
10. Click on the "open file" button (folder icon).
11. Select and import the file tables_db_lovechaise.sql.
12. Click on the "Execute Script" button (play icon).
13. If you need to test queries, repeat from step 8.
```

#### - Front end

Navigate to the `/Front-end`  directory:

- Install/update Node dependencies: npm install
- Run `npm run dev` (if you're in a development environment)
OR
- Run `npm run start` (if you're in a production environment)ù

### Deployment
(TBC)

## Libraries, Frameworks & Tools Used

* [Express](https://expressjs.com/) with Node.js
* [PostgreSQL](https://www.postgresql.org/)
* [pgAdmin](https://www.pgadmin.org/)
* [Postman](https://www.postman.com/)
* [React](https://react.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [GitHub](https://github.com/)

## Repository (origin)
<em>French Version</em>
[Ada tech School GitHub](https://github.com/adatechschool/projet-plateforme-de-vente-de-meubles-adalovechaises)

## Contributors

* **Zoé Lecaille**
* **Clément Coadou**
* **Marion Ochem** 
* **Morgane Le MoaL** - [GitHub](https://github.com/M0nline) - [LinkedIn](https://www.linkedin.com/in/morganelemoal/)
* **Philippe Deslous-Paoli**
* **Guillaume Depecker**
* **Tijana Laporte-Mitrovic** - [GitHub](https://github.com/Tiki102) - [LinkedIn](https://www.linkedin.com/in/tijana-laporte-mitrovic-b13859152/)
