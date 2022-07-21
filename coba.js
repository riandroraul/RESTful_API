const mhs = {
  nama: 'reymond',
  nim: '191011450014',
  kelas: '04TPLE001'
}

// destructuring object
const {nama, nim, kelas} = mhs

const fruit = ['mangga', 'apel', 'jeruk'] 

// destructruing array
const [mangga, ...apelNjeruk] = fruit

const string1 = 'test3'
const string2 = 'test2'
const string3 = string1 || string2

// console.log(apelNjeruk)

// const arr = (tiga, empat5, ...arrayAngka) => {
//   return arrayAngka
// }


// console.log(arr(3,45,34,4,5,6,6,6,7,7,7,7,43,3,3,3,2,4,4,4))

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
let arr2;
let angka = [1,2,3,4,5,6]
// arr2 = [...arr1];  // Change this line
// arr3 = {...arr2}
// console.log(...angka);

const [dua, satu, ...sisanya] = angka

// console.log(satu, dua, sisanya)

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES
// Only change code above this line

// console.log(highTomorrow)

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday, high: highToday } } = LOCAL_FORECAST
// console.log(highToday)

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   const [a,b, ...arr] = list
//   return arr;
// }
// const arr = removeFirstTwo(source);

// console.log(arr)


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line
// console.log(half(stats))

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList (arr) {
  // Only change code below this line
  const failureItems = []; 
  for (let i = 0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// console.log(failuresList)

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};

// console.log(createPerson('ignas', 20, 'men'))

