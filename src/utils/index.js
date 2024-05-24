/**
 * This function calculate the total price of  a new order. 
 * @param {Array} products cartproduct: Array of objects
 * @returns {Number} totalPrice
 */


export const totalPrice = (products) => {

    let sum = 0;
    products.forEach(product => sum += product.price)

    return sum.toFixed(2)
    ;
}