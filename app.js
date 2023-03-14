const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// generate template
const generateTemplate = (todo) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
  list.innerHTML += html;
};

// add todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    // truthy value
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos
list.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filtering todos
const filterTodos = (term) => {
  const listItems = Array.from(list.children);
  listItems.forEach((item) => {
    if (!item.textContent.includes(term.toLowerCase())) {
      item.classList.add("filtered");
    } else {
      item.classList.remove("filtered");
    }
  });
};

// keyup event
search.addEventListener("keyup", (e) => {
  const term = search.value.toLowerCase().trim();
  filterTodos(term);
});
