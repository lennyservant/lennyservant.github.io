

document.addEventListener("DOMContentLoaded", (e) => {
    const navLinksContainer = document.getElementById("navigation-links");
    const navLinks = navLinksContainer.querySelectorAll("a")
    // make nav links less janky when clicking on next page
    for (const a of navLinks) {
        // listen for click on all the links
        const listener = a.addEventListener("click", () => {
            for (const aOther of navLinks) {
                // reset classes
                aOther.className = aOther.className.split(" ").filter(c => c != "current").join(" ");
            }
            // then set our own class
            a.className += " current";
        })
    }

    // setup background hover
    const backgroundHover = document.getElementById("background-hover")
    // move when mouse moves
    document.addEventListener("mousemove", (e) => {
        backgroundHover.style.setProperty("--x", `${e.clientX - 4}px`);
        backgroundHover.style.setProperty("--y", `${e.clientY - 4}px`);
    })
})