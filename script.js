document.addEventListener('DOMContentLoaded', (event) => {
    const changeColorBtn = document.querySelector('#changeColorBtn');
    const loading = document.querySelector('#loading');

    changeColorBtn.addEventListener('click', () => {
        loading.classList.remove('hidden');
        changeColorBtn.classList.add('hidden');

        setTimeout(() => {
            const randomColor = getRandomHexColor();
            document.body.style.backgroundColor = randomColor;
            loading.classList.add('hidden');
            changeColorBtn.classList.remove('hidden');
        }, 1000);
    });

    function getRandomHexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
