#! /usr/bin/env node
import inquirer from "inquirer"

// 1) Computer will generate a ramdom number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number",
}
]);
if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed right number.")
} else{ 
    console.log("OH NO! You guessed wrong number.")
}