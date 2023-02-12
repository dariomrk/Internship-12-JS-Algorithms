import { calculateAverageHeight } from "../modules/people.js";
import { promptAndValidate } from "../modules/utils.js";
import { commonValidationPredicates as cvp } from "../modules/validation.js";

const numberOfPeople = promptAndValidate(
    "Input the number of people: ",
    [cvp.isNumeric, cvp.isPositive]
)

const people = []

for (let i = 0; i < numberOfPeople; i++) {
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

    newPerson.eyeColor = promptAndValidate(
        "Eye color: ",
        [
            cvp.nonNullOrUndefined,
            cvp.nonEmptyString,
            (input) => ["brown", "blue", "green"].includes(input.toLowerCase())
        ]
    ).toLowerCase()

    newPerson.hairColor = promptAndValidate(
        "Hair color:",
        [
            cvp.nonNullOrUndefined,
            cvp.nonEmptyString,
        ]
    ).toLowerCase()

    newPerson.height = Number(promptAndValidate(
        "Height: ",
        [
            cvp.isNumeric,
            cvp.isPositive
        ]
    ))

    people.push(newPerson);
}

const higherThanAverage =
    [...people.filter((person) => person.height > calculateAverageHeight(people))]
const sameEyeAndHairColor =
    [...higherThanAverage.filter((person) => person.eyeColor.toLowerCase() == person.hairColor.toLowerCase())]

console.table(sameEyeAndHairColor)