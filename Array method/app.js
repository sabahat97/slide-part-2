let names = ["sara", "zara", "saba", "zoya"];
console.log(names.length); // output 4
//remove last element
names.pop();
//add new last element
names.push("Sabahat");
//remove first element
names.shift();
//) add first element
names.unshift("Fara");
// output fara zara saba sabahat
names.splice(2, 0, "noor");
const a = names.slice(1);
console.log(a);
export {};
