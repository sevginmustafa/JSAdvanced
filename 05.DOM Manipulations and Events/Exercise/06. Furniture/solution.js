function solve() {
  const boughtItems = [];
  const buttons = document.querySelectorAll('button');
  const textareas = document.querySelectorAll('textarea');

  const table = document.querySelector('tbody');

  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);

  function generate() {
    const array = JSON.parse(textareas[0].value);

    for (let obj of array) {
      const tr = document.createElement('tr');

      const img = document.createElement('img');
      img.src = obj.img;

      const pName = document.createElement('p');
      pName.textContent = obj.name

      const pPrice = document.createElement('p');
      pPrice.textContent = obj.price;

      const pFactor = document.createElement('p');
      pFactor.textContent = obj.decFactor;

      const input = document.createElement('input');
      input.type = 'checkbox';

      const tdImg = document.createElement('td');
      tdImg.appendChild(img);
      const tdName = document.createElement('td');
      tdName.appendChild(pName);
      const tdPrice = document.createElement('td');
      tdPrice.appendChild(pPrice);
      const tdFactor = document.createElement('td');
      tdFactor.appendChild(pFactor);
      const tdMark = document.createElement('td');
      tdMark.appendChild(input);

      tr.appendChild(tdImg);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdFactor);
      tr.appendChild(tdMark);

      table.appendChild(tr);
    }
  }

  function buy() {
    const items = document.querySelector('tbody').children;

    for (let i = 1; i < items.length; i++) {
      if (items[i].querySelector('input').checked) {
        const name = items[i].children[1].textContent;
        const price = Number(items[i].children[2].textContent);
        const decFactor = Number(items[i].children[3].textContent);

        boughtItems.push({
          name,
          price,
          decFactor
        })
      }
    }

    textareas[1].textContent += `Bought furniture: ${boughtItems.map(x => x.name).join(', ')}` + '\n';
    textareas[1].textContent += `Total price: ${(boughtItems.reduce((acc, curr) => acc + curr.price, 0)).toFixed(2)}` + '\n';
    textareas[1].textContent += `Average decoration factor: ${boughtItems.reduce((acc, curr) => acc + curr.decFactor / boughtItems.length, 0)}`;
  }
}