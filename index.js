#! /usr/bin/env node
import inquirer from "inquirer";
//!1. if you want make game tricky let computer generate random number,for this you can use Math.floor(Math.random() * 20 + 1) method.
const randomNumber = Math.floor(Math.random() * 20 + 1);
//!2. {if random number is given by you than ask user to guess the number and print if you guessed right or wrong. const randomNumber = 13;}
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 and 20:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number");
}
else {
    console.log("Sorry! You guessed the wrong number");
}
