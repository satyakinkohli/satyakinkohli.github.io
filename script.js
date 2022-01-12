// function hover(element) {
//     element.setAttribute('src', 'photos/memoji-thumbsup-white.jpeg');
// }
  
// function unhover(element) {
//     element.setAttribute('src', 'photos/memoji-white.jpeg');
// }

function hover(element) {
    if ($(window).width() < 481) {
        element.setAttribute('src', 'photos/memoji-white.jpeg');
    } else {
        element.setAttribute('src', 'photos/memoji-thumbsup-white.jpeg');
    }
}
  
function unhover(element) {
    element.setAttribute('src', 'photos/memoji-white.jpeg');
}
