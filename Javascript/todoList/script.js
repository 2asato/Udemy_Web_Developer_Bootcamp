window.setTimeout(function() {
  var todos = ["Buy New Turtle"];

  var input = prompt("What would you like to do?")

  while(input !== "quit") {
    // handle input
    if(input === "list") {
      listTodos();
    } else if (input === "new") {
      newTodos();
    } else if (input === "delete") {
      deleteTodos();
    }
    // ask again for new input
    input = prompt("What would you like to do?")
  }
  console.log("OK, YOU QUIT THE APP");


  function listTodos() {
    console.log("**********");
    todos.forEach(function(todo, index){
      console.log(index + ": " + todo);
    });
    console.log("**********");
  }

  function newTodos() {
    // ask for new todo
    var newTodo = prompt("Enter new todo")
    // add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
  }

  function deleteTodos() {
    // ask for index of todo to be deleted
    var index = prompt("Enter the index of todo to delete");
    // delete that todo
    // splice
    todos.splice(index, 1);
    console.log("Deleted Todo");
  }

}, 500);
