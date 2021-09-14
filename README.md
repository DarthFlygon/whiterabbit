README
======

Features implemented
====================
* User Form 
* List Users
* View User Details
* Webserver using NodeJS.
* Email duplication prevented
* View templates using PUG
* Clientside Validation using regex (Partial)

Dependencies
============
* All are mentioned as part of standard package.json.

Steps to setup
==============
1. Clone the repo from https://github.com/DarthFlygon/whiterabbit
```
$ git clone https://github.com/DarthFlygon/whiterabbit.git
```
2. Follow instructions from https://nodejs.org/en/download/ to install Node.js based on the operating system (and architecture)
3. Follow instructions from https://docs.mongodb.com/manual/installation/ to install MongoDB.
4. Start your own MongoDB instance.
5. Setup a database and user by following the same page for further instructions.
6. Change the database connection string from inside app.js to "mongodb://<username>:<password>@<hostname>:<port>/<database>".
7. Change directory to the checkout and run
```
$ npm start
```
OR
```
$ nodemon whiterabbit
```