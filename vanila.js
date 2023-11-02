let calculation = '';

function  operatorHandle(operator, value) {
    let result = calculation.substr(calculation.length-2);

if (result === operator) {
    calculation = calculation;
} else {


calculation = calculation + value;
}
    
display();
}

function valueHandle(value) {
calculation = calculation + value;
display();

}


function display() {
document.querySelector(".getting").value = calculation;
}
