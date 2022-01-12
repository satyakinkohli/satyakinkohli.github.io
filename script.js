// function hover(element) {
//     element.setAttribute('src', 'photos/memoji-thumbsup-white.jpeg');
// }
  
// function unhover(element) {
//     element.setAttribute('src', 'photos/memoji-white.jpeg');
// }

if ($(window).width() < 481) {
    function hover(element) {
        element.setAttribute('src', 'photos/memoji-white.jpeg');
    }
      
    function unhover(element) {
        element.setAttribute('src', 'photos/memoji-white.jpeg');
    }
} else {
    function hover(element) {
        element.setAttribute('src', 'photos/memoji-thumbsup-white.jpeg');
    }
      
    function unhover(element) {
        element.setAttribute('src', 'photos/memoji-white.jpeg');
    }
}