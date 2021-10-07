function solve() {
  const result = document.querySelector('#results');
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


  function quiz1(ev) {
    if (ev.target.textContent.trim() == 'onclick') {
      points++;
    }
    sections[0].style.display = 'none';
    sections[1].style.display = 'block';

    console.log(ev.target.textContent.trim())
  }

  function quiz2(ev) {
    if (ev.target.textContent.trim() == 'JSON.stringify()') {
      points++;
    }
    sections[1].style.display = 'none';
    sections[2].style.display = 'block';
  }

  function quiz3(ev) {
    if (ev.target.textContent.trim() == 'A programming API for HTML and XML documents') {
      points++;
    }
    sections[2].style.display = 'none';

    result.style.display = 'block';

    if (points < 3) {
      result.querySelector('h1').textContent = `You have ${points} right answers`;
    } else {
      result.querySelector('h1').textContent = 'You are recognized as top JavaScript fan!';
    }
  }
}
