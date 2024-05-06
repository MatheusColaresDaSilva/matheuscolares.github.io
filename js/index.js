window.addEventListener('scroll', function() {
    var header = document.getElementById('mainHeader');
    if (window.scrollY > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

$(function(){ 
    $("#header").load("header.html");
    $("#footer").load("footer.html"); 
});