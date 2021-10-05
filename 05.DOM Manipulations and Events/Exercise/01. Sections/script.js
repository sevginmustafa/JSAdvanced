function create(words) {
   for (let word of words) {
      const paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      const div = document.createElement('div');
      div.appendChild(paragraph);
      div.addEventListener('click', onclick);
      document.getElementById('content').appendChild(div);
   }

   function onclick(ev) {
      ev.target.children[0].style.display = '';
   }
}