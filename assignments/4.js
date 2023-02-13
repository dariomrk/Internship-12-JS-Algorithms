import multicoloredFruits from "../modules/multicoloredFruits.js";

const redFruits = multicoloredFruits.map((fruit) => {
    fruit.color = fruit.color.map((color) => {
        if (color === 'yellow') return 'red'
        return color
    })
    return fruit
})

console.log(multicoloredFruits)
console.log(redFruits)