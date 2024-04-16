#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.magenta.bold("\n\t Welcome to code with Quratulain\n"));
while (conditions) {
    let addtask = await inquirer.prompt([
        { name: "task",
            type: "input",
            message: chalk.green("Enter your new task:")
        }
    ]);
    todolist.push(addtask.task);
    console.log(`${addtask.task} task addes into todo list sucefully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: chalk.green("Do you want to add more task?"),
            default: "False",
        }
    ]);
    conditions = addMoreTask.addMore;
}
console.log("your updated todo list :", todolist);
