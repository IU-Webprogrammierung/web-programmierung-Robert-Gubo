const toggleButton = document.getElementsByClassName("toggle-button")[0]
const listContainer = document.getElementsByClassName("list-container")[0]

toggleButton.addEventListener("click", () =>{
    listContainer.classList.toggle("active")
})

window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("topBtn").style.display = "block";
            } else {
                document.getElementById("topBtn").style.display = "none";
            }
        }

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
    
        function showSlide(n) {
            slideIndex = (n + slides.length) % slides.length;
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === slideIndex);
            });
        }
    
        function prevSlide() {
            showSlide(slideIndex - 1);
        }
    
        function nextSlide() {
            showSlide(slideIndex + 1);
        }
    
        showSlide(slideIndex);