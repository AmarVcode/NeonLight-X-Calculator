//function for printing values
function print(n) {
    let display = document.getElementById("Calculator");
    let userinput = display.innerText;
    if (userinput === "Just Type 😎") { display.innerText = n; }
    else {
        if (n === ".") { if (userinput.includes(".") === false) { display.innerText = userinput + n; } }
        else { display.innerText = userinput + n; }}}
//function for clear
function Clear(){ 
    let display = document.getElementById("Calculator");
    let userinput = display.innerText.split("");
    userinput.pop();
    userinput=userinput.join("");
    display.innerText=userinput
}
//function for calculating
function equal(){
    let display = document.getElementById("Calculator");
    let userinput = display.innerText;
    userinput=eval(userinput);
    display.innerText=userinput;
}
//function for reset
function reset(){location.reload()}
//keys for function
function keynum(k){

    if(k==1||k==2||k==3||k==4||k==5||k==6||k==7||k==8||k==9||k==0||k=="+"||k=="-"||k=="*"||k=="/"||k=="."){
           print(k) 
    }
    else if(k=="Enter"){
            equal()
    }
    else if(k=="Backspace"){
    Clear()
    }
    else if(k=="Escape"){
        reset()
    }
}
//using keyboard as a calculator
addEventListener("keydown", e => {console.log(e.key);let key = e.key;keynum(key)})