#RESTful Routing

##Introduction
*   Define REST and explain WHY it matters
*   List all 7 RESTful routes
*   Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

RESTful Routes

Name        Path            HTTP verb       Purpose
=============================================================
Index       /dogs           GET             List all dogs
New         /dogs/new       GET             Show new dog form
Create      /dogs           POST            Create new dog
                                            then redirect
Show        /dogs/:id       GET             Show info about 
                                            specific dog
Edit        /dogs/:id/edit  GET             Show edit form 
                                            for one dog
Update      /dogs/:id       PUT             Update                                                       particular dog
                                            then redirect
Destroy     /dogs/:id       DELETE          delete
                                            particular dog
                                            then redirect