const input = document.getElementById('#input');

console.log(input)

eventlisteners();
function eventlisteners(){
    input.addEventListener('click', formValue)
}


function formValue(e){
    e.preventDefault();
    console.log(e.target.value);
}

console.log('hola')