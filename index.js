import linkedList from "./lists.js";

let list = linkedList();
list.getLength();

list.append(5);
list.append(6);
//list.append(13);
console.log(list.getHead());
list.append(9);
list.append(10);
console.log(list.getHead());

list.prepend(4);
list.prepend(20);
list.prepend(54);
//54,20,4,5,6,9,10
list.getLength();


console.log(list.getHead());
console.log("Get Tail:");
console.log(list.getTail());
console.log("Get Index 2 = 20:");
console.log(list.atIndex(2)); // 20

console.log("Get Index 5 = 6");
console.log(list.atIndex(5));
list.getLength();
list.pop();
list.getLength();
console.log("Get Index:");
console.log(list.atIndex(5));

console.log(list.getTail());
list.pop();
console.log(list.getTail());


console.log(list.contains(4));

console.log(list.contains(77));

console.log(list.find(4));

console.log(list.find(73));

console.log(list.toString());