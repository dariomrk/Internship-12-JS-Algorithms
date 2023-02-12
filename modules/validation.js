/**
 * Validates a input value against an array of validation functions
 * @param {string} input Input to validate
 * @param {Array<Function>} validationPredicates Array of validation predicates
 * @returns {boolean} Boolean indicating whether the input passed all validation checks
 */
export const validate = (input, validationPredicates) =>
    validationPredicates.every((predicate) => predicate(input))

/**
 * Contains common validation predicates
 */
export const commonValidationPredicates = {
    nonNullOrUndefined: (input) => {
        return input !== undefined && input !== null
    },
    nonEmptyString: (input) => {
        if (typeof input !== "string") return false
        return input.trim() !== ""
    },
    isNumeric: (input) => {
        if (typeof input !== "string") return false
        return !isNaN(input) && !isNaN(parseFloat(input))
    },
    isPositive: (input) => {
        if (typeof input !== "number") return false
        return input > 0
    }
}
