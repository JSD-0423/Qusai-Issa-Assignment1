class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}



export class DoublyLinkedList {

    constructor(value) {
        this.head = new Node (value);
        this.length = 1;
        this.tail = this.head;
    }

    push(val){
        let newNode = new Node(val);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
        return true;
    }

    pop(){
        if(this.size === 1 ){
            this.head = null;
            this.length = 0;
            
        }
        else if (this.size === 0){
            console.log("Can't pop from empty list!")
            
        } else {
            this.tail.previous.next = null;
            this.tail = this.tail.previous;
            this.length--;
        }

        
    }

    shift(){
        if(this.size === 1 ){
            this.head = null;
            this.length = 0;
            
        }
        else if (this.size === 0){
            console.log("Can't shift from empty list!")
            
        } else {
            this.head.next.previous = null;
            this.head = this.head.next;
            this.length--;
        }
    }

    unshift(val){
        this.head.previous = new Node(val);
        this.head.previous.next = this.head;
        this.head = this.head.previous;
        this.length++;
    }

    get size() {
        return this.length;
    }

    getValue(index){
        if(index >= this.length || index < 0) return undefined;
        let current = this.head;
        for(let i=0;i<index;i++){
            if(!current) return null;
            current = current.next;
        }
        return current.value;
    }

    get(index){
        if(index >= this.length || index < 0) return undefined;
        let current = this.head;
        for(let i=0;i<index;i++){
            if(!current) return null;
            current = current.next;
        }
        return current;
    }

    set(index, val){
        let node = this.get(index);
        if(node){
            node.value = val;
            return true;
        }
        return false;
    }

    insert(index,val){
        let myNode = this.get(index);
        if(index===0){
            this.unshift(val);
            return true;
        } else if(index == this.size){
            this.push(val);
            return true;
        }
        else if(myNode){
            let newNode = new Node(val);
            newNode.previous = myNode.previous;
            newNode.next = myNode;
            myNode.previous.next = newNode;
            myNode.previous = newNode;
            this.length++;
            return true;

        }
    }

    remove(index){
        let deleteNode = this.get(index);
        if(index===0){
            this.head = this.head.next;
            this.head.previous = null;
            this.length--;
        }
        else if(index === this.length-1){
            this.tail.previous.next = null;
            this.tail = this.tail.previous;
            this.length--;
        }
        else if(deleteNode){
            deleteNode.previous.next =deleteNode.next;
            deleteNode.next.previous = deleteNode.previous;
            this.length--;
        }


    }

    print(){
        console.log("the length of the list is: "+ this.size);

        let current = this.head;
        let str = "";
        while(current.next){
            str += current.value+", ";
            current = current.next;
        }
        console.log(str+ current.value);
        return true;
    }


}

