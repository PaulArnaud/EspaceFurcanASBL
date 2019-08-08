# README

![alt ref](http://www.espacefurcan.be/img/logo-footer.png)

@ Author : Paul Arnaud

@ Date : Jun & July & August 2019

@ Client : Espace Furcan ASBL, a little association which fight against numerical fracture.

This app was developped on Ubuntu 18.04, with VisulStudio Code.
In order to avoid versions problems, I have decided to do this with container (Docker).

## Tips

### Install Docker

Try to follow the tutoriel of [docker web site](https://docs.docker.com/install).

I have made the [Ubuntu one](https://docs.docker.com/install/linux/docker-ce/ubuntu/).

IMPORTANT : It was important for me also to follow this [guide](https://docs.docker.com/install/linux/linux-postinstall/) (to modify docker permission).

### Explaination

To avoid versions problems I decided to make 3 docker's containers : one for node (server side), one for react (client side) and one for Mongo (database).

I follow these tutoriel which were not update with the new version of npm (and mainly npx, npx is a helper to create quickly applications with express and react, I believe it is a tool created by Facebook).

* [MERN Stack](https://medium.com/free-code-camp/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c).

* [Docker & MERN Stack](https://www.freecodecamp.org/news/create-a-fullstack-react-express-mongodb-app-using-docker-c3e3e21c4074/).

### Run the project

To run the project : `docker-compose up` (or `docker-compose --verbose up` if you want log for you developpement).

To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.

## Technologies

### React - (Frontend)

* [React](https://reactjs.org).

To develop the React app, I have used this [web site](https://facebook.github.io/create-react-app/docs/getting-started).

### Node - (Backend)

* [Node](https://nodejs.org).

RESTFULL api.

CRUD with models : User/ Reservation / Service / SocialCategory.

### Mongo - (Database)

* [Mongo](https://www.mongodb.com/).

As many web site we have a connection for user and admin.

## Tools

### Visual Studio

* [Visual Studio](https://visualstudio.microsoft.com).

### Postman

* [Postman](https://www.getpostman.com/).

A application for testing your api... very usefull.

## Main-Modules

* [Mongoose](https://mongoosejs.com).

* [Redux](https://redux.js.org/).

* [Express](https://expressjs.com/).

* [Passport](http://www.passportjs.org/).

* [Bcrypt](https://www.npmjs.com/package/bcryptjs).

* [Cookie-Parser](https://www.npmjs.com/package/cookie-parser).

* [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start).

* [Axios](https://github.com/axios/axios).

## Tutoriels

Here the complete list of guide I used to developp the work.

### MERN-Stack

* [Tutoriel 1](https://medium.com/@axel.marciano/votre-premi%C3%A8re-application-en-react-node-express-mongodb-5ab0dc531091).

* [Tutoriel 2](https://www.freecodecamp.org/news/create-a-fullstack-react-express-mongodb-app-using-docker-c3e3e21c4074/).

* [Tutoriel 3](https://medium.com/free-code-camp/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c).

### Authentication & Registration

* [Tutoriel 1](https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0).

* [Tutoriel 2](https://www.youtube.com/watch?v=6FOq4cUdH8k).

* [Tutoriel 3](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669).

* [Tutoriel 4](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82).

* [Tutoriel 5](https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718).

### Redux & More

* [Redux Video Explication](https://www.youtube.com/watch?v=93p3LxR9xfM&feature=youtu.be&source=post_page---------------------------).

## Main-commands

* `git clone https://github.com/PaulArnaud/EspaceFurcanASBL.git`.

* `docker-compose up`.
