
/* VARIABLES */
const divFather = document.querySelector('.div-father');
const btnAdd = document.querySelector('#add');
const mainDiv = document.querySelector('#second-container');
const input = document.querySelector('#input');
const emptyTasks = document.querySelector('.empty');
const reset = document.querySelector('#task-delete');

console.log(reset);


let texto;
let tasks = [];

/* EVENTLISTENERS */
cargarListeners ()
function cargarListeners (){

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
          if(e.keyCode == 13) {
            e.preventDefault();
          }
        }))
      });
    
    
    divFather.children[0].addEventListener('blur', readTask);
    btnAdd.addEventListener('click', createTask);

/*     reset.addEventListener('click', deleteElement); */
    
}

/* FUNCIONES */
function readTask(e) {
    e.preventDefault();
    
    texto = e.target.value;

    tasks = [...tasks, texto]
    console.log(tasks);
}



function createTask(e){
    e.preventDefault();

   

    /* Crear elementos */
    const p = document.createElement('p');

    const divCheck = document.createElement('div');
    const aCheck = document.createElement('a');
    const iCheck = document.createElement('i');

    const divTrash = document.createElement('div');
    const iTrash = document.createElement('i');
    const aTrash = document.createElement('a');

    const secondDiv = document.createElement('div');

    /* Clases textos y estilos */


    p.textContent = texto;
    p.classList.add('col-9', 'col-lg-10', 'mt-1');

    divCheck.classList.add('child-div-icon', 'col-1', 'btn');
    aCheck.setAttribute('href', '#');
    iCheck.classList.add('check', 'fa-solid', 'fa-check', 'bg-success');
   
    divTrash.classList.add('col-1', 'btn');
    aTrash.setAttribute('href', '#');
    aTrash.setAttribute('id', 'task-delente');
    iTrash.classList.add('trash', 'fa-solid', 'fa-trash', 'bg-danger');

    secondDiv.classList.add('row', 'border', 'border-5');
   
    /* Insertar HTML */
    aCheck.appendChild(iCheck);
    divCheck.appendChild(aCheck);

    
    aTrash.appendChild(iTrash);
    divTrash.appendChild(aTrash);

    
    secondDiv.appendChild(p);
    secondDiv.appendChild(divCheck);
    secondDiv.appendChild(divTrash);

    mainDiv.appendChild(secondDiv);


    clearForm();
    emptyMain();
}

function clearForm() {
    divFather.children[0].value = ''
}


/* Empty main */

function emptyMain() {
    if(tasks.length < 0){
        emptyTasks.classList.remove('d-none');
    }
    if(tasks.length >= 0){
        emptyTasks.classList.add('d-none');
    }
}


function limpiarHTML(){
    mainDiv.innerHTML = '';
}




function deleteElement(e){
    console.log('Eliminar')

}