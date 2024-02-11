let start = 1;
showSlides(start)
function prevNext(n){
    showSlides(start += n)
}
function currentSlide(n) {
    showSlides(start = n);
}

function showSlides(n) {
    let slide = document.querySelectorAll('.myslide');
    if (n > slide.length) {start = 1}
    if (n < 1) {start = slide.length}
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    slide[start-1].style.display = "block";
}