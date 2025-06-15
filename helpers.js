function createButton({
    text = "",
    className = "",
    clickCallback = null,
    style = "",
    id = ""
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

function createInput({
    className = '',
    id='',
    type="text",
    placeholder='',
    value='',
    style='',
    attributes={}
}){
    const inputEl = document.createElement("input");
    inputEl.type = type;
    if(id) inputEl.id = id;
    if(className) inputEl.className = className;
    if(placeholder) inputEl.placeholder = placeholder;
    if(value) inputEl.value = value;
    if(style) inputEl.style = style;

    for(const [key,val] of Object.entries(attributes)){
        inputEl.setAttribute(key,val);
    }

    return inputEl;
}

