const language = ['dart', 'flutter', 'Rest API', 'Getx', 'firebase']

console.log(language);
console.log(language.toString());
console.log(language[3]);
console.log(language[1]);

//Add Item
language[5] = 'supabase';
console.log(language);
console.log(language.length);


//First item added
console.log(language.unshift('basic Dart'));
console.log(language);

//Delete fist Item
language.shift();
console.log(language);

//Last Item delete
language.pop();
console.log(language);


//Last Item added
language.push();
console.log(language);


//javascript concat

const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8];
const x = a.concat(b);
console.log(x);

//javascript flat

const n = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(n.flat());