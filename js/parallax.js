let gear1 = document.getElementById("gear1");
let gear2 = document.getElementById("gear2");

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`

    gear1.style.transform = 'rotate(' + this.scrollY / 4.5 + 'deg)';
    gear2.style.transform = 'rotate(' + -this.scrollY / 4.5 + 'deg)';
})