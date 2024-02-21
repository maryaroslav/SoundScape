window.addEventListener('load', function() {
    var loadingScreen = document.querySelector('.loading-screen');
    var delayInMilliseconds = 900;
    setTimeout(function() {
        document.body.style.backgroundColor = '#191919';
    }, delayInMilliseconds);
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, delayInMilliseconds);
});