import singleColorFruits from "../modules/singleColorFruits.js";

const notReadyForSaleIndexes = []
const suggestedBasket = singleColorFruits.map((fruit, index) => {
    if (!fruit.readyToSell) notReadyForSaleIndexes.push(index)
    else return fruit
}).filter((value) => value)

console.log("Your basket:", singleColorFruits)
console.log("Not ready for sale indexes:", notReadyForSaleIndexes)
console.log("Suggested basket:", suggestedBasket)
