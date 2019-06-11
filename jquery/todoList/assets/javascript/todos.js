// Check off specific todos by clicking
$('li').click(function(){
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