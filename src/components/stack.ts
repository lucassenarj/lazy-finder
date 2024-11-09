export default class Stack {
  private arr: string[] = [];

  push(name: string) {
    this.arr.push(name);
  }

  pop() {
    return this.arr.pop();
  }
}
