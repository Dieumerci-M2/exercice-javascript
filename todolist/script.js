//SELECTEUR
const formular = document.querySelector(".formulaire");
const button = document.querySelector(".btn");
const todo_list = document.querySelector(".todo_list");
//ECOUTEUR
button.addEventListener("click", addTodo);
button.addEventListener("click", removemodTodo);
//FONCTION
function addTodo(event) {
    event.preventDefault();
    //Todo Div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo")
        // CREATION DE LA LIST
    const liste = document.createElement("li");
    liste.classList.add("todo_list");
    liste.innerText = formular.value;
    // INSERTION DE LA LIST DANS LA DIV
    tododiv.appendChild(liste);
    // CREATION DES DEUX BUTTON (MODIFIER) & (SUPPRIMER)  
    const todobutton = document.createElement("button");
    todobutton.classList.add("btn_mod");
    todobutton.innerHTML = '<i class="fa fa-check " > </i>';
    tododiv.appendChild(todobutton);
    const todobutton2 = document.createElement("button");
    todobutton2.classList.add("btn_trash");
    todobutton2.innerHTML = '<i class="fa fa-trash " > </i>';
    tododiv.appendChild(todobutton2);
    todo_list.appendChild(tododiv);
    formular.value = "";

}

function removemodTodo(e) {
    console.log(e.target);
    /* if (item.classList[0] === "btn_trash") {;
            const todo = item.parentElement;
            tododiv.remove();
        };*/
}