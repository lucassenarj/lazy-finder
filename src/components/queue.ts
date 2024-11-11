import type { TFolder, TFolderContainer } from "./../types/folder";

export default class Queue {
  private size: number;
  private head: TFolderContainer | null;

  constructor() {
    this.size = 0;
    this.head = null;
  }

  enqueue(folder: TFolder): void {
    const newFolder: TFolderContainer = {
      next: null,
      value: folder,
    };

    if (!this.head) {
      this.head = newFolder;
      this.size = this.size + 1;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newFolder;
    this.size = this.size + 1;
  }

  dequeue(): TFolder {
    const tmp = this.head;
  
    // If queue is empty
    if (!tmp) {
      throw Error("Queue is empty");
    }

    // If queue has only one element
    if (!tmp.next) {
      this.size = 0;
      this.head = null;
      return tmp.value;
    }
    
    // if queue has multiple elements
    this.head = tmp.next;
    this.size = this.size - 1;
    return tmp.value;
  }

  isEmpty(): boolean {
    return !this.size;
  }
}
