// click()
// quick and easy way to add a click listener to element(s)

// prints when item with id 'submit' is clicked
// $('#submit').click(function(){
//     console.log("Another click");
// });

// alerts when ANY button is clicked
// $('button').click(function(){
//     alert('Someone clicked a button');
// })

$("button").click(function(){
	var text = $(this).text();
	console.log("you clicked " + text);
});


// keypress()
// quick and easy way to add listener to Element(s)

// listen for any keypress in any text input
$('input[type="text"]').keypress(function(event){
    if(event.which === 13){
        alert("You Hit ENTER!")
    }
});