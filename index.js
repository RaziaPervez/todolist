#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 5566;
let myBalance = 10000;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("\n\t CORRECT PIN CODE! \n");
    let amount = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fastcash"],
        },
    ]);
    if (amount.operation === "Check Balance") {
        console.log(`"your balance is:"${myBalance}`);
    }
    else if (amount.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "Withdraw",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        let money = (myBalance);
        if (amountAnswer.Withdraw <= myBalance) {
            console.log(`"your remaining amount is" ${myBalance -= amountAnswer.Withdraw}`);
        }
        else if (amountAnswer.Withdraw > myBalance) {
            console.log(`"Unable to process transaction! Your total balance is"${money}`);
        }
    }
    else if (amount.operation === "Fastcash") {
        let fastcash = await inquirer.prompt([
            {
                name: "cashAns",
                message: "choose amount a you want to cashfast ",
                type: "list",
                choices: [500, 1000, 4000, 5000, 10000]
            }
        ]);
        let balance = myBalance -= fastcash.cashAns;
        console.log(`"your remaining amount is" ${balance}`);
    }
}
else {
    console.log("\n\t YOUR ENTER INVALID PIN \n");
}
