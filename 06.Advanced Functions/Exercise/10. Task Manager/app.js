function solve() {
    const inputName = document.getElementById('task');
    const inputDescription = document.getElementById('description');
    const inputDate = document.getElementById('date');
    const buttonAdd = document.getElementById('add').addEventListener('click', add);

    function add(ev) {
        if (inputName != '' && inputDescription != '' && inputDate != '') {
            ev.preventDefault();

            const sectionOpen = document.getElementsByTagName('section')[1].getElementsByTagName('div')[1];

            const h3 = document.createElement('h3');
            h3.textContent = inputName.value;
            const pDescription = document.createElement('p');
            pDescription.textContent = `Description: ${inputDescription.value}`;
            const pDate = document.createElement('p');
            pDate.textContent = `Due Date: ${inputDate.value}`;

            const childDiv = document.createElement('div');
            childDiv.classList.add('flex');
            const buttonStart = document.createElement('button');
            buttonStart.textContent = 'Start';
            buttonStart.classList.add('green');
            buttonStart.addEventListener('click', start)
            const buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            buttonDelete.classList.add('red');
            buttonDelete.addEventListener('click', delElement);
            childDiv.appendChild(buttonStart);
            childDiv.appendChild(buttonDelete);

            const article = document.createElement('article');
            article.appendChild(h3);
            article.appendChild(pDescription);
            article.appendChild(pDate);
            article.appendChild(childDiv);

            sectionOpen.appendChild(article);
        }
    }

    function start(ev) {
        const sectionInProgress = document.getElementById('in-progress');

        const articleToMove = ev.target.parentNode.parentNode;

        let buttons = ev.target.parentNode.parentNode.getElementsByTagName('button');

        buttons[0].remove();

        const buttonFinish = document.createElement('button');
        buttonFinish.textContent = 'Finish';
        buttonFinish.classList.add('orange');
        buttonFinish.addEventListener('click', finish);

        articleToMove.querySelector('.flex').appendChild(buttonFinish);

        sectionInProgress.appendChild(articleToMove);

    }

    function delElement(ev) {
        const articleToDelete = ev.target.parentNode.parentNode;
        articleToDelete.remove();
    }

    function finish(ev) {
        const sectionComplete = document.getElementsByTagName('section')[3].getElementsByTagName('div')[1];

        const articleToMove = ev.target.parentNode.parentNode;

        articleToMove.querySelector('.flex').remove();

        sectionComplete.appendChild(articleToMove);
    }
}