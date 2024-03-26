#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "substraction", "multiplication", "division"],
  },
]);
console.log(answer);
//conditional statement
if (answer.operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "substraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator");
}

