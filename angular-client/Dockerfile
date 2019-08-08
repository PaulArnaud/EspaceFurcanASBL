# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:10.16
# Set the working directory to /client
WORKDIR /angular-client
# copy package.json into the container at /client
COPY package*.json /angular-client/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /client
COPY . /angular-client/
# Make port 4200 available to the world outside this container
EXPOSE 4200
# Run the app when the container launches
CMD ["npm","start"]