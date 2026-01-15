document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.rainbow-title');

    if (!title) return;

    const text = title.innerText;
    title.innerHTML = '';

    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.animationDelay = `${index * 0.1}s`;
        title.appendChild(span);
    });
});