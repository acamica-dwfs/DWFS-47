let input = document.getElementById("todo");
let boton = document.getElementById("addTodo");
let ul = document.getElementById("todoList");

let addTodo = () => {  // funtion addTodo() {}
    let valor = input.value;
    if(valor) {
        let li = document.createElement("li");
        li.textContent = valor;
        li.addEventListener('click', ()=> {
            if(li.style.textDecoration === 'line-through' ){
                li.style.textDecoration = 'none';
            }else{
                li.style.textDecoration = 'line-through';
            }
        });
        ul.appendChild(li);
    } else  {
        alert("agrege un valor")
    }
}

boton.addEventListener("click", addTodo)

input.addEventListener("keyup", event => {
    if (event.key === 'Enter') {
        addTodo();
    }
})



