
//ASSIGNMENT

var letter;
var i; //outer-loop
var k; //inner-loop

while (!letter) {
    letter = prompt("Enter a character.");
}

for (i = 0; i < 10;  i += 1) { //big loop
    for (k = 0;  k <= i; k += 1) { //small loop
        document.write(letter);
    }  
    document.write("<br>");
}
