let aish=document.createElement("p");
aish.textContent="I'm chitti 2.0";
document.getElementById("vasi").appendChild(aish);
aish.style.color="red";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
setTimeout(() => {
    let re = document.getElementsByClassName("list")[4];
    if(re) {
        re.remove();
    }
},2000);


let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is a heading added by javascript!";
newHeading.style.color = "purple";
newHeading.style.fontSize = "24px";
document.body.appendChild(newHeading);

setTimeout(() => {
    let newText = document.createElement("p");
    newText.textContent = "This is after 3 seconds of execution!";
    newText.style.color = "green";
    document.body.appendChild(newText);
},3000);


    let tagText = document.createElement("p");
    tagText.textContent = "This text is appened to the tag!";
    tagText.style.color = "lightblue";
    document.getElementById("vasi").appendChild(tagText);

let myList = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    let listitems = document.createElement("li");
    listitems.textContent = "Item " + i;
    listitems.style.color = "orange";
    listitems.style.fontSize ="18px";
    myList.appendChild(li);
    document.body.appendChild(myList);
}
