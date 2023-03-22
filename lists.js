import node from "./node.js"

const linkedList = () => {
    let head = null;
    let length = 0;

    function append(value) {
        if(head === null){
            prepend(value);
        }
        else{
            let currentNode = head;
            while(currentNode.next !== null){
                console.log(`current = ${currentNode}`);
                console.log(head);
                currentNode = currentNode.next;
            }
            currentNode.next = node(value);
            length+=1;   
        }
    }

    function prepend(value) {
        head = node(value, head) 
        length+=1;
    }

    function getLength() {
        console.log("Length: " + length);
    }

    function getHead() {
        console.log("Head:");
        return head;
    }

    function getTail() {
        if(head === null) {
            return"No list found";
        }
        else{
            let currentNode = head;
            while(currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
        
    }

    function atIndex(index) {
        if(head === null) {return "No list found"}
        if(index<= 0){ return head}
        let currentIndex = 0;
        let currentNode = head;
        while(currentIndex<index-1) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        return currentNode;
    }

    function pop() {
        let penIndex = atIndex(length-1);
        penIndex.next = null;
        length -= 1;
    }

    function contains(value) {
        let currentHead = head;
        while(currentHead.next != null) {
            if(currentHead.value === value) { return true}
            currentHead = currentHead.next;
        }
        return false;
    }

    function find(value) {
        let currentHead = head;
        let index = 0;
        while(currentHead.next != null) {
            if(currentHead.value === value) {return index}
            currentHead = currentHead.next;
            index += 1;
        }
        return false;

    }

    function toString(){
        let str = "";
        let currentNode = head;
        while(currentNode) {
            str += `(${currentNode.value}) -> `;
            currentNode = currentNode.next;
        }
        return (str + "null");

    }

    function insertAt(value, index) {
        if(index < 0 || index > length) {return console.log("Not a valid index.")}
        if(index === 0) {
            prepend(value);
            return;
        }
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;
        while(currentIndex<index-1) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        previousNode.next = node(value, currentNode);
        length += 1;
    }

    function removeAt(index) {
        if(index < 0 || index > length) {return console.log("Not a valid index.")}
        if(index === 0) {
            head = head.next;
            length -= 1;
            return;
        }
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;
        while(currentIndex<index-1) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        previousNode.next = currentNode.next;
        length -= 1;
    }

    return{
        append,
        getLength,
        prepend,
        getHead,
        getTail,
        atIndex,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }
}

export default linkedList;