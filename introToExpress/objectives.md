# Introduction to Express

* What is a framework? How is it different from a library?
    - Library of external code where you're in control
    - Framework, external code where the control is already predefined, less control
* What is Express?
`   - Web Development framework
    - Handles basic legwork
* Why are we using Express?
    - Most popular Node framework
        Big community, lots of tutorials
    - Light framework, easy to understand what exactly Express is doing

#NPM Init and Package.json

* Use the --save flag to install packages
    when installing a package to install and save to dependencies of package.json
* Explain what the package.json file does
    javascript object notation
    holds metadata relavent to the project, application, package
* Use 'npm init' to create a new package.json

# More Routing

* Show the '*' route matcher
    anywhere other than the defined routes
    useful for an error page to undefined pages
* Write routes containing route parameters
    or route variables
    use ':'
    ex. app.get('/r/:subredditName', function(req, res){
        res.send('YOU MADE IT TO A SUBREDDIT!')
    })
    ex. app.get('/r/:subredditName/comments/:id/:title/', function(req, res){
        res.send('Welcome to the comments page');
    })
* Discuss route order
    order of routes matters
    first route that matches is only route run
    '*' route should be last, at the bottom