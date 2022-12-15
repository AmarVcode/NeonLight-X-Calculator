console.log("working");
let S, s, C, c, result, O, o;

//Function Printing Number!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function print(n) {
    S = document.getElementById("currentnumber");
    s = S.innerText;
    switch (s) {
        case "Current Number":
            console.log("working");
            result = n;
            S.innerText = result;
            break;
        default:
            result = s + n;
            console.log(result);
            S.innerText = result;
    }
}

//Function Printing Point!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function printpoint(n) {
    S = document.getElementById("currentnumber");
    s = S.innerText;
    switch (s) {
        case "Current Number":
            console.log("working");
            break;
        default:
            if (s.includes(".") === false) {
                result = s + n;
                console.log(result);
                S.innerText = result;
            }
            else {
                console.log("already");
            }
    }
}
//Function Printing Operator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function printoperator(n) {
    console.log("working", n)
    O = document.getElementById("operator");
    O.innerText = n;
    S = document.getElementById("currentnumber");
    s = S.innerText;
    C = document.getElementById("previousnumber");
    c = C.innerText;

    switch (s) {
        case "Current Number":
            console.log("do Nothing")
            break;
        default:
            C.innerText = s;
            S.innerText = "Current Number";

    }




}

//reset Function
function reset() {
    console.log("Calculator Reset, Done")
    console.log(this.Operator);
    window.location.reload();
}

//clear Function
function Clear() {
    console.log("Clear Works");
    S = document.getElementById("currentnumber");
    s = S.innerText;

if(s==="Current Number" || s===""){
    console.log("Already Cleared");
    S.innerText="Current Number";
}
else{
        s = s.split("");
    s.pop();
    s = s.join("");
    S.innerText = s;
}





}

//function for geting answer
function equal() {
    S = document.getElementById("currentnumber");
    s = S.innerText;

    C = document.getElementById("previousnumber");
    c = C.innerText;

    O = document.getElementById("operator");
    o = O.innerText;


    if (s !== "Current Number" && o !== "operator" && c !== "Previous Number") {
        console.log(s, c, o)
        s = Number(s);
        c = Number(c);

        switch (o) {
            case "+":
                result = c + s;
                S.innerText = result;
                break;
            case "-":
                result = c - s;
                S.innerText = result;
                break;
            case "/":
                result = c / s;
                S.innerText = result;
                break;
            default:
                result = c * s;
                S.innerText = result;
                break;
        }
    }
}








//using keyboard as a calculator
addEventListener("keydown", e => {
    console.log(e.key)
    let key = e.key;

    switch (key) {
        case "1":
            print(1);
            break;
        case "2":
            print(2);
            break;
        case "3":
            print(3);
            break;
        case "4":
            print(4);
            break;
        case "5":
            print(5);
            break;
        case "6":
            print(6);
            break;
        case "7":
            print(7);
            break;
        case "8":
            print(8);
            break;
        case "9":
            print(9);
            break;
        case "0":
            print(0);
            break;
        case ".":
            printpoint(".");
            break;
        case "Backspace":
            Clear();
            break;
        case "Enter":
            equal();
        case "+":
            printoperator("+")
            break;
        case "-":
            printoperator("-")
            break;
        case "*":
            printoperator("*")
            break;
        case "/":
            printoperator("/")
            break;
        case "Escape":
            reset()
    }

})