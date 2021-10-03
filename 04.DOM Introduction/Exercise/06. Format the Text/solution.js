function solve() {
  let text = document.getElementById('input').value.split('.').filter(x => x.length > 0);
  let output = document.getElementById('output');
  let paragraphs = [];
  let result = '';

  for (let i = 0; i < text.length; i++) {
    if (i % 3 == 0 && i != 0) {
      paragraphs.push(result);
      result = '';
    }
    result += text[i] + '.';
  }

  paragraphs.push(result);

  for (let paragraph of paragraphs) {
    let el = document.createElement('p');
    el.textContent = paragraph;
    output.appendChild(el);
  }
}