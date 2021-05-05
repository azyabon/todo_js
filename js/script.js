const input = document.getElementById("input");
const list = document.getElementById("todolist");
const total = document.getElementById("total");
const btn = document.getElementById("btn");
let count = 0;


//проверка на нажатие enter
function handleKeyPress(e) {
    let key = e.keyCode || e.which;
    if (key === 13) {
        addElement();
    }
}

//добавление элементов
function addElement() {
    if (input.value == "") {
        return;
    } else {
        count++;
        const li = document.createElement("li");
        // const checkbox = document.createElement("input");
        const deleteElem = document.createElement("span");

        //добавление li
        li.className = "li";
        li.textContent = input.value;
        list.appendChild(li);

        //кнопка для удаления одного элемента
        deleteElem.className = "deleteElem";
        li.appendChild(deleteElem);

        //добавление чекбокса
        // checkbox.className = "check";
        // checkbox.type = "checkbox";
        // li.append(checkbox);


        //смена класса для li
        li.addEventListener("click", (e) => {
            li.classList.toggle("li-active");
        })


        // удаление элемента
        deleteElem.addEventListener("click", (e) => {
            list.removeChild(li);
            count--;
            total.textContent = `Total:${count}`;
        })

        input.value = "";
        total.textContent = `Total:${count}`;
    }
}


function clearAll() {
    list.innerHTML = "";
    total.textContent = `Total:0`;
    count = 0;
}
