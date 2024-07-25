// LOG IN FORM
let inputEmail;
let inputPass;
let remember;

document.getElementById('subBtn').onclick = function(){

   inputEmail = document.getElementById('inputBar').value;
   inputPass = document.getElementById('inputBar1').value;
   
    console.log("Username:" + inputEmail);
    console.log("Password:" + inputPass);
    
}
