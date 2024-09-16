// function calculate(operation) {
//     var num1 = Number(document.getElementById('num1').value);
//     var num2 = Number(document.getElementById('num2').value);
//     var result;

//     if (isNaN(num1) || isNaN(num2)) {
//         result = "Please enter valid numbers!";
//     } 
//     else {
//         switch (operation) {
//             case '+':
//                 result = num1 + num2;
//                 break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//             case '*':
//                 result = num1 * num2;
//                 break;
//             case '/':
//                 if (num2 === 0) {
//                     result = "Cannot divide by 0!";
//                 } else {
//                     result = num1 / num2;
//                 }
//                 break;
//             default:
//                 result = "Invalid Operation!";
//         }
//     }

//     document.getElementById('result').innerText = "Result: " + result;
// }

// //        function calculate(operation) {
//             // Input values ko fetch karo
//             var num1 = document.getElementById("num1").value;
//             var num2 = document.getElementById("num2").value;

//             // Validate inputs manually, check agar empty ya string hai
//             if (num1 === "" || num2 === "") {
//                 document.getElementById("result").innerText = "Please enter both numbers!";
//                 return;
//             }

//             // Number ke tor par calculation perform karte hain bina parseFloat ke
//             var n1 = +num1; // '+' operator ka use karke string ko number mein convert karte hain
//             var n2 = +num2;

//             var result = "";

//             // Perform operations using `if-else` without switch
//             if (operation === "+") {
//                 result = n1 + n2;
//             } else if (operation === "-") {
//                 result = n1 - n2;
//             } else if (operation === "*") {
//                 result = n1 * n2;
//             } else if (operation === "/") {
//                 // Division ke liye check karna zaroori hai ke denominator 0 na ho
//                 if (n2 === 0) {
//                     result = "Cannot divide by zero!";
//                 } else {
//                     result = n1 / n2;
//                 }
//             } else {
//                 result = "Invalid operation!";
//             }

//             // Result ko show karo
//             document.getElementById("result").innerText = result;
//         }

function calculate(operation) {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var result;

    if (num1 === "" || num2 === "") {
        document.getElementById("result").innerText = "Please enter both numbers!";
        return;
    }

    var n1 = +num1;
    var n2 = +num2;

    if (operation === "+") {
        result = n1 + n2;
    }
    else if (operation === "-") {
        result = n1 - n2;
    }
    else if (operation === "*") {
        result = n1 * n2;
    }
    else if (operation === "/") {
        if (n2 === 0) {
            result = "Cannot divide by zero!";
        }
        else {
            result = n1 / n2;
        }
    }
    else {
        result = "Invalid operation!";
    }

    document.getElementById("result").innerText = `Result is: ${result}`;
}