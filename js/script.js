var firstname = "Ноа"
var secondname = "Андерсон"
document.getElementById("Data").textContent = firstname+" "+secondname;   
    
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("deactive");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var keyBox = document.search.key;
 

function onchange(e){
    var printBlock = document.getElementById("printBlock");
    firstname = e.target.value;
    document.getElementById("Data").textContent = firstname+" "+secondname; 
}
function onblur(e){
    var text = keyBox.value.trim();
    if(text==="")
        keyBox.style.borderColor = "red";
    else
        keyBox.style.borderColor = "green";
}
function onfocus(e){
    keyBox.style.borderColor = "blue";
}
keyBox.addEventListener("change", onchange);
keyBox.addEventListener("blur", onblur);
keyBox.addEventListener("focus", onfocus);

window.onload = function() {
    var button = document.getElementById('input_button_bg_change');
    var body = document.getElementsByTagName('body')[0];
    var colors = ['blue', 'grey', 'black', 'white', 'red', 'green', '#aaa', '#FFAACC', 'rgb(122,111,110)'];
    button.onclick = function() {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
};

