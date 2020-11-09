class Stack { 

      // Array is used to implement stack 
    constructor() 
    { 
        this.items = [];
    } 
    push(item){
        this.items.unshift(item);
    }
    pop(){
        return this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    size(){
        return this.items.length;
    }
}

module.exports.Stack = Stack;
