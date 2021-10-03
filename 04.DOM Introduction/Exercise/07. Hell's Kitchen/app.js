function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      const bestRestaurant = document.querySelector('#bestRestaurant span')
      let obj = {};

      for (let el of input) {
         let [restaurant, workers] = el.split(' - ');
         for (let worker of workers.split(', ')) {
            const [name, salary] = worker.split(' ');

            if (obj[restaurant] == undefined) {
               obj[restaurant] = {};
            }

            obj[restaurant][name] = Number(salary);
         }
      }
      
      let bestAverageSalary = 0;

      for (let el in obj) {
         const dfv = Object.entries(obj[el]);

         console.log(dfv);
      }
   }

   
}