function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const input = document.querySelector("#inputs textarea");                  //get a reference to the user input from the textArea
   const bestRestaurantRef = document.querySelector("#bestRestaurant p");     //get a reference to the output 
   const workersRef = document.querySelector("#workers p");

   //-------------------------------------------------------------------------------------------------
   function onClick() {
      const data = JSON.parse(input.value);
      const result = {};

      for (let el of data) {
         let [restaurantName, workersList] = el.split(" - ");
         if (!result.hasOwnProperty(restaurantName)) {
            result[restaurantName] = {                      //create the object
               averageSalary: 0,
               bestSalary: 0,
               workers: []
            };
         }

         //create the worker list 
         const workerData = workersList.split(", ");

         //concat new workers 
         const newWorkers = createWorkerList(workerData)
         result[restaurantName].workers = concatWorkers(result[restaurantName].workers, newWorkers);

         //calculate the salaries 
         const restaurantSalaryData = calculateSalaries(result[restaurantName].workers);
         result[restaurantName].averageSalary = restaurantSalaryData.averageSalary;
         result[restaurantName].bestSalary = restaurantSalaryData.bestSalary;

         //find the best restaurant
         const [bestRestaurantName, bestRestaurantData] = findBestRestaurant(result);

         //output the restaurants
         bestRestaurantRef.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantData.averageSalary.toFixed(2)} Best Salary: ${bestRestaurantData.bestSalary.toFixed(2)}`;

         let buff = "";
         bestRestaurantData.workers.sort((a, b) => b.salary - a.salary).forEach(x => {
            buff += `Name: ${x.name} With Salary: ${x.salary} `
         });

         workersRef.textContent = buff.trim();
      }

      // -----------------------------------helper functions-----------------------------------------------
      function createWorkerList(data) {
         let result = [];
         for (let el of data) {
            let [workerName, salary] = el.split(" ");
            salary = Number(salary);
            const worker = { name: workerName, salary: salary };
            result.push(worker);
         }
         return result;
      }

      function calculateSalaries(data) {
         const result = {
            averageSalary: 0,
            bestSalary: 0
         }
         let sum = 0;
         for (let el of data) {
            let { name, salary } = el;
            salary = Number(salary);
            if (result.bestSalary < salary) {
               result.bestSalary = salary;
            }
            sum += salary;
         }
         result.averageSalary = sum / data.length;
         return result;
      }

      function concatWorkers(currentWorkerList, newWorkerList) {
         return currentWorkerList.concat(newWorkerList);
      }

      function findBestRestaurant(restaurants) {
         return Object.entries(restaurants).sort((a, b) => b[1].averageSalary - a[1].averageSalary)[0];
      }
   }
}