window.addEventListener('load', () => {
    // const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const { body } = document;

    nav.addEventListener("pointerenter", () => body.classList.add('extended'));
    nav.addEventListener("pointerleave", () => body.classList.remove('extended'));

    nav.querySelectorAll('li').forEach(e => e.addEventListener('click', () => (
        window.location.assign(e.dataset.url + ".html")
    )));
});
