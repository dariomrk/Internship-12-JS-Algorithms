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
    /**
     * @param {any} input Value to check
     * @returns {boolean} Returns true if the provided value is not undefined or null
     */
    nonNullOrUndefined: (input) => {
        return input !== undefined && input !== null
    },
    /**
     * @param {string} input Value to check
     * @returns Returns true if the provided value is not an empty string
     */
    nonEmptyString: (input) => {
        if (typeof input !== "string") return false
        return input.trim() !== ""
    },
    /**
     * @param {number | string} input Value to check
     * @returns Returns true if the provided value is numeric
     */
    isNumeric: (input) => {
        if (typeof input !== "number" && typeof input !== "string") return false
        return !isNaN(input) && !isNaN(parseFloat(input))
    },
    /**
     * @param {number | string} input Value to check
     * @returns Returns true if the provided value is greater than 0
     */
    isPositive: (input) => {
        if (typeof input !== "string" && typeof input !== "number") return false
        return input > 0
    }
}
