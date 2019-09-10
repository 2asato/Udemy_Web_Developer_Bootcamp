#Rendering HTML and Templates

*   Use res.render() to render HTML(from an EJS file)
    - send back contents of file with res.render() 
    - must be in views folder
*   Explain what EJS is and why we use it
    -   embedded javascript
    -   use loops, if statements in HTML code
*   Pass variables to EJS templates


#EJS Control Flow

*   Show examples of control flow in EJS templates
*   Write if statements in an EJS file
    -   if twitter post show twitter icon
*   Write loops in an EJS file


ex. loop through all posts
    make an entry div
        title
        tagline
        ...


#2 DIFFERENT TAGS IN EJS

*   <%= %> value will be rendered to HTML

*   <% %> for logic ie if statement or loop


#Styles And Partials

*   Show how to properly include public assets
*   Properly configure our app to use EJS
*   Use partials to dry up our code!