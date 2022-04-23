navBar = document.querySelector('.header__nav');
links = navBar.querySelectorAll("a")

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        console.log(seamless);

        const section = document.querySelector(link.getAttribute("href"));
        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "center",
            });

        }
    })


});





