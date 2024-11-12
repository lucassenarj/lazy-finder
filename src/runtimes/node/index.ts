import Stack from './../../components/stack.ts';
import FileSystem from './fs.ts';

const search = process.argv[2];


// TODO:
//  open dir
//  if is dir
//    check for name
//    if equals to node_modules, continue
//    else add to stack or queue
//  if file check if match with received input
//  return ds content

console.log(search);

const stack = new Stack();
const fileSystem = new FileSystem();

const path = process.cwd();

const folder = fileSystem.openFolder(path);

// console.log(folder);

for (const dir of folder) {
  if (dir.isFile()) {
    console.log(dir.name);
  }
}
/*
stack.push("one");

stack.push("two");

console.log("stack 1: ", stack);


const last = stack.pop();

console.log("last: ", last);

console.log("stack 2: ", stack);
*/
