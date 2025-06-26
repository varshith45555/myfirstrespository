document.title = "this is js";
document.getElementById("header").innerHTML = "THIS IS DOM";
document.getElementById("p").style.color = "orange";
document.body.style.backgroundColor="aqua"
document.getElementsByClassName("a")[0].innerHTML = "this is a class";
document.getElementsByClassName("a")[0].style.color="red";
document.getElementsByClassName("a")[1].style.color="blue";
document.getElementsByClassName("a")[2].style.color="darkblue";
let c=document.getElementsByClassName("b");
c[0].style.color="blue";
c[1].style.color="pink";
c[2].style.color="brown";

let elements = document.querySelectorAll(".b");
elements[0].style.color = "coral";
elements[1].style.color = "aqua";
elements[2].style.color = "green";
elements[3].style.color = "brown";

/*function changeBackground() {
   document.body.style.backgroundColor = "red";
}*/
function changeBackground() {
    if(document.body.style.backgroundColor === "blue"){
        document.body.style.backgroundColor ="yellow";
    }
    else{
        document.body.style.backgroundColor ="blue";
    }
}
function changetext () {
    document.getElementById("clg").innerHTML ="CMRK,CMRCET";
    document.getElementById("clg").style.backgroundColor="coral";
    document.getElementById("clg").style.color="white";
    document.getElementById("clg").style.fontSize="30px";
}