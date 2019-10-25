var myForm = document.getElementById('form');
var input = document.getElementById('inp');
var result = document.getElementById('result');

myForm.addEventListener('submit', function(e){
  e.preventDefault();
  var userInput = input.value;
  result.innerHTML = '<h2 style="color: green">'+ rot13(userInput) + '</h2>';
});

function rot13(str) {
  return str.replace(/[A-Z]/g, x => String.fromCharCode((x.charCodeAt(0) % 26) + 65));
}
