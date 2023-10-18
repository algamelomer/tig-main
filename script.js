document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const yearFounded = document.getElementById('yearFounded');
    var student = document.getElementById("studentCount");
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
        },
        speed: 1500,
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Scroll Reveal Animation
    var revealElements = document.querySelectorAll('.scroll-reveal');

    function handleScroll() {
        for (var i = 0; i < revealElements.length; i++) {
            var element = revealElements[i];
            var elementTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            var revealPosition = windowHeight * 0.7;

            if (elementTop < revealPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        }
    }



    var studentCount = document.getElementById('studentCount');
    var studentCounterInterval;
    var year_started;
    var years = document.getElementById("number-of-years");


    function startStudentCounter() {
        for (var i = 0; i < revealElements.length; i++) {
            var element = revealElements[i];
            var elementTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            var revealPosition = windowHeight * 0.7;

            if (elementTop < revealPosition) {
                var students = 0;
                let year = 0;
                studentCounterInterval = setInterval(function() {
                    if (students >= 40) {
                        clearInterval(studentCounterInterval);
                    } else {
                        students++;
                        studentCount.innerText = students;
                    }
                }, 50);
                year_started = setInterval(function() {
                    if (year >= 1) {
                        clearInterval(year_started);
                    } else {
                        year++;
                        years.innerText = year;
                    }
                }, 500);
            }
        }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', startStudentCounter);



});