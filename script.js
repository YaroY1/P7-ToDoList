let todoInput; //wpisywanie treści zadania
let errorInfo; //info o braku zadań/konieczności wpisania tekstu
let addBtn; //dodaje nowe elementy do listy
let ulList; //lista zadań
let newTodo; //nowo dodane li/nowe zadanie

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	//pobieranie wszystkich elementów
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todoList ul");
};

const prepareDOMEvents = () => {
	//nadawanie nasłuchiwania
	addBtn.addEventListener("click", addNewTodo);
	ulList.addEventListener("click", checkClick);
};

const addNewTodo = () => {
	if (todoInput.value !== "") {
		newTodo = document.createElement("li");
		newTodo.textContent = todoInput.value;
		createToolsArea();

		ulList.append(newTodo);

		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Wpisz treść zadania!";
	}
};

const createToolsArea = () => {
	const toolsPanel = document.createElement("div");
	toolsPanel.classList.add("tools");
	newTodo.append(toolsPanel);

	const completeBtn = document.createElement("button");
	completeBtn.classList.add("complete");
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement("button");
	editBtn.classList.add("edit");
	editBtn.textContent = "EDIT";

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
		console.log("completed");
		console.log(e.target);
	} else if (e.target.matches(".edit")) {
		console.log("edited");
		console.log(e.target);
	} else if (e.target.matches(".delete")) {
		console.log("deleted");
		console.log(e.target);
	}
};

document.addEventListener("DOMContentLoaded", main);
