function solve() {
  const result = document.querySelector('.results-inner h1');
  let points = 0;
  const sections = document.getElementsByTagName('section');

  for (let i = 0; i < sections.length; i++) {
    const answers = sections[i].querySelectorAll('.answer-wrap');

    if (i == 0) {
      for (let answer of answers) {
        answer.addEventListener('click', quiz1);
      }
    }
    else if (i == 1) {
      for (let answer of answers) {
        answer.addEventListener('click', quiz2);
      }
    }
    else {
      for (let answer of answers) {
        answer.addEventListener('click', quiz3);
      }
    }
  }

  if (points < 3) {
    result.textContent = `You have ${points} right answers`;
  } else {
    result.textContent = 'You are recognized as top JavaScript fan!';
  }

  function quiz1(ev) {
    if (ev.target.textContent.trim() == 'onclick') {
      points++;
    }
    sections[0].classList.add('hidden');
    sections[1].classList.remove('hidden');

    console.log(ev.target.textContent.trim())
  }

  function quiz2(ev) {
    if (ev.target.textContent.trim() == 'JSON.stringify()') {
      points++;
    }
    sections[1].classList.add('hidden');
    sections[2].classList.remove('hidden');
  }

  function quiz3(ev) {
    if (ev.target.textContent.trim() == 'A programming API for HTML and XML documents') {
      points++;
    }

    const ul = sections[2].children[0];

    sections[2].removeChild(ul);

    const newUl = document.querySelector('#results');

    sections[2].appendChild(newUl);
  }
}
