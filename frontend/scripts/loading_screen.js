// window.addEventListener('load', function() {
//     var loadingScreen = document.querySelector('.loading-screen');
//     var mainScreen = document.querySelector('.main');
//     var delayInMilliseconds = 900;
//     setTimeout(function() {
//         document.body.style.backgroundColor = '#191919';
//     }, delayInMilliseconds);
//     setTimeout(function(){
//         mainScreen.style.display = 'none';
//     });
//     setTimeout(function(){
//         mainScreen.style.display = 'flex';
//     }, delayInMilliseconds);
//     setTimeout(function() {
//         loadingScreen.style.display = 'none';
//     }, delayInMilliseconds);
// });

function redirect() {
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1000);
}
