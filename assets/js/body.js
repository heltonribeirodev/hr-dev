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
        e.preventDefault();

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
// FIX: inicializar só após o DOM estar pronto, garantindo que o SDK já carregou
window.addEventListener("load", function () {
    emailjs.init("oLb_EUknWblqCTl_w");
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // FIX: validação básica de telefone antes de enviar
    const phoneValue = document.getElementById("user_phone").value.replace(/\D/g, "");
    if (phoneValue.length < 10 || phoneValue.length > 11) {
        Toastify({
            text: "Por favor, insira um WhatsApp válido (com DDD).",
            duration: 3000,
            style: {
                background: "#e67e22",
                color: "#fff"
            },
        }).showToast();
        return;
    }

    const formData = {
        name: document.getElementById("name").value,
        user_phone: document.getElementById("user_phone").value,
        email: document.getElementById("email").value,
        empresa: document.getElementById("empresa").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_43np8n2";
    const templateID = "template_ix1dhtn";
    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    emailjs.send(serviceID, templateID, formData)
        .then(() => {
            Toastify({
                text: "E-mail enviado com sucesso! Entrarei em contato em breve.",
                duration: 4000,
                style: {
                    background: "#28a745",
                    color: "#F4F4F4"
                },
            }).showToast();

            document.getElementById("contact-form").reset();
        })
        .catch((error) => { // FIX: 'error' agora é o parâmetro correto do callback
            Toastify({
                text: "Erro ao enviar o formulário. Tente pelo WhatsApp ou e-mail.",
                duration: 4000,
                style: {
                    background: "#dc3545",
                    color: "#F4F4F4"
                },
            }).showToast();

            console.error("Erro no envio do EmailJS:", error);
        })
        .finally(() => {
            submitButton.textContent = "Enviar Mensagem";
            submitButton.disabled = false;
        });
});
