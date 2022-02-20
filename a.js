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
/*
const calendar = [];

const day1 = {
    date: new Date("Febuary 20, 2022"),
    event: ["birthday", "party"],
}

const day2 = {
    date: new Date("Feb 21, 2022"),
    event: ["stuff"],
}

calendar = [day1, day2];*/

document.addEventListener("DOMContentLoaded", function(event) {
    let a = localStorage.getItem("Events");
    document.querySelector("#aa").value = a;
    /*for (const day of calendar) {
        if (day.date === new Date()) {
            console.log(day.event);
        }
        console.log(day.date);
    }*/
});

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        let a = document.querySelector("#aa").value;
        v.push(a);
        localStorage.setItem("Events", v); 
        for (const i of v) {
            if (i.substring(0, 6) === "Feb 20") {
                console.log("Today: " + i.substring(7));
            }
        }
    }
});
