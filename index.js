var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");

var Next1 = document.getElementById("nxt1");
var Next2 = document.getElementById("nxt2");
var Back1 = document.getElementById("bck1");
var Back2 = document.getElementById("bck2");

var Progress = document.getElementById("progress");

Next1.onclick = function(){
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    Progress.style.width = "240px"
}
Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    Progress.style.width = "120px"
}
Next2.onclick = function(){
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    Progress.style.width = "360px"
}
Back2.onclick = function(){
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    Progress.style.width = "240px"
}