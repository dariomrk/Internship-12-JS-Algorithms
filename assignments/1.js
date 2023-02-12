import { calculateAverageHeight, extractHighestPerson } from "../modules/people.js"
import { promptAndValidate, promptConfirmation } from "../modules/utils.js"
import { commonValidationPredicates as cvp } from "../modules/validation.js"

const people = []
while (true) {
    const newPerson = {}

    newPerson.firstName = promptAndValidate(
        "First name: ",
        [
            cvp.nonNullOrUndefined,
            cvp.nonEmptyString
        ]
    )
    newPerson.lastName = promptAndValidate(
        "Last name: ",
        [
            cvp.nonNullOrUndefined,
            cvp.nonEmptyString
        ]
    )
    newPerson.height = Number(promptAndValidate(
        "Height: ",
        [
            cvp.isNumeric,
            cvp.isPositive
        ]
    ))

    people.push(newPerson);
    if (promptConfirmation("Stop adding people?: "))
        break;
}
const averageHeight = calculateAverageHeight(people);
const highestPerson = extractHighestPerson(people)
console.log(`Average height is ${averageHeight}cm.`)
console.log(`The highest person is ${highestPerson.firstName} ${highestPerson.lastName} at ${highestPerson.height}cm.`)
console.table(highestPerson)
