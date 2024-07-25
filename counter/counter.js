let count = 0;

const decreasebtn = document.getElementById('decreasebtn');
const resetbtn = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');
const labelCount = document.getElementById('labelCount');

decreasebtn.onclick = function(){
    count--;
    labelCount.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    labelCount.textContent = count;
}
increasebtn.onclick = function(){
    count++;
    labelCount.textContent = count;
}
document.getElementById('randombtn').onclick = function(){
    count = Math.floor(Math.random() * 100) + 1;
    labelCount.textContent = count;
}

var x;

while(x != "2" ){

    x = prompt('1 + 1 = ?');
    console.log(x);


if (x == '2'){
    count = 'imissu haha';
    labelCount.textContent = count;
} else {
    count = 'ENKKKKKK';
    labelCount.textContent = count;
}
}