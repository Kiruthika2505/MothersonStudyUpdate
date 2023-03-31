let map1 = new Map();

map1.set('name', 'Kiruthika');

map1.set('age', '21');

// looping through Map

for (let [key, value] of map1) {

    console.log(key + '- ' + value);

}