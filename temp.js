var Picnum=1;

showPics(Picnum);

var button1 = document.getElementById("click1");
var button2 = document.getElementById("click2");

button1.addEventListener("click", decrement);
button2.addEventListener("click", increment);

function decrement() {
    Picnum-=1;
    showPics(Picnum);
}

function increment() {
    Picnum+=1;
    showPics(Picnum);
}

function showPics(n) {
    var arr=document.getElementsByClassName("mypics");
    if(n>arr.length){ Picnum=1;}
    if(n<1){Picnum=arr.length;}

    for (var i = 0; i < arr.length; i++)
    {
        arr[i].classList.add("temp1");
    }
    arr[Picnum-1].classList.remove("temp1");
}



