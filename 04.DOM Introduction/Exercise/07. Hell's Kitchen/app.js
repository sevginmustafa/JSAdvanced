function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
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

      let bestAverageSalaryRestaurant = '';
      let bestAverageSalary = 0;
      let bestSalary = 0;
      let workers = '';

      for (let el in obj) {
         const currRestaurantWorkers = Object.entries(obj[el])
            .sort((a, b) => b[1] - a[1]);

         const averageSalary = currRestaurantWorkers
            .reduce((a, curr) => a + curr[1] / currRestaurantWorkers.length, 0);

         if (bestAverageSalary < averageSalary) {
            workers = '';
            bestAverageSalary = averageSalary;
            bestAverageSalaryRestaurant = el;
            bestSalary = currRestaurantWorkers[0][1];

            for (let worker of currRestaurantWorkers) {
               workers += `Name: ${worker[0]} With Salary: ${worker[1]} `;
            }
         }

         document.querySelector('#bestRestaurant p').textContent =
            `Name: ${bestAverageSalaryRestaurant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

         document.querySelector('#workers p').textContent = workers;
      }
   }
}