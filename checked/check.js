const rememberMe = document.getElementById('myCheck');
const yesBox = document.getElementById('myRad');
const noBox = document.getElementById('myRad1');
const subBtn = document.getElementById('subBtn');
const myH1 = document.getElementById('myh1');
const myH2 = document.getElementById('myh2');

subBtn.onclick = function(){

    if (rememberMe.checked){
        myH1.textContent = "OKAY";
    } else {
        myH1.textContent = "I WILL NOT REMBER YOU";
    }

    if (yesBox.checked){
        myH2.textContent = "YES NAMAN";
    } else if (noBox.checked){
        myH2.textContent = "NO NAMAN";
    } else {
        myH2.textContent = "KAOG TAE";
    }
}