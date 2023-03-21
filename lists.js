import node from "./node.js"

const linkedList = () => {
    let head = null;
    let length = 0;

    function append(value) {
        if(head === null){
            head = node(value);
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
        }
        console.log(length)
        length+=1;
    }

    // function prepend(value) {
        
    // }

    function getLength() {
        return length;
    }

    return{
        head,
        append,
        getLength,

    }
}

export default linkedList;