// Etape 1
let myDiv = document.getElementById("content");

// Etape 2
function logEvent(e) {
console.log(e.target);
}

// Etape 3
myDiv.addEventListener("click", logEvent);


// Etape 6
function changeBorder(e) {
e.target.style.border = "1px solid red";
}

myDiv.addEventListener("click", changeBorder);
