const inputSearch = document.querySelector('#quiz-search');
const tooltip = document.querySelector('#input-tooltip');
const preview = document.querySelector('#input-preview');

inputSearch.addEventListener('input', (event) => {
    const teks = event.target.value;
    preview.textContent = teks;

    if (teks.trim() !== '') {
        tooltip.style.display = 'block';
    } else {
        tooltip.style.display = 'none';
    }
});

const formSearch = document.querySelector('form[role="search"]');
formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
});