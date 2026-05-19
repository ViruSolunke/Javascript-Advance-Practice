/*
In this lab, you will build an inventory management program that will allow you to add, update,
ind and remove products from the inventory. You will use an array of objects to represent your inventory,
where each object will have name and quantity as the keys.
*/

const inventory = [];

function findProductIndex(productName) {
  const name = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) { // If the name of the product at index i matches the provided product name (ignoring case), return the index i
      return i;
    }
  }

  return -1; // If no product with the given name is found in the inventory, return -1 to indicate that the product does not exist in the inventory
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name); // Call the findProductIndex function with the lowercase name of the product to check if it already exists in the inventory. The function will return the index of the product if it exists, or -1 if it does not exist.

  if (index !== -1) {
    inventory[index].quantity += product.quantity; // If the product already exists in the inventory (index is not -1), update the quantity of the existing product by adding the quantity of the new product to it. This is done by accessing the product at the found index in the inventory array and incrementing its quantity property by the quantity of the new product.
    console.log(name + " quantity updated");
  } else {
    inventory.push({ // If the product does not exist in the inventory (index is -1), add the new product to the inventory array. This is done by pushing a new object with the name and quantity of the product into the inventory array.
      name: name,
      quantity: product.quantity
    });

    console.log(name + " added to inventory");
  }
}

function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name); 

  if (index === -1) {
    console.log(name + " not found");
    return;
  }

  const product = inventory[index];
 
  if (product.quantity < quantity) { // If the quantity of the product in the inventory is less than the quantity to be removed, it means there is not enough stock to fulfill the removal request. In this case, a message is logged to the console indicating that there are not enough pieces of the product available, along with the remaining quantity of the product in the inventory. The function then returns early without making any changes to the inventory.
    console.log(
      "Not enough " +
        name +
        " available, remaining pieces: " +
        product.quantity
    );
  } else {
    product.quantity -= quantity; // If there is enough stock to fulfill the removal request, the quantity of the product in the inventory is reduced by the specified quantity. This is done by accessing the product at the found index in the inventory array and decrementing its quantity property by the quantity to be removed.

    console.log(
      "Remaining " +
        name +
        " pieces: " +
        product.quantity
    );

    if (product.quantity === 0) { // If the quantity of the product in the inventory becomes zero after the removal, it means that the product is out of stock and should be removed from the inventory array. 
      inventory.splice(index, 1); // This is done by using the splice method on the inventory array, which removes the product at the found index from the array. The first argument to splice is the index of the product to be removed, and the second argument is the number of elements to remove (in this case, 1).
    }
  }
}

console.log(findProductIndex("flour"))
console.log(addProduct({name: "FLOUR", quantity: 5}))