/** 
 * Calculates the average height of an array of people
 * @param {Array<person>} people Array of people
 * @returns {number} Average height
 */
export const calculateAverageHeight = (people) =>
    people.reduce((currentSum, person) => currentSum + person.height, 0)
    / people.length

/**
 * Extracts the highest person in the array of people
 * @param {Array<person>} people Array of people
 * @returns {person} Highest person in the array
 * If there are multiple people of the same height the first one is returned
 */
export const extractHighestPerson = (people) => {
    return people.reduce((currentHighest, currentPerson) => {
        if (currentPerson.height > currentHighest.height)
            return currentPerson
        return currentHighest
    }, people[0]);
}