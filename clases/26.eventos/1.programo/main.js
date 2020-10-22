/**
 * https://majoledesma.github.io/js-notes/
 */

//CLICK - con .addEventListener() y on{Evento}
let clickBox = document.getElementById("clickBox");
clickBox.addEventListener('click', () => {
    clickBox.classList.toggle("color");
});
let clickBoxOn = document.getElementById("clickBoxOn");
clickBoxOn.onclick = () => {
    clickBoxOn.classList.toggle("color");
};

//DOUBLE CLICK - con .addEventListener() y on{Evento}
let dbclickBox = document.getElementById("dbclickBox");
dbclickBox.addEventListener('dblclick', () => {
    dbclickBox.classList.toggle("color");
});

let dbclickBoxOn = document.getElementById("dbclickBoxOn");
dbclickBoxOn.ondblclick = () => {
    dbclickBoxOn.classList.toggle("color");
};

//.removeEventListener
let createBoxBtn = document.getElementById("createBoxBtn");
let stopBoxesBtn = document.getElementById("stopBoxesBtn");
let boxCtn = document.getElementById("boxCtn");

createBoxBtn.addEventListener('click', createBox, false);

stopBoxesBtn.addEventListener('click', () => {
    createBoxBtn.removeEventListener('click', createBox, false);
});

function createBox (){
    let box = document.createElement('div');
    box.classList.add('square');
    boxCtn.appendChild(box);
}

//event.target
let subitemList = document.getElementById("subitemList");

subitemList.addEventListener('click', (event) => {
    //Objeto de evento
    if(event.target.className === 'item2'){
        if(event.target.children[0].style.display === "block"){
            event.target.children[0].style.display = "none";
        } else {
            event.target.children[0].style.display = "block";
        }
    }
});

//.stopPropagation()
let bigBoxWith = document.getElementById("bigBoxWith");
let squareWith = document.getElementById("squareWith");
let parWith = document.getElementById("parWith");

bigBoxWith.addEventListener('click', () => {
    alert('clickeaste el rectángulo');
});
squareWith.addEventListener('click', () => {
    alert('clickeaste el cuadrado');
    event.stopPropagation();
});
parWith.addEventListener('click', () => {
    alert('clickeaste el texto');
    event.stopPropagation();
});

let bigBoxWithout = document.getElementById("bigBoxWithout");
let squareWithout = document.getElementById("squareWithout");
let parWithout = document.getElementById("parWithout");

bigBoxWithout.addEventListener('click', () => {
    alert('clickeaste el rectángulo');
});
squareWithout.addEventListener('click', () => {
    alert('clickeaste el cuadrado');
});
parWithout.addEventListener('click', () => {
    alert('clickeaste el texto');
});



//MOUSEOVER Y MOUSEOUT
let items = document.getElementsByClassName('item');
for(let i = 0; i < items.length; i++){
    //MOUSEOVER
    items[i].addEventListener('mouseover', () => {
        items[i].style.backgroundColor = "#ff4f4f";
    })
    //MOUSEOUT
    items[i].addEventListener('mouseout', () => {
        items[i].style.backgroundColor = "#ffffff";
    })
}

// MOUSEUP
let mouseBox = document.getElementById("mouseBox");
mouseBox.addEventListener('mousedown', () => {
    mouseBox.textContent = "MouseDOWN";
    mouseBox.classList.add("color");
});
//MOUSEDOWN
mouseBox.addEventListener('mouseup', () => {
    mouseBox.textContent = "MouseUP";
    mouseBox.classList.remove("color");
});

//COPY
let textCutCopy = document.getElementById("textCutCopy");
textCutCopy.addEventListener('copy', (event)=>{
    //Objeto de evento
    event.clipboardData.setData('text/plain', "Copiaste un texto");
    event.preventDefault();
});
//PASTE
textCutCopy.addEventListener('cut', (event)=>{
    event.clipboardData.setData('text/plain', "Cortaste un texto");
    event.preventDefault();
});
//PASTE
let inputPaste = document.getElementById("inputPaste");
inputPaste.addEventListener('paste', (event)=>{
    //.preventDefault();
    //En este caso evita que se pueda pegar texto
    event.preventDefault();
});


//FOCUS y BLUR
let inputFocus = document.getElementById("inputFocus");
let passRecomendation = document.getElementById("passRecomendation");
//FOCUS
inputFocus.addEventListener('focus', ()=>{
    inputFocus.style.border = "2px solid #5a5ada";
    passRecomendation.textContent = "*Se recomienda que la contraseña tenga al menos 8 caracteres y una combinación de mayúsculas, minúsculas y números";
})
//BLUR
inputFocus.addEventListener('blur', ()=>{
    inputFocus.style.border = "1px solid black";
    passRecomendation.textContent = "";
})

//KEYDOWN y KEYUP
//Observar la diferencia sobre todo con las teclas que no son enter y backspace
//Keydown imprime en "keytext" una letra menos que keyup

let key = document.getElementById("key");
let keyText = document.getElementById("keyText");

//KEYUP
key.addEventListener("keyup", event => {
    //Objeto de evento
    if (event.which === 13 || event.keyCode === 13) {
        //Al presionar enter
        keyText.textContent = ':)';
    } else if (event.which === 8 || event.keyCode === 8){
        //Al presionar Backspace
        keyText.textContent = ':(';
    } else {
        //Acción para el resto de las teclas
        keyText.textContent = key.value;
    }
});

let key2 = document.getElementById("key2");
let keyText2 = document.getElementById("keyText2");

//KEYDOWN
key2.addEventListener("keydown", event => {
    if (event.which === 13 || event.keyCode == 13) {
        //Al presionar enter
        keyText2.textContent = ':)';
    } else if (event.which === 8 || event.keyCode == 8){
        //Al presionar Backspace
        keyText2.textContent = ':(';
    } else {
        //Acción para el resto de las teclas
        //Esta acción se realiza ni bien se presiona la tecla y antes de que aparezca en el input, por ende la última tecla no se envia con el value al keytext
        keyText2.textContent = key2.value;
    }
});
