let x = 2;
let radius;
let circumference;
const pi = 3.14159;

document.getElementById("sub").onclick = function(){
    radius = document.getElementById("rad").value;
    circumference = x*pi*radius;
    document.getElementById("myh2").textContent = circumference;
}