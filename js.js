/*
https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

/*var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("mouseenter",function () {
    console.log("mouse entered !")
})*/


var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.getElementsByTagName("ul")[0];
var listItems = document.getElementsByTagName("li");
var delbutton = document.getElementsByClassName("del");

function inputLength(){
    if(input.value.length > 0 )
        return true;
    return false;
}
function deleteitem(){
    this.parentElement.remove();
}
function createListItem(){
    var li = document.createElement("li");
    li.append(document.createTextNode(input.value));
    input.value = '';
    var dbutton = document.createElement("button");
    dbutton.append(document.createTextNode("Delete"));
    li.append(dbutton);
    ul.append(li);
    dbutton.classList.add("del");
    Togle();
    deleteListener();
}
function addItemAfterClick(){
    if(inputLength()) {
        createListItem();
    }
}
function addItemAfterPress(e) {
    if(inputLength() && e.which === 13) {
        createListItem();
    }
}
function isDone(){
    this.classList.toggle("done");
}

button.addEventListener("click",addItemAfterClick);
input.addEventListener("keypress",addItemAfterPress);
function Togle(){
    for(var i=0;i<listItems.length;i++){
        listItems[i].addEventListener("click",isDone);
    }
}
Togle();
function deleteListener() {
    for (var i = 0; i < delbutton.length; i++) {
        delbutton[i].addEventListener("click", deleteitem);
    }
}
deleteListener();