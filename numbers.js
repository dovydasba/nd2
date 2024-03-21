const fs = require('fs');

fs.readFile('numbers.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const numbers = data.match(/\d/g);
    const count = {};

    numbers.forEach(num => {
        count[num] = count[num] ? count[num] + 1 : 1;
    });

    console.log(count);
});