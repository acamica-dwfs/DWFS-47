let newTodo = document.getElementById('todo');
let addBtn = document.getElementById('addTodo');
let todoList = document.getElementById('todoList');

function addTodo(){
    let li = document.createElement('li');
    li.textContent = newTodo.value;
    //Agregado event listener de tachado y destachado
    li.addEventListener('click', ()=> {
        if(li.style.textDecoration === 'line-through' ){
            li.style.textDecoration = 'none';
        }else{
            li.style.textDecoration = 'line-through';
        }
    });
    todoList.appendChild(li);
    //Borrado contenido del input después de pasarlo al li
    newTodo.value = "";
}

addBtn.addEventListener('click', () => {
    addTodo();
});

newTodo.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') { //
        addTodo();
    }
});
