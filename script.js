const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
    completed: false,
  };
  todos.push(todo);
  input.value = "";
  renderTodos();
});

function renderTodos() {
  list.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement("li");
    const textNode = document.createTextNode(todo.text);
    li.appendChild(textNode);
    if (todo.completed) {
      li.classList.add("completed");
    }
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "&times;";
    button.addEventListener("click", function () {
      todos = todos.filter(function (item) {
        return item.id !== todo.id;
      });
      renderTodos();
    });
    li.appendChild(button);
    list.appendChild(li);
  }
}

renderTodos();
