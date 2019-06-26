// Check off specific todos by clicking
$('ul').on("click", "li", function(){
    $(this).toggleClass('completed');
});
// without class
// $('li').click(function(){
//     // if li is gray turn it black if black turn it gray
//     if($(this).css('color') === 'rgb(128, 128, 128)') {
//         // turn it black, no line through
//         $(this).css({
//             color: 'black',
//             textDecoration: 'none'
//         })
//     }
//     else {
//         $(this).css({
//             color: 'grey',
//             textDecoration: 'line-through'
//         })
//     }
// });

// Click on X to delete Todo
$('ul').on("click", "span", function(event){
    // without parent only the span is removed
    $(this).parent().fadeOut(500, function(){
        // refers to the li not the span
        $(this).remove();
    });
    // jquery method that stops events from bubbling up to parents
    // stops the li toggle class function from occuring
    event.stopPropagation();
})

// add new todo
$("input[type='text']").keypress(function(event){
    // if the enter button is pressed
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        // clears input text
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
})

// toggle todo input
$('#toggle-form').click(function(){
    $("input[type='text']").fadeToggle();
});