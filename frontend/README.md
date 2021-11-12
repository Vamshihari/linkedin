# project name
Form Validation of LinkedIN clone

This webpage is used for registering new users  can login into it. The user will undergo multiple pages to fill his details.

# Project Status
This project is currently in development. New users can sucessfully registered himself and if hes already an existing user he can login into his account. 

# Installation and Setup Instructions
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
npm install nodemodule  this will install node_module 
note that install node_modules both in front end and server backend
nodemon module is installed as dev dependencies here
you can install package.json using command npm init --y

To Run Test Suite:
npm test .

To Start Server:
npm start . and this application runs on http://localhost:1108/login
 


# folder structure
 contains two folder i.e front end part and server backend part.
 
 assets contains images.

 MyComponent folder contain all the JS Components which can be reusable.

 

 In server folder:
 models folder contain schema part.
 routers file contains two files one is logic for CRUD operations and other file is connection to mongodb.