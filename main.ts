#! /usr/bin/env/node
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let todos :string [] = [];
let condition = true;
while (condition) {
    let answers = await inquirer.prompt ([
        {
        name : "todo",
        type : "input",
        message : "What you want to add in your todos?",
        default : "Pray, Eat, Sleep, Work, Exercise, Study, Read, Write, Listen",
        Choices : ["Pray", "Eat", "Sleep", "Work", "Exercise", "Study", "Read", "Write", "Listen"]
    },
    {
        name : "AddMore",
        type : "confrim",
        message : "Do you want to add more in your todos?",
        default : "yes/No",
        Choices : ["yes", "No"]

    }
]) 
    
        todos.push(answers.todo);
        condition = answers.AddMore
        console.log(todos);
 } 
 if (condition == false) {
    console.log("Your todos are: ", todos);
}else {(condition == true)
 console.log("Your todos are: ", todos);
} 
if (`InRamdan == true && 
    (todos.includes("Pray") || todos.includes("Prayer")) && 
    (todos.includes("Eat") || todos.includes("Eating")) && 
    (todos.includes("Sleep") || todos.includes("Sleeping")) && 
    (todos.includes("Work") || todos.includes("Working")) && 
    (todos.includes("Exercise") || todos.includes("Exercising")) && 
    (todos.includes("Study") || todos.includes("Studying")) && 
    (todos.includes("Read") || todos.includes("Reading")) && 
    (todos.includes("Write") || todos.includes("Writing")) && 
    (todos.includes("Listen") || todos.includes("Listening")) && Muslims fast for 30 days`)
    {console.log("Your todos are: ", todos);
} else{
    console.log("THANKYOU for using todo list...")
}
