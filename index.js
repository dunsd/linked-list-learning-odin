import linkedList from "./lists.js";

let list = linkedList();

list.append(5);
list.append(6);
//list.append(13);
console.log(list.getHead());
list.append(9);
list.append(9);
console.log(list.getHead());

list.prepend(4);
list.prepend(20);
list.prepend(54);

console.log(list.getLength());


console.log(list.getHead());
console.log("Get Tail:");
console.log(list.getTail());
console.log("Get Index:");
console.log(list.atIndex(2));

console.log("Get Index:");
console.log(list.atIndex(0));

console.log("Get Index:");
console.log(list.atIndex(5));
