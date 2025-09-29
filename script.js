const hamburger = document.getElementById("hamburger");
        const overlayMenu = document.getElementById("overlay-menu");
        const closeBtn = document.getElementById("close-btn");

        hamburger.addEventListener("click", () => {
            overlayMenu.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            overlayMenu.classList.remove("active");
        });

        // Show about section with fade on scroll
        const aboutSection = document.querySelector(".section_about");
        window.addEventListener("scroll", () => {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (sectionTop < screenHeight - 100) {
                aboutSection.classList.add("visible");
            }
        });

        // Typewriter effect
        const text = ["Web Developement", "UI/UX Designer", "Freelancer"];
        let i = 0,
            j = 0,
            current = "",
            isDeleting = false;
        const typeElem = document.getElementById("typewriter");

        function type() {
            if (i < text.length) {
                if (!isDeleting && j <= text[i].length) {
                    current = text[i].substring(0, j++);
                } else if (isDeleting && j >= 0) {
                    current = text[i].substring(0, j--);
                }

                typeElem.innerHTML = current;

                if (!isDeleting && j === text[i].length) {
                    isDeleting = true;
                    setTimeout(type, 1000);
                } else if (isDeleting && j === 0) {
                    isDeleting = false;
                    i = (i + 1) % text.length;
                    setTimeout(type, 500);
                } else {
                    setTimeout(type, isDeleting ? 50 : 100);
                }
            }
        }

        type();