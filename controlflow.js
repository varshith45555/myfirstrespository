// Example for if,else,and elseif stmnts
let age= 18;
if (age<18) {
    console.log("you are a minor");
}
else if(age >= 18 && age < 65) {
     console.log("you are an adult");
}
else {
    console.log("you are a senior citizen")
}

//Example of 'switch' statements
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
         break;
    case 2:
        console.log("Tuesday");
         break;
    case 3:
        console.log("wednesday");
         break;
    case 4:
        console.log("Thursday");
         break;
    case 5:
        console.log("Friday"); 
         break;
    case 6:
        console.log("Saturday");
         break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid day")       
}

//Example of 'while' loop
let j=0;
while (j<5) {
    console.log("While loop Iteration:",j);
    j++;
}
console.log("\n");

//Example of 'dowhile' loop
let k=0;
while (k<5) {
    console.log("doWhile loop Iteration:",k);
    k++;
}
