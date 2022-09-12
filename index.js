let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  } else {
  dropdown.classList.add('closed')    
  }
})

const green = document.getElementById('green');
const home = document.getElementById('home');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');

home.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = 'grey';
});

green.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#21ff1e';
});

blue.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#321eff';
});

yellow.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#f0f30f';
});

red.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = '#f50c08';
});
