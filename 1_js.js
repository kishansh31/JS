document.write("Hello world");
alert("First alert");

var x = 16;
var str = "Test String";

var res = x+str;

document.write("</br></br></br>Result is : "+res);

var testVar = 12+20+"Hello Test String";
document.write("</br></br></br>New result is : "+testVar);

document.write("</br></br></br>New result is : "+12+4+"New Test String");

var x1 = 34.00;
var x2 = 34;
var x3 = 3.14;

document.write("</br></br></br>"+x1 + "<br>" + x2 + "<br>" + x3);

var x = 5;
var y = 5;
var z = 6;

document.write("<br><br><br> Results are : <br><br>"+(x == y)+"<br>"+(x == z));

var cars = ["Saab","Volvo","BMW"];
document.getElementById("demo").innerHTML = cars[0];



function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = txt;
}