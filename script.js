const faq_element = document.querySelectorAll(".faq");


faq_element.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("show");
    });
});

