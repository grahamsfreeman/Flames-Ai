/*=========================================
  CURRENT YEAR
=========================================*/

const footer = document.querySelector("footer p");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Flames Report AI. All Rights Reserved.`;
}

/*=========================================
  STICKY HEADER SHADOW
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

/*=========================================
  SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================
  FEATURE CARD ANIMATION
=========================================*/

const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});

/*=========================================
  BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(".primary-btn, .signup-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.offsetX - diameter / 2}px`;

        circle.style.top = `${e.offsetY - diameter / 2}px`;

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});
