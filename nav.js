const primNav = document.querySelector(".prim_navi");
const navToggle = document.querySelector(".mobile_nav_toggle");

navToggle.addEventListener ("click", () => {
    const visib = primNav.getAttribute("data-visible");


    if (visib === "false") {
        primNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visib === "true") {
        primNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});