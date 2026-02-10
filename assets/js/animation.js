gsap.registerPlugin(ScrollTrigger);

//  !. Instancia Time LIne
const tl = gsap.timeline(); 

// 2. Preparação dos Textos (SplitType)
const textoAnimado = document.querySelectorAll(".textoAnimado");
const splitType = new SplitType(textoAnimado, {type: "chars"});

const textoWords = document.querySelectorAll(".textoAnimadoWords");
const splitTypeWords = new SplitType(textoWords, {type: "words"})


tl.from(".etiqueta", {
    opacity: 0,
    y: -20,
    duration: 0.4
})

tl.from(".divLogos", {
    opacity: 0,
    y:-5,
    duration:0.5
})

.from(splitType.chars, {
    opacity: 0,
    filter: "blur(3px)",
    stagger: 0.1,
    duration: 0.01
})


.from(splitTypeWords.words, {
    opacity: 0,
    filter: "blur(3px)",
    stagger: 0.3,
    duration: 0.2
});

tl.from(".seta", {
    opacity: 0,
    filter:"blur(10px)",
    y: -20,
    duration:.5
})