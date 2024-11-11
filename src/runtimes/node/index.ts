import Stack from './../../components/stack.ts';
import FileSystem from './fs.ts';

const stack = new Stack();
const fileSystem = new FileSystem();

const path = process.cwd();

const folder = fileSystem.openFolder(path);

console.log(folder);

stack.push("one");

stack.push("two");

console.log("stack 1: ", stack);


const last = stack.pop();

console.log("last: ", last);

console.log("stack 2: ", stack);
