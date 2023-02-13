import multicoloredFruits from "../modules/multicoloredFruits.js";

const fruitsContainingYellow = multicoloredFruits.filter((fruit) => fruit.color.includes('yellow'))

console.log(fruitsContainingYellow)