function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById("searchField");
      const cells = document.querySelectorAll("tbody td");

      for (let i = 0; i < cells.length; i++) {
         cells[i].parentNode.classList.remove('select');
      }

      for (let i = 0; i < cells.length; i++) {
         if (cells[i].textContent.includes(searchField.value)) {
            cells[i].parentNode.classList.add('select');
         }
      }

      searchField.value = '';
   }
}