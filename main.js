import {DoublyLinkedList} from './DoublyLinkedList.js'

console.log("Hello world");


let myDoublyList = new DoublyLinkedList(4);
myDoublyList.push(5);
myDoublyList.push(6);
myDoublyList.push(7);

//myDoublyList.pop();
//myDoublyList.shift();
//myDoublyList.pop();
myDoublyList.unshift(3);
myDoublyList.unshift(2);
myDoublyList.unshift(2);
myDoublyList.shift();
myDoublyList.set(-1,10);

myDoublyList.insert(0,1);
myDoublyList.insert(7,8);
myDoublyList.insert(5,100);


myDoublyList.print();
myDoublyList.remove(5); 
myDoublyList.print();

myDoublyList.remove(7); 
myDoublyList.print();
myDoublyList.push(8);
myDoublyList.print();

