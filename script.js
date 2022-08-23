const form = document.querySelector("form");
const input = document.querySelector("input");
const content_to_app = document.querySelector(".content_todo_app");
let content = [];

function submitForm(e) {
  e.preventDefault();

  content.push({
    name: input.value,
    id: Math.random(),
  });

  writeContent();
}

function writeContent() {
  const div = document.createElement("div");
  let newElement = "";
  for (let i = 0; i < content.length; i++) {
    newElement += `<div class="todo_element" onClick="removeTodoElement(${
      content[i].id
    })">
                 <p>${content[i].id.toFixed(2)}</p>
                 <p>${content[i].name}</p>
             </div>`;
  }

  content_to_app.innerHTML = newElement;
}

function removeTodoElement(id) {
  content = content.filter((item) => item.id !== id);

  writeContent();
}

form.addEventListener("submit", submitForm);
