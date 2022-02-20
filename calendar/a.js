/*document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('input');
    button.type = 'button';
    button.id = 'submit';
    button.value = 'Submit';
    button.className = 'btn';
 
    button.onclick = function() {
        function load()
        {
            document.getElementById('dycalendar').addEventListener('click', clicked);
        }
    };
 
    var container = document.getElementById('container');
    console.log(button);
}, false);

function clicked(event)
{   
    
    console.log(event);
}*/

function showbox()
{
    if (document.querySelector("#inputbox").style.display === "none") {
        document.querySelector("#inputbox").style.display = "block";
    }
    else {
        hidebox();
    }
}

function hidebox()
{
    document.querySelector("#inputbox").style.display = "none";
}

let v = [];

document.addEventListener("DOMContentLoaded", function(event) {
    let a = localStorage.getItem("Events");
    document.querySelector("#aa").value = a;
    console.log(a);
});

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        let a = document.querySelector("#aa").value;
        v.push(a);
        localStorage.setItem("Events", v); 
        console.log(a);
    }
});