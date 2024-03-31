const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Suis la slide
let currentSlide = 0;
// Variable contenant le nombre de slide
const totalSlides = slides.length;
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
let dots = [];

// Affiche la slide et le texte
function showSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    tagLine.innerHTML = slides[index].tagLine;
}

// Permet le bon nombre de point et les click sur ces derniers
function createPaginationDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showSlide(i);
            updateDots(i);
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }
    updateDots(currentSlide);
}

// Gerer l'apparence des points
function updateDots(index) {
    dots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    updateDots(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
    updateDots(currentSlide);
}

const leftArrow = document.getElementById('arrow_left');
const rightArrow = document.getElementById('arrow_right');

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Afficher la première slide au chargement de la page
showSlide(currentSlide);
createPaginationDots();
