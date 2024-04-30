import inquirer from "inquirer";
import chalk from "chalk";

// ------------------------TAKING STUDENT INFO--------------------------
let info = await inquirer.prompt([
  {
    name: "studentName",
    type: "input",
    message: "Enter the name of Student: ",
  },

  {
    name: "courses",
    type: "input",
    message: "Enter Course Which you want to enroll: ",
  },
]);

// ------------------------STUDENT DATA VARIABLE--------------------------
let student = {
  name: [info.studentName],
  rollNumber: Math.floor(10000 + Math.random() * 10000),
  courses: [info.courses],
  Balance: 100000,
  feeStatus: 0,
};

// ------------------------PRINTING DATA--------------------------
console.log(`\t Name : ${student.name}`);
console.log(`\t Roll Number : ${student.rollNumber}`);
console.log(`\t Courses : ${student.courses}`);
console.log(`\t Course Fee : 100,000`);
console.log(`\t Balance : ${student.Balance}`);
console.log(`\t Fee Paid : Rs ${student.feeStatus}`);

// ------------------------FEE PAYMENT--------------------------
{
  if (student.feeStatus != 100000) {
    console.log("\t Your Fee is UNPAID!");

    let pay = await inquirer.prompt({
      name: "paying",
      type: "number",
      message: "Enter the Amount to Pay :",
    });

    console.log(`\t User Paid Rs ${pay.paying}`);
    student.feeStatus += pay.paying;
    student.Balance -= pay.paying;
    console.log(`\t Your Current Balance is : ${student.Balance}`);
  }
}


// --------------------------- WHEN FEE IS PAID --------------------------

if ((student.feeStatus = 100000)) {
  console.log("\t Your Fee is PAID and You can Join the Class :)");
}
else{
console.log(chalk.red('FEE IS NOT PAID!'))
}