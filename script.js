//Name response
function ShowHelloMessage() {
    var name = document.getElementById("myname");
    document.getElementById("hellomessage").innerHTML = name.value + " is a very nice name!";
}
document.getElementById("mybutton").onclick = ShowHelloMessage;
