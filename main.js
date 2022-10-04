

function addToList () {
  let newTask = document.querySelector(".listInput").value;
  let listInner = document.createElement("li");
  let taskList = document.querySelector(".orderedList")
  taskList.appendChild(listInner)
  listInner.insertAdjacentText("beforeend", newTask);

   }

function deleteFromList () {
  let lastListElement = document.querySelector(".orderedList").lastChild;
  lastListElement.remove();
}

function clearList () {
  let taskList = document.querySelector(".orderedList");
  taskList.textContent = '';
}




const addButton = document.querySelector('.addButton');
const deleteButton = document.querySelector('.deleteButton')
const clearButton = document.querySelector('.clearButton')


addButton.onclick = function () { addToList() }

deleteButton.onclick = function () {deleteFromList()}

clearButton.onclick = function () { clearList () }



document.addEventListener("keydown", function (e) {
 if (e.key === "Enter") {
   addToList();
 }

})






// document.querySelector('.listInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//     addToList() }
//
// else {
//
// }
// })

// function deleteFromList () {
//   let delButton = document.querySelector(".delete")
//   let oList = document.querySelector(".orderedList");
//   delButton.addEventListener("click", oList.removeChild(oList.lastElementChild))
//  }
//
// function clear (parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   } }
//
//   let taskList = document.querySelector("li")
//   let clearButton = document.querySelector(".clearButton")
//
//   clearButton.addEventListener("click", clear (taskList))
