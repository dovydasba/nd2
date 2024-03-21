// Faile pateikiami duomenys masyvas turintis 4, 4 elementų.Pavyzdžiui:
// 1 2 3 5
// 5 4 4 7
// 3 2 1 9
// 2 3 4 5
// Parašykite programą kuri apverstų(pasuktų) masyvą, rezultatas atvaizduojamas ekrane:
// 1 5 3 2
// 2 4 2 3
// 3 4 1 4
// 5 7 9 5


const fs = require('fs');

const array = fs.readFileSync('mas.csv', 'utf8').split('\n').map(row => row.trim().split(' '));
const columns = array[0].map((_, colIndex) => array.map(row => row[colIndex]));

console.log(columns);

// const transposedArray = array[0].map((_, colIndex) => array.map(row => row[colIndex]));
// transposedArray.forEach(row => console.log(row.join(' ')));