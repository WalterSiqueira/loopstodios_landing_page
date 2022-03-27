const delFunc = document.getElementById('btndelete');
const dot = document.getElementById('btndot');
const zero = document.getElementById('btnzero');
const one = document.getElementById('btnone');
const two = document.getElementById('btntwo');
const three = document.getElementById('btnthree');
const four = document.getElementById('btnfour');
const five = document.getElementById('btnfive');
const six = document.getElementById('btnsix');
const seven = document.getElementById('btnseven');
const eight = document.getElementById('btneight');
const nine = document.getElementById('btnnine');
const plus = document.getElementById('btnplus');
const minus = document.getElementById('btnminus');
const slash = document.getElementById('btnslash');
const times = document.getElementById('btntimes');
const resetFunc = document.getElementById('btnreset');
const equalFunc = document.getElementById('btnequal');
const OutputBar = document.getElementById('outputBar');
var mathToBeDone = '';
delFunc.addEventListener('click', function() { 
        OutputBar.innerHTML = mathToBeDone.slice(0, mathToBeDone.length-1);
        mathToBeDone = OutputBar.innerHTML
})

resetFunc.addEventListener('click', function() {
        OutputBar.innerHTML = '';
        mathToBeDone = '';
})
zero.addEventListener('click', function() {
        console.log(zero.value);
        OutputBar.innerHTML += zero.value;
        mathToBeDone += zero.value;
        console.log(mathToBeDone);
});

one.addEventListener('click', function() {
        console.log(one.value);
        OutputBar.innerHTML += one.value;
        mathToBeDone += one.value;
        console.log(mathToBeDone);
});



two.addEventListener('click', function() {
        console.log(two.value);
        OutputBar.innerHTML += two.value;
        mathToBeDone += two.value;
        console.log(mathToBeDone);
});

three.addEventListener('click', function() {
        console.log(three.value);
        OutputBar.innerHTML += three.value;
        mathToBeDone += three.value;
        console.log(mathToBeDone);
});

four.addEventListener('click', function() {
        console.log(four.value);
        OutputBar.innerHTML += four.value;
        mathToBeDone += four.value;
        console.log(mathToBeDone);
});

five.addEventListener('click', function() {
        console.log(five.value);
        OutputBar.innerHTML += five.value;
        mathToBeDone += five.value;
        console.log(mathToBeDone);
});

six.addEventListener('click', function() {
        console.log(six.value);
        OutputBar.innerHTML += six.value;
        mathToBeDone += six.value;
        console.log(mathToBeDone);
});


seven.addEventListener('click', function() {
        console.log(seven.value);
        OutputBar.innerHTML += seven.value;
        mathToBeDone += seven.value;
        console.log(mathToBeDone);
});

eight.addEventListener('click', function() {
        console.log(eight.value);
        OutputBar.innerHTML += eight.value;
        mathToBeDone += eight.value;
        console.log(mathToBeDone);
});

nine.addEventListener('click', function() {
        console.log(nine.value);
        OutputBar.innerHTML += nine.value;
        mathToBeDone += nine.value;
        console.log(mathToBeDone);
});

plus.addEventListener('click', function() {
        console.log(plus.value);
        OutputBar.innerHTML += plus.value;
        mathToBeDone += plus.value;
        console.log(mathToBeDone);
});

minus.addEventListener('click', function() {
        console.log(minus.value);
        OutputBar.innerHTML += minus.value;
        mathToBeDone += minus.value;
        console.log(mathToBeDone);
});

slash.addEventListener('click', function() {
        console.log(slash.value);
        OutputBar.innerHTML += slash.value;
        mathToBeDone += slash.value;
        console.log(mathToBeDone);
});

times.addEventListener('click', function() {
        console.log(times.value);
        OutputBar.innerHTML += times.value;
        mathToBeDone += times.value;
        console.log(mathToBeDone);
});

dot.addEventListener('click', function() {
        console.log(dot.value);
        OutputBar.innerHTML += dot.value;
        mathToBeDone += dot.value;
        console.log(mathToBeDone);
});
times.addEventListener('click', function() {
        console.log(times.value);
        OutputBar.innerHTML += times.value;
        mathToBeDone += times.value;
        console.log(mathToBeDone);
});
times.addEventListener('click', function() {
        console.log(times.value);
        OutputBar.innerHTML += times.value;
        mathToBeDone += times.value;
        console.log(mathToBeDone);
});
times.addEventListener('click', function() {
        console.log(times.value);
        OutputBar.innerHTML += times.value;
        mathToBeDone += times.value;
        console.log(mathToBeDone);
});
