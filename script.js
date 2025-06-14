function add_todo(){
    const todoVal = document.getElementById("task").value;
    // console.log(todoVal);
    const node = document.createElement("div");
    node.className = "list-group-item list-group-item-primary mb-2";
    const textNode = document.createTextNode(todoVal);
    node.appendChild(textNode);
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn btn-danger";
    delBtn.style = "float:right";
    delBtn.onclick = deleteTodo;
    node.appendChild(delBtn);
    // console.log(node);
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-warning";
    editBtn.style = "float:right; margin-right:10px";
    editBtn.onclick = editTodo;
    node.appendChild(editBtn);
    document.getElementById("result").appendChild(node);
    document.getElementById("task").value = "";
    // console.log(document.getElementById("result"));
}

function clearTodo(){
    document.getElementById("result").innerHTML = "";
}

function deleteTodo(e) {
    // console.log(e.target);
    e.target.parentElement.remove();
}

function editTodo(e) {
    console.log(e.target);

    const parentEle = e.target.parentElement;

    const updateContainer = document.createElement("div");
    parentEle.appendChild(updateContainer);

    const inputEle = document.createElement("input");
    inputEle.className = "form-control mt-4 mb-2";
    inputEle.id = "edit-todo";
    inputEle.placeholder = "Edit the selected todo";

    updateContainer.appendChild(inputEle);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.className = "btn btn-success";
    updateBtn.id = "update-btn";
    updateBtn.onclick = updateTodo;
    updateContainer.appendChild(updateBtn);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.className = "btn btn-danger";
    closeBtn.onclick = closeEdit;
    updateContainer.appendChild(closeBtn);
}

function updateTodo(e) {
    console.log(e.target);

    const parentEle = e.target.parentElement;
    const editTodoInput = parentEle.querySelector("#edit-todo");
    const updatedVal = editTodoInput.value;
    parentEle.parentElement.firstChild.textContent = updatedVal;

    parentEle.remove();
}

function closeEdit(e) {
    e.target.parentElement.remove();
}