/input block/
var firstname = "Михаил"
var secondname = "Лахметкин"
document.getElementById("Data").textContent = firstname+" "+secondname;

document.getElementById("print").addEventListener("click", function() {
    firstname = document.getElementById("key").value;
    secondname = document.getElementById("key2").value;
    document.getElementById("Data").textContent = firstname+" "+secondname; 
});

/button for random change background/
var BackGNum = 0;  
window.onload = function() {
    var button = document.getElementById('input_button_bg_change');
    var body = document.getElementsByTagName('body')[0];
    var colors = ['white', 'grey', 'blue', 'red', 'green', '#aaa', '#FFAACC', 'rgb(122,111,110)'];
    button.onclick = function() {
        var a = Math.floor(Math.random() * colors.length);
        if(a == BackGNum){
          BackGNum = a + 1;
          if(BackGNum >= colors.length){
            BackGNum = 0;
          }
        }
        else{
          BackGNum = a;
        }
        body.style.backgroundColor = colors[BackGNum];
    };
};

