var h1 = document.querySelector("h1");
var button = document.getElementById("b1");
var enterButton = document.getElementById("b2");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


button.addEventListener("click",rand);

function rand()
{
    h1.className = "title";
}
function clickEvent()
{
    if(input.value.length> 0)
    {
        var  li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
    
}

function keypressEvent(event)
{
    if(input.value.length > 0 && event.keyCode === 13)
    {
        var  li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
}


enterButton.addEventListener("click",clickEvent);

input.addEventListener("keypress",keypressEvent);