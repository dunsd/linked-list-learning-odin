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
        return length;
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
        while(currentIndex<index) {
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        return currentNode;
    }


    return{
        head,
        append,
        getLength,
        prepend,
        getHead,
        getTail,
        atIndex,
    }
}

export default linkedList;