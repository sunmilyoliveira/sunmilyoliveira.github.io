const ptButton = document.getElementById("lang-pt");
const enButton = document.getElementById("lang-en");

const translatableElements = document.querySelectorAll("[data-pt][data-en]");

function changeLanguage(language) {

    translatableElements.forEach((element) => {
        element.textContent = element.dataset[language];
    });

    if (language === "en") {

        document.documentElement.lang = "en";

        document.title = "Sunmily Oliveira | Technology Portfolio";

        ptButton.classList.remove("active");
        enButton.classList.add("active");

        localStorage.setItem("portfolio-language", "en");

    } else {

        document.documentElement.lang = "pt-BR";

        document.title = "Sunmily Oliveira | Portfólio de Tecnologia";

        enButton.classList.remove("active");
        ptButton.classList.add("active");

        localStorage.setItem("portfolio-language", "pt");

    }
}


ptButton.addEventListener("click", () => {
    changeLanguage("pt");
});


enButton.addEventListener("click", () => {
    changeLanguage("en");
});


const savedLanguage = localStorage.getItem("portfolio-language");

if (savedLanguage === "en") {
    changeLanguage("en");
} else {
    changeLanguage("pt");
}
