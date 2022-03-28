const delFunc = document.getElementById('btndelete'); //variable to bring the delete button
const dot = document.getElementById('btndot');//variable to bring the dot button
const zero = document.getElementById('btnzero');//variable to bring the number zero button
const one = document.getElementById('btnone');//variable to bring the number one button
const two = document.getElementById('btntwo');//variable to bring the number two button
const three = document.getElementById('btnthree');//variable to bring the number three button
const four = document.getElementById('btnfour');//variable to bring the number four button
const five = document.getElementById('btnfive');//variable to bring the number five button
const six = document.getElementById('btnsix');//variable to bring the number six button
const seven = document.getElementById('btnseven');//variable to bring the number seven button
const eight = document.getElementById('btneight');//variable to bring the number eight button
const nine = document.getElementById('btnnine');//variable to bring the number nine button
const plus = document.getElementById('btnplus');//variable to bring the  plus operator button
const minus = document.getElementById('btnminus');//variable to bring the subtraction operator button
const slash = document.getElementById('btnslash');//variable to bring the division operator button
const times = document.getElementById('btntimes');//variable to bring the multiplication operator button
const resetFunc = document.getElementById('btnreset');//variable to bring the reset button
const equalFunc = document.getElementById('btnequal');//variable to bring the equal button
const OutputBar = document.getElementById('outputBar');//variable to bring the the output bar button
var mathToBeDone = ''; //this is the control variable where the math will be stored until it is solved


//functionality setting bellow
delFunc.addEventListener('click', function() {  //delete button functionality
        OutputBar.innerHTML = OutputBar.innerHTML.slice(0, OutputBar.innerHTML.length-1);//this remove the last item on the output bar
        mathToBeDone = OutputBar.innerHTML //this sends the current value on output bar to the control variable
})

resetFunc.addEventListener('click', function() { //reset button functionality
        OutputBar.innerHTML = ''; //this cleans the output bar
        mathToBeDone = ''; //this cleans the control variable
        resolve = ''; //this cleans the answer variable
})
zero.addEventListener('click', function() { //number zero functionality
        OutputBar.innerHTML += zero.value;//this add to the output bar the button's value
        mathToBeDone += zero.value;//this sends the button's value to the control variable
});

one.addEventListener('click', function() { //number one functionality
        OutputBar.innerHTML += one.value;//this add to the output bar the button's value
        mathToBeDone += one.value;//this sends the button's value to the control variable
});

two.addEventListener('click', function() { //number two functionality
        OutputBar.innerHTML += two.value;//this add to the output bar the button's value
        mathToBeDone += two.value;//this sends the button's value to the control variable
});

three.addEventListener('click', function() { //number three functionality
        OutputBar.innerHTML += three.value;//this add to the output bar the button's value
        mathToBeDone += three.value;//this sends the button's value to the control variable
});

four.addEventListener('click', function() { //number four functionality
        OutputBar.innerHTML += four.value;//this add to the output bar the button's value
        mathToBeDone += four.value;//this sends the button's value to the control variable
});

five.addEventListener('click', function() { //number five functionality
        OutputBar.innerHTML += five.value; //this add to the output bar the button's value
        mathToBeDone += five.value;//this sends the button's value to the control variable
});

six.addEventListener('click', function() { //number six functionality
        OutputBar.innerHTML += six.value; //this add to the output bar the button's value
        mathToBeDone += six.value;//this sends the button's value to the control variable
});


seven.addEventListener('click', function() { //number seven functionality
        OutputBar.innerHTML += seven.value;//this add to the output bar the button's value
        mathToBeDone += seven.value;//this sends the button's value to the control variable
});

eight.addEventListener('click', function() { //number eight functionality
        OutputBar.innerHTML += eight.value;//this add to the output bar the button's value
        mathToBeDone += eight.value;//this sends the button's value to the control variable
});

nine.addEventListener('click', function() { //number nine functionality
        OutputBar.innerHTML += nine.value;//this add to the output bar the button's value
        mathToBeDone += nine.value;//this sends the button's value to the control variable
});

plus.addEventListener('click', function() { //sum operator functionality
        OutputBar.innerHTML += plus.value;//this add to the output bar the button's value
        mathToBeDone += plus.value;//this sends the button's value to the control variable
});

minus.addEventListener('click', function() { //subtraction operator functionality
        OutputBar.innerHTML += minus.value;//this add to the output bar the button's value
        mathToBeDone += minus.value;//this sends the button's value to the control variable
});

slash.addEventListener('click', function() { //division operator functionality
        OutputBar.innerHTML += slash.value;//this add to the output bar the button's value
        mathToBeDone += slash.value;//this sends the button's value to the control variable
});

times.addEventListener('click', function() { //multiplication operator functionality
        OutputBar.innerHTML += times.value;//this add to the output bar the button's value
        mathToBeDone += times.value;//this sends the button's value to the control variable
});

dot.addEventListener('click', function() { //dot button functionality
        OutputBar.innerHTML += dot.value;//this add to the output bar the button's value
        mathToBeDone += dot.value; //this sends the button's value to the control variable
});
equalFunc.addEventListener('click', function() { //equal button functionality
        let resolve = eval(mathToBeDone);//this turns the control variable into the math answer
        OutputBar.innerHTML = ''; //this cleans the output bar before showing the answer
        OutputBar.innerHTML = resolve; //this shows on the html bar the math answer
});

