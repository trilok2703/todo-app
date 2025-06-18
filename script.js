document.addEventListener("DOMContentLoaded", function(){
    const btnContainer = document.getElementById("btn-container");

     if (!btnContainer) {
        console.warn("⚠️ btn-container not found in DOM.");
        return;
    }

    const addToDoBtn = createButton({
        text:"Add To Do",
        className:"btn btn-primary mt-2 me-2",
        clickCallback: add_todo,
        style:"",
        id:""
    });

    const ClearToDoBtn = createButton({
        text:"Clear To Do",
        className:"btn btn-danger mt-2",
        clickCallback: clearTodo,
        style:"",
        id:""
    });

    btnContainer.appendChild(addToDoBtn);
    btnContainer.appendChild(ClearToDoBtn);
})

function add_todo() {
    const taskInput = document.getElementById("task");
    if (!taskInput) {
        console.warn("⚠️ task input not found in DOM.");
        return;
    }

    const todoVal = taskInput.value;
    if (!todoVal.trim()) {
        alert("Task cannot be empty!");
        return;
    }

    const resultContainer = document.getElementById("result");
    if (!resultContainer){
        console.log("⚠️ 'result' not found in the DOM");
        return;
    }

    const node = document.createElement("div");
    node.className = "list-group-item list-group-item-primary mb-2";
    
    const textNode = document.createTextNode(todoVal);
    
    const delBtn = createButton({
        text: "Delete",
        className: "btn btn-danger",
        clickCallback: deleteTodo,
        style: "float:right",
        id: ""
    });
    
    const editBtn = createButton({
        text: "Edit",
        className: "btn btn-warning",
        clickCallback: editTodo,
        style: "float:right; margin-right:10px",
        id: ""
    });
    
    node.appendChild(textNode);
    node.appendChild(delBtn);
    node.appendChild(editBtn);

    resultContainer.appendChild(node);
    taskInput.value = "";
}

function clearTodo() {
    const resultContainer = document.getElementById("result");
    if (!resultContainer){
        console.log("⚠️ 'result' not found in the DOM");
        return;
    }

    resultContainer.innerHTML = "";
}

function deleteTodo(e) {
    e.target.parentElement.remove();
}

function editTodo(e) {
    const parentEle = e.target.parentElement;

    if (parentEle.querySelector("#edit-todo")) return;

    const updateContainer = document.createElement("div");
    
    const inputEle = createInput({
        className: "form-control mt-4 mb-2",
        type: "text",
        placeholder:"Edit the text",
        id:"edit-todo"
    });
    
    const updateBtn = createButton({
        text: "Update",
        className: "btn btn-success",
        clickCallback: updateTodo,
        style: "",
        id: "update-btn"
    });
    
    const closeBtn = createButton({
        text: "Close",
        className: "btn btn-danger",
        clickCallback: closeEdit,
        style: "",
        id: ""
    });
    
    updateContainer.appendChild(inputEle);
    updateContainer.appendChild(updateBtn);
    updateContainer.appendChild(closeBtn);

    parentEle.appendChild(updateContainer);
}

function updateTodo(e) {
    const parentEle = e.target.parentElement;
    const editTodoInput = parentEle.querySelector("#edit-todo");
    const updatedVal = editTodoInput.value;
    parentEle.parentElement.firstChild.textContent = updatedVal;

    parentEle.remove();
}

function closeEdit(e) {
    e.target.parentElement.remove();
}
