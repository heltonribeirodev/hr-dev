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

// LINK FOOTER SEM MUDAR URL
document.querySelectorAll(".footer-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // impede mudar a URL

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// E-MAIL JS
emailjs.init("oLb_EUknWblqCTl_w");

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        user_phone: document.getElementById("user_phone").value,
        email: document.getElementById("email").value,
        empresa: document.getElementById("empresa").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_43np8n2";
    const templateID = "template_ix1dhtn";
    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    emailjs.send(serviceID, templateID, formData)
        .then(() => {
            Toastify({
                text: "E-mail enviado com sucesso!",
                style: {
                    background: "#28a745",
                    color: "#F4F4F4"
                },
            }).showToast();

            document.getElementById("contact-form").reset();
        })
        .catch(() => {
            Toastify({
                text: "Erro ao enviar o formulário!",
                duration: 2000,
                style: {
                    background: "#dc3545",
                    color: "#F4F4F4"
                },
            }).showToast();

            console.error("Erro no envio", error);
        })
        .finally(() => {
            submitButton.textContent = "Enviar Mensagem";
            submitButton.disabled = false;
        })
})