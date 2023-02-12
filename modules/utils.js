import { validate } from "./validation.js"
/**
 * Prompts a user to input `yes` or `no`
 * @param {string} message Displays the message to the user
 * @returns {boolean} Returns a boolean indicating user intent
 */
export const promptConfirmation = (message) => {
    while (true) {
        const userInput = prompt(`${message} [yes/no]:`).trim().toLowerCase()
        if (userInput === "yes") return true
        else if (userInput === "no") return false
        else console.log("Invalid input! Please try again...")
    }
}

/**
 * Prompts user input and validates said input against an array of validation functions
 * @param {string} message Message to display
 * @param {string} validationErrorMessage Error message to display when validation fails
 * @param {Array<Function>} validationPredicates Array of validation predicates
 * @returns {string} Validated user input
 */
export const promptAndValidate = (
    message,
    validationPredicates,
    validationErrorMessage = "Validation failed. Please try again..."
) => {
    while (true) {
        const userInput = prompt(message, "").trim()
        if (validate(userInput, validationPredicates)) return userInput;
        console.error(validationErrorMessage)
    }
}