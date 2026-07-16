// Create a new empty linked list
function initList() {
  return {
    head: null,   // First node of the list
    length: 0     // Number of nodes
  };
}

// Check whether the list is empty
function isEmpty(list) {
  return list.length === 0;
}

// Add a new element at the end of the list
function add(list, element) {

  // Create a new node
  const node = {
    element: element,
    next: null
  };

  // If list is empty, new node becomes the head
  if (isEmpty(list)) {
    list.head = node;
  } else {

    // Start from the head
    let current = list.head;

    // Move until the last node
    while (current.next !== null) {
      current = current.next;
    }

    // Connect last node to new node
    current.next = node;
  }

  // Increase list size
  list.length++;
}

// Remove the first occurrence of an element
function remove(list, element) {

  let current = list.head;
  let previous = null;

  // Search for the element
  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  // Element not found
  if (current === null) {
    return;
  }

  // Removing first node
  if (previous === null) {
    list.head = current.next;
  } else {

    // Skip current node
    previous.next = current.next;
  }

  list.length--;
}

// Check if an element exists
function contains(list, element) {

  let current = list.head;

  while (current !== null) {

    if (current.element === element) {
      return true;
    }

    current = current.next;
  }

  return false;
}

// Get element at a specific index
function getAt(list, index) {

  // Invalid index
  if (index < 0 || index >= list.length) {
    return undefined;
  }

  let current = list.head;
  let count = 0;

  // Move until desired index
  while (count < index) {
    current = current.next;
    count++;
  }

  return current.element;
}

// Insert element at a specific index
function insertAt(list, index, element) {

  // Invalid index
  if (index < 0 || index > list.length) {
    return;
  }

  const node = {
    element,
    next: null
  };

  // Insert at beginning
  if (index === 0) {
    node.next = list.head;
    list.head = node;
    list.length++;
    return;
  }

  let current = list.head;
  let previous = null;
  let count = 0;

  while (count < index) {
    previous = current;
    current = current.next;
    count++;
  }

  // Insert between previous and current
  previous.next = node;
  node.next = current;

  list.length++;
}

// Remove node at a specific index
function removeAt(list, index) {

  if (index < 0 || index >= list.length) {
    return;
  }

  // Remove first node
  if (index === 0) {
    list.head = list.head.next;
    list.length--;
    return;
  }

  let current = list.head;
  let previous = null;
  let count = 0;

  while (count < index) {
    previous = current;
    current = current.next;
    count++;
  }

  // Skip current node
  previous.next = current.next;

  list.length--;
}

// Remove all nodes
function clear(list) {

  list.head = null;
  list.length = 0;
}