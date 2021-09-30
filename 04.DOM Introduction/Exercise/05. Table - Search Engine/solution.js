function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById("searchField").textContent;
      const cells = document.querySelectorAll("tbody td");

      for (let i = 0; i < cells.length; i++) {
         if (cells[i].textContent.includes(searchField)) {
            document.querySelectorAll("tbody tr")[i]
         }
      }

   }
}