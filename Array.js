const language = ['dart','flutter', 'Rest API', 'Getx', 'firebase']

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