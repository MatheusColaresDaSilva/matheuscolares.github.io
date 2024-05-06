$(document).ready(function() {
        $(window).scroll(function() {

            var textSections = document.querySelectorAll('.text-section');
            var scrollPosition = $(this).scrollTop();
            var windowHeight = $(this).height();
            
            textSections.forEach(function(item) {
                var position = item.offsetTop;
                if (scrollPosition + windowHeight > position) {    
                    item.classList.add('visible');
                }

            });

            var gridItems = document.querySelectorAll('.grid-container' );
            gridItems.forEach(function(item) {
                var position = item.offsetTop;
                if (scrollPosition + windowHeight > position) {
                    var imgs = item.querySelectorAll('.grid-item-img')
                    imgs.forEach(function(img) { 
                        img.classList.add('animate'); 
                    });
                }
            });

        });
    });


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