@ Author : Paul Arnaud

@ Date : Jun & July & August 2019

@ Client : Espace Furcan ASBL, a little association which fight against numerical fracture.

This app was developped on Ubuntu 18.04, with VisulStudio Code.
In order to avoid versions problems, I have decided to do this with container (Docker)

I] Tips
    1) Install "Docker" : 
        Try to follow the tutoriel of docker web site (https://docs.docker.com/install)
        I have made the Ubuntu one (https://docs.docker.com/install/linux/docker-ce/ubuntu/)

        IMPORTANT : It was important for me also to follow this guide --> https://docs.docker.com/install/linux/linux-postinstall/
        (to transform docker permission)

    2) What I have done ? :
        To avoid versions problems I decided to make 3 docker's containers : one for node (server side), one for react (client side) and one for Mongo (database).

        I follow these tutoriel which were not update with the new version of npm (and mainly npx, npx is a helper to create quickly applications with express and react, I believe it is a tool created by Facebook) :
        _ https://medium.com/free-code-camp/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c
        _ https://www.freecodecamp.org/news/create-a-fullstack-react-express-mongodb-app-using-docker-c3e3e21c4074/

    3) Run the project :
        To run the project : `docker-compose up`
        (or `docker-compose --verbose up` if you want log for you developpement)
        To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.


II] Technologies    
    1) React : (Frontend)
        Web site : https://reactjs.org
        To develop the React app, I have used this web site : https://facebook.github.io/create-react-app/docs/getting-started

    2) Node : (Backend)
        Web site : https://nodejs.org
        RESTFULL api.
        CRUD with models : User/ Reservation / Service / SocialCategory

    3) Mongo : (Database)
        As many web site we have a connection for user and admin.
        Web site : https://www.mongodb.com/

III] Tools
1) Postman :
    A application for testing your api... very usefull.
    Web site : https://www.getpostman.com/

IV] Modules 
1) Mongoose
    Web site : https://mongoosejs.com
2) Redux
    Web site : https://redux.js.org/
    
V] Tutoriels
    |_| MERN Stack : 
        * https://medium.com/@axel.marciano/votre-premi%C3%A8re-application-en-react-node-express-mongodb-5ab0dc531091
        * https://www.freecodecamp.org/news/create-a-fullstack-react-express-mongodb-app-using-docker-c3e3e21c4074/
        * https://medium.com/free-code-camp/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c

    |_| Authentication & Registration
        * https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0
        * https://www.youtube.com/watch?v=6FOq4cUdH8k
        * https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
        * https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82
        * https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718

    |_| Redux & More 
        * https://www.youtube.com/watch?v=93p3LxR9xfM&feature=youtu.be&source=post_page---------------------------

VI] Main commands 
    _ `git clone https://github.com/PaulArnaud/EspaceFurcanASBL.git`
    _ `docker-compose up`
