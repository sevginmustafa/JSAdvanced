function attachGradientEvents() {
    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', onmouseover);

    function onmouseover(ev) {
        document.getElementById('result').textContent = `${Math.floor(((ev.offsetX) / ev.target.clientWidth) * 100)}%`;
    }
}