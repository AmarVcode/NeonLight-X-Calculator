let display = document.getElementById("answer");
//console.log(display);





























// ------Reset Functionality -------------------------------------------------------------------->

let Resetbtn = document.getElementById("reset");
//console.log(Resetbtn);

function reset() {
    console.log("Bro U Clicked Reset Button")
    display.innerHTML = null;
    display.innerText = "Just Chill Bro!"
}

Resetbtn.addEventListener("click", reset)