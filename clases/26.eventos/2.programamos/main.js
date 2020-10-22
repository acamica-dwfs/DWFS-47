/**
 *
 Crea un input de texto con un botón al lado.
 Al presionar el botón o un enter escribe el contenido del input en un <li>
 Añade un nuevo <li> con cada enter del usuario.
 * @type {HTMLElement}
 */


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
    if (event.key === 'Enter') { // event.keyCode === 13
        addTodo();
    }
});
