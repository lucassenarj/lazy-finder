import Stack from './../../components/stack.ts';

const stack = new Stack();

stack.push("one");

stack.push("two");

console.log("stack 1: ", stack);


const last = stack.pop();

console.log("last: ", last);

console.log("stack 2: ", stack);
