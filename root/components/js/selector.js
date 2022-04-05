const first_left = document.getElementById('left_arrow_first');
const first_right = document.getElementById('right_arrow_first');
const second_left = document.getElementById('left_arrow_second');
const second_right = document.getElementById('right_arrow_second');
const third_left = document.getElementById('left_arrow_third');
const third_right = document.getElementById('right_arrow_third');
const first_block = document.getElementById('first_block');
const second_block = document.getElementById('second_block');
const third_block = document.getElementById('third_block');
first_left.addEventListener('click', function() {
      first_block.style.display = "none";
      third_block.style.display = "grid";
});

first_right.addEventListener('click', function() {
      first_block.style.display = "none";
      second_block.style.display = "grid";
});

second_left.addEventListener('click', function() {
      first_block.style.display = "grid";
      second_block.style.display = "none";
});

second_right.addEventListener('click', function() {
      third_block.style.display = "grid";
      second_block.style.display = "none";
});

third_left.addEventListener('click', function() {
      second_block.style.display = "grid";
      third_block.style.display = "none";
});

third_right.addEventListener('click', function() {
      first_block.style.display = "grid";
      third_block.style.display = "none";
});
