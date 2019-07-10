@Author : Paul Arnaud
@Date : Jun & July & August 2019
@Client : Espace Furcan ASBL, a little association which fight against numerical fracture.

This app was developped on Ubuntu 18.04, with VisulStudio Code.
In order to avoid versions problems, I have decided to do this with container (Docker)


1) Install "Docker" : 
    Try to follow the tutoriel of docker web site (https://docs.docker.com/install)
    I have made the Ubuntu one (https://docs.docker.com/install/linux/docker-ce/ubuntu/)

    IMPORTANT : It was important for me also to follow this guide : https://docs.docker.com/install/linux/linux-postinstall/
    (to transform docker permission)



2) What I have done ? :
    To avoid versions problems I decided to make 3 docker's containers : one for node (server side), one for react (client side) and one for Mongo (database).

    I follow these tutoriel which were not update with the new version of npm (and mainly npx, npx is a helper to create quickly applications with express and react, I believe it is a tool created by Facebook) :
    _ https://medium.com/free-code-camp/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c
    _ https://www.freecodecamp.org/news/create-a-fullstack-react-express-mongodb-app-using-docker-c3e3e21c4074/


3) Run the project :
    To run the project : $ docker-compose up (or $docker-compose --verbose up if you want log for you developpement)
    || Image for service api was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`. ||
4) React :
    To develop the React app, I have used this web site : https://facebook.github.io/create-react-app/docs/getting-started

5) Node :

6) Mongo :
    As many web site we have a connection for user and admin.
    
