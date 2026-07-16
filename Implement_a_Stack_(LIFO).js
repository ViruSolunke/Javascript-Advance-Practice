// Create an empty stack
function initStack() {
  return {
    collection: []
  };
}

// Add element at the top
function push(stack, element) {

  // push() adds item at the end of array
  stack.collection.push(element);
}

// Remove top element
function pop(stack) {

  // pop() removes last element
  return stack.collection.pop();
}

// View top element without removing it
function peek(stack) {

  return stack.collection[stack.collection.length - 1];
}

// Check stack is empty or not
function isEmpty(stack) {

  return stack.collection.length === 0;
}

// Remove all elements
function clear(stack) {

  stack.collection = [];
}