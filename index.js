const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUl = document.getElementById("todo-list");

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText.length > 5) {
    allTodos.push(todoText);
    todoInput.value = "";
    updateTodoList();
    saveTodos();
    // createTodoItem(todoText);
  } else {
    alert("not less than 5 characters");
  }
}

function updateTodoList() {
  todoListUl.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
    todoListUl.append(todoItem);
  });
}

function createTodoItem(todo, todoIndex) {
  const todoItem = document.createElement("li");
  todoItem.className = "todo";
  todoItem.innerHTML = `

                <input type="checkbox" id='todo-${todoIndex}'>
                <label for='todo-${todoIndex}' class="custom-checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="transparent">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                </label>
                <label for='todo-${todoIndex}' class="todo-text">
                   ${todo}
                </label>
                <button class="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="var(--secondary-color)">
                        <path
                            d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </button>
          
    
    `;
  return todoItem;
}

function saveTodos() {
  const todoJson = JSON.stringify(allTodos);
  localStorage.setItem("todos", todoJson);
}

function getTodos() {
  const todosJson = localStorage.getItem("todos") || "[]";
  todos = JSON.parse(todosJson);
  return todos;
}
