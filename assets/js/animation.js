gsap.registerPlugin(ScrollTrigger);


//  Variaveis 
const tl = gsap.timeline(); 


tl.from(".heltonRibeiro", {
    opacity: 0,
    y: -20,
    duration: 1
})

tl.from(".tech", {
    opacity: 0,
    duration:.8
})

tl.from(".sec1 .seta", {
    opacity: 0,
    filter:"blur(10px)",
    y: -20,
    duration:.8
})

const textoAnimado = document.querySelectorAll(".textoAnimado");

const splitType = new SplitType(textoAnimado, {type: "chars"})

gsap.from(splitType.chars, {
    opacity: 0,
    filter:"blur(3px)",
    stagger: 0.1,
})