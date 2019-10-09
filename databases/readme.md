##Databases

#Intro to Databases
*   What is a database?
    - a collection of information/data
    - has an interface to interact with data
*   SQL vs NoSQL
    -  sql (relational)
        tables
    - nosql (non-relational)
        no tables
        flexible


#Intro to MongoDB
*   What is MongoDB?
    - nosql (on-relational database)
    - flexible and dynamic
*   Why are we using it?
    - most popular database with node
    - good tools to use within an Express app
*   Let's Install It!


#Our First Mongo Commands
*   mongod
    - starts mongo demon (mongo process)
    - runs in seperate terminal tab in the background
*   mongo
    - opens mongo shell
    - use to debug and test like the javascript console
*   help
    - gives list of basic features of mongo
*   show dbs
    - shows list of databases
*   use
    - use <name of db>
    - tells to use that db
    - if already created it will switch over
    - if not it will create new db
*   insert
    - creates new collection
        db.dogs.insert()
        currentDatabase.collectionName.command
*   find
    - finds collections
        db.dogs.find()
        returns all in collection
        db.dogs.find({name: "Rusty"})
        returns dogs with name Rusty
*   update
    - updates collections
        db.dogs.update({name: "Lulu"}, {breed: "Labradoodle"})
        would update Lulu to just a dog with a breed of Labradoodle
        db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})
        will update Rusty to Tater and add isCute to true
*   remove
    - deletes collection
        db.dogs.remove({breed: "Labradoodle"})
        would delete all dogs that are Labradoodles

CRUD
Create Read Update Delete


#Mongoose
*   What is Mongoose?
    - mongodb object modeling for node
    - npm package helps interact with mongodb database
*   Why are we using it?
*   Interact with a Mongo Database using Mongoose