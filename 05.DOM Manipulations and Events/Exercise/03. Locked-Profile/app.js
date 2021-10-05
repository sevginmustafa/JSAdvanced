function lockedProfile() {
    const buttons = document.getElementsByTagName('button');

    for (const button of buttons) {
        button.addEventListener('click', onclick);
    }

    function onclick(ev) {
        const isLocked = ev.target.parentNode.querySelector('input[value="lock"]').checked;

        if (!isLocked) {
            const hiddenFields = ev.target.parentNode.querySelector('div');

            if (hiddenFields.style.display == 'inline') {
                hiddenFields.style.display = '';
                ev.target.textContent = 'Show more';
            }
            else {
                hiddenFields.style.display = 'inline'
                ev.target.textContent = 'Hide it';
            }
        }
    }
}