gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline(); 

const textoAnimado = document.querySelectorAll(".textoAnimado");
const splitType = new SplitType(textoAnimado, { type: "chars" });

const textoWords = document.querySelectorAll(".textoAnimadoWords");
const splitTypeWords = new SplitType(textoWords, { type: "words" });

tl.from(".etiqueta", {
    opacity: 0,
    y: -20,
    duration: 0.4
});

tl.from(".divLogos", {
    opacity: 0,
    y: -5,
    duration: 0.5
});

tl.from(splitType.chars, {
    opacity: 0,
    filter: "blur(5px)",
    x: -30,
    stagger: 0.1,
    duration: 0.1
});

tl.from(splitTypeWords.words, {
    opacity: 0,
    x:-10,
    filter: "blur(3px)",
    stagger: 0.1,
    duration: 0.1
});

tl.from(".seta", {
    opacity: 0,
    filter: "blur(10px)",
    y: -20,
    duration: 0.5
});


// Aniations Cards

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document
    .querySelectorAll('.hiddenLeft, .hiddenRight')
    .forEach(el => cardObserver.observe(el));


// FOOTER 
