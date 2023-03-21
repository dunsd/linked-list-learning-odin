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
            console.log(currentNode);
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = node(value);
            console.log(currentNode);   
            console.log(currentNode.next);
            console.log(length)
            length+=1;   
        }
        
    }

    function prepend(value) { 
        head = node(value, head)
        console.log(head);
        length+=1;
    }

    function getLength() {
        return length;
    }

    return{
        head,
        append,
        getLength,
        prepend,
    }
}

export default linkedList;