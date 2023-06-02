var firstname = "Михаил"
var secondname = "Лахметкин"
document.getElementById("Data").textContent = firstname+" "+secondname;   
   

/input block/
var keyBox = document.search.key;
function onchange(e){
    var printBlock = document.getElementById("printBlock");
    firstname = e.target.value;
    document.getElementById("Data").textContent = firstname+" "+secondname; 
}
keyBox.addEventListener("change", onchange);

var keyBox2 = document.search.key2;
function onchange2(e){
    var printBlock = document.getElementById("printBlock");
    secondname = e.target.value;
    document.getElementById("Data").textContent = firstname+" "+secondname; 
}
keyBox2.addEventListener("change", onchange2);

/button for random change background/
window.onload = function() {
    var button = document.getElementById('input_button_bg_change');
    var body = document.getElementsByTagName('body')[0];
    var colors = ['blue', 'grey', 'white', 'red', 'green', '#aaa', '#FFAACC', 'rgb(122,111,110)'];
    button.onclick = function() {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};

