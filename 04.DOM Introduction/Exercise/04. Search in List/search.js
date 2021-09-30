function search() {
   const towns = document.querySelectorAll("#towns li");
   const searchText = document.getElementById("searchText").value;
   let result = 0;


   for (let i = 0; i < towns.length; i++) {
      if (towns[i].textContent.includes(searchText)) {
         document.querySelectorAll("#towns li")[i].style.textDecoration = "underline";
         document.querySelectorAll("#towns li")[i].style.fontWeight = "bolder";
         result++;
      }
   }

   document.getElementById("result").textContent = result + ' matches found';
}
