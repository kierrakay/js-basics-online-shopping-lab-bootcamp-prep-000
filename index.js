var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartItem(itemName) { 
  return { 
    itemName:itemName, 
    itemPrice:getRandomInt(1, 100)
    }
}

function addToCart(item) {  
  var item = generateCartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`
  }

function viewCart() {
 if (getCart().length===0) {
 return "Your shopping cart is empty."
 }else if(getCart().length===1) {
  //debugger
  return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
}
function removeFromCart(item) {
  // write your code here comment
}

function placeOrder(cardNumber) {
  // write your code here
}