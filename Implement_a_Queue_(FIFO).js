// Create an empty queue
function initQueue() {
  return {
    collection: []
  };
}

// Display queue
function print(queue) {
  console.log(queue.collection);
}

// Add element at the back
function enqueue(queue, element) {

  // push() adds at the end
  queue.collection.push(element);
}

// Remove element from the front
function dequeue(queue) {

  // shift() removes first element
  return queue.collection.shift();
}

// Return first element without removing it
function front(queue) {

  return queue.collection[0];
}

// Number of elements
function size(queue) {

  return queue.collection.length;
}

// Check queue is empty
function isEmpty(queue) {

  return queue.collection.length === 0;
}