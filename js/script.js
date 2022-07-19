const input = document.querySelector("input");
const addBtn = document.querySelector("#add");
const ul = document.querySelector("ul");
const li = document.querySelector("li")
const empty = document.querySelector(".empty");

addEventListeners()
function addEventListeners(){
    addBtn.addEventListener('click', createTask);
}


function createTask(e){
    e.preventDefault();

    const text = input.value;

    if (text !== "") {
        const li = document.createElement("li");
        li.classList.add('row', 'mt-1', 'd-flex', 'border', 'border-5');
        
        const p = document.createElement("p");
        p.classList.add('text-break', 'col-8', 'col-sm-9', 'mt-1');
        p.textContent = text;
    
        li.appendChild(p);
        li.appendChild(addCheckBtn());
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        input.value = "";
        empty.style.display = "none";
      }
    }

    function addCheckBtn(){
        const checkBtn = document.createElement('a');

        checkBtn.innerHTML = '<i class="check fa-solid fa-check bg-success"></i>';
        checkBtn.classList.add('d-inline-block', 'col-1', 'mr-3', 'btn')

        checkBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement.parentElement;

            let textCompleted;
            textCompleted = item.textContent  ;
            item.textContent = 'COMPLETED TASK - ' + textCompleted;
            item.classList.add('overflow-hidden')
            checkBtn.style.display = 'none';

            
        } )
        return checkBtn;
    }

    function addDeleteBtn() {
        const deleteBtn = document.createElement("a");
      
        deleteBtn.innerHTML = "<i class='trash fa-solid fa-trash bg-danger'></i>";
        deleteBtn.classList.add('d-inline-block', 'btn', 'col-1');
      
        deleteBtn.addEventListener("click", (e) => {
          const item = e.target.parentElement.parentElement;
          ul.removeChild(item);
      
          const items = document.querySelectorAll("li");
      
          if (items.length === 0) {
            empty.style.display = "block";
          }
        });
      
        return deleteBtn;
      }


