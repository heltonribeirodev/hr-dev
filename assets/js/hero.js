// BACK TO TOP
const backToTopElement = document.getElementById("back-to-top-button");
const elementToObserve = document.querySelector(".etiqueta h1");

const handleBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

backToTopElement.addEventListener("click", handleBackToTop);

const options = {
    root: null,
    threshold: 0
};

const handleBackToTopVisibility = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            backToTopElement.classList.add("back-to-top-visible");
        } else {
            backToTopElement.classList.remove("back-to-top-visible");
        }
    });
};

const observer = new IntersectionObserver(handleBackToTopVisibility, options);

if (elementToObserve) {
    observer.observe(elementToObserve);
}