import Queue from './../queue';

const item1 = {
  name: 'components',
  path: '/src/components',
}

const item2 = {
  name: 'types',
  path: '/src/types',
}

describe('Queue', () => {
  const queue = new Queue();

  test('add two item to queue', () => {
    // enqueue first item
    queue.enqueue(item1);

    expect(queue.length()).toBe(1);

    // enqueue second item
    queue.enqueue(item2);
    expect(queue.length()).toBe(2);
  });

  test('dequeue items', () => {
    // dequeue item
    const dItem1 = queue.dequeue();
    expect(dItem1).toBe(item1);
    expect(queue.length()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    
    // dequeue another item
    const dItem2 = queue.dequeue();
    expect(dItem2).toBe(item2);
    expect(queue.length()).toBe(0);
  });

  test('queue should be empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });
});
