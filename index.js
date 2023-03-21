import linkedList from "./lists.js";

let list = linkedList();
console.log(list.getLength());
list.append(5);
list.append(6);
console.log(list.getLength());
list.prepend(4);

console.log(list.getLength());
