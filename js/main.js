const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});



const menu = document.getElementById("links");
const toggleMenuBtn = document.querySelector(".icon_menu");
const closeMenuBtn = document.querySelector(".close_menu");

toggleMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});



const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");

if (contactForm) {

    contactForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData
            });

            if (response.ok) {

              
                successMessage.style.display = "block";

                
                contactForm.reset();

              
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 3000);

            } else {

                alert("Failed to send message.");

            }

        } catch (error) {

            console.error(error);
            alert("Error sending message.");

        }

    });

}
