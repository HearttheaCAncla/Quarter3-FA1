var fn = prompt("First name?");
var ln = prompt("Last name?");
var yr = prompt("Birth year?");
var age = 2025 - yr;

document.getElementById("fire").innerHTML = "Hello " + fn + " " + ln + "! " +
                                        "How does it feel to be " + age + 
                                        " years old?";

