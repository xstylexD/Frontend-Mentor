"Use strict"

const items = document.querySelectorAll(".faq__item");

items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(el => {
            if(el !== item) {
                el.classList.remove('active');
            };
        });

    item.classList.toggle('active');

    })
})
