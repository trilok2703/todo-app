// === Helper Functions ===
function createButton({
    text = "",
    className = "",
    clickCallback = null,
    style = "",
    id = "",
}) {
    const btn = document.createElement("button");
    if (text) btn.textContent = text;
    if (className) btn.className = className;
    if (style) btn.style = style;
    if (id) btn.id = id;
    if (typeof clickCallback === "function") {
        btn.addEventListener("click", clickCallback);
    }
    return btn;
}

function add_todo() {
    const todoVal = document.getElementById("task").value;

    if (!todoVal.trim()) {
        alert("Task cannot be empty!");
        return;
    }

    const node = document.createElement("div");
    node.className = "list-group-item list-group-item-primary mb-2";
    const textNode = document.createTextNode(todoVal);
    node.appendChild(textNode);

    const delBtn = createButton({
        text: "Delete",
        className: "btn btn-danger",
        clickCallback: deleteTodo,
        style: "float:right",
        id: "",
    });

    node.appendChild(delBtn);

    const editBtn = createButton({
        text: "Edit",
        className: "btn btn-warning",
        clickCallback: editTodo,
        style: "float:right; margin-right:10px",
        id: "",
    });

    node.appendChild(editBtn);

    document.getElementById("result").appendChild(node);
    document.getElementById("task").value = "";
}

function clearTodo() {
    document.getElementById("result").innerHTML = "";
}

function deleteTodo(e) {
    e.target.parentElement.remove();
}

function editTodo(e) {
    const parentEle = e.target.parentElement;

    if (parentEle.querySelector("#edit-todo")) return;

    const updateContainer = document.createElement("div");
    parentEle.appendChild(updateContainer);

    const inputEle = document.createElement("input");
    inputEle.className = "form-control mt-4 mb-2";
    inputEle.id = "edit-todo";
    inputEle.placeholder = "Edit the selected todo";

    updateContainer.appendChild(inputEle);

    const updateBtn = createButton({
        text: "Update",
        className: "btn btn-success",
        clickCallback: updateTodo,
        style: "",
        id: "update-btn",
    });

    updateContainer.appendChild(updateBtn);

    const closeBtn = createButton({
        text: "Close",
        className: "btn btn-danger",
        clickCallback: closeEdit,
        style: "",
        id: "",
    });

    updateContainer.appendChild(closeBtn);
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
