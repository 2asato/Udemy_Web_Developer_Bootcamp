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


// on()
// works similarly to addEventListener
// lets you specify the type of event to listen for

// prints when item with id 'submit' is clicked
$('#submit').on('click', function(){
    console.log('another click');
});

// alerts when ANY button is clicked
$('button').on('click', function(){
    console.log('button clicked');
});

// double click event
$('button').on('dbclick', function(){
    alert('double clicked');
});

// drag start event
$('a').on('dragstart', function(){
    console.log('drag started!');
});

// keypress event
$('input[type="text"]').on('keypress', function(){
    alert('key press in an input!');
});


$('h1').on('click', function(){
    $(this).css('color', 'pink');
});


$('button').on('mouseenter', function(){
    $(this).css('font-weight', 'bold');
});