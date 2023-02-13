import singleColorFruits from "../modules/singleColorFruits.js";

const sameNameAndColorFruits = singleColorFruits
    .filter((fruit) => fruit.name.toLowerCase() == fruit.color.toLowerCase())

console.log(sameNameAndColorFruits)