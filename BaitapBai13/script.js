// Câu 01: Lưu một mảng vào localStorage và lấy ra.
// var fruits = ['apple', 'banana', 'orange'];
// localStorage.setItem("fruit" , JSON.stringify(fruits));
// var arrayKey = Object.keys(localStorage)
// arrayKey.forEach((e)=>{
//    console.log(JSON.parse (localStorage.getItem(e))); 
// })
//Câu 02: Lưu data của ứng dụng Todo List vào localStorage
const inputArea = document.querySelector(".input input");
const buttonAdd = document.querySelector(".input button");
const listJobs = document.querySelector(".list-jobs");

function start(){
    render();
    addJobs();
    deleteJob();
}
start();

function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
function addJobs() {
    let indexCurrent;
    buttonAdd.addEventListener("click" , () => {
        indexCurrent = generateRandomId(5);
        const contentInput = inputArea.value ;
        localStorage.setItem(`CongViec${indexCurrent}` ,JSON.stringify(contentInput)) ;
        inputArea.value = "";
        render();
    })
   
}

function deleteJob() {
    var arrayKey = Object.keys(localStorage);
    const arrayNodeDelete = listJobs.querySelectorAll(".deleteButton");
    arrayNodeDelete.forEach((element) => {
        element.addEventListener("click" , () => {
            let parentNode = element.parentNode;
            const firstChild = parentNode.querySelector("span");
            var currentKey = arrayKey.find((element)=>{
                return JSON.parse (localStorage.getItem(element)) === firstChild.textContent;
            })
            console.log(currentKey);
            localStorage.removeItem(currentKey);
            if (currentKey) {
                localStorage.removeItem(currentKey);
                render();
            }
        })
    })
}

function render() {
    listJobs.innerHTML = "";
    var arrayKey = Object.keys(localStorage);
    var newArray = arrayKey.map((element) => {
       var contentJobs = localStorage.getItem(element) ;
       contentJobs = JSON.parse(contentJobs);
    const newLi = 
       `<li>
       
          <div class = "jobs">
              <span>${contentJobs}</span>
              <button class = "deleteButton">
                  Xóa
              </button>
          </div>
        </li>
       `
    return newLi;
   })
   console.log(newArray);
   listJobs.innerHTML = newArray.join("");
   deleteJob();
}
/// cách làm khác : 

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// // Hiển thị danh sách công việc
// function displayTasks() {
//   const taskList = document.getElementById("taskList");
//   taskList.innerHTML = "";
//   for (let i = 0; i < tasks.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = tasks[i];

//     li.setAttribute("data-index", i); // Thêm thuộc tính data-index để xác định index của công việc
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Xóa";
//     deleteButton.addEventListener("click", function () {
//       const index = parseInt(this.parentElement.getAttribute("data-index"));
//       deleteTask(index);
//     });
//     li.appendChild(deleteButton);

//     taskList.appendChild(li);
//   }
// }

// // Thêm công việc mới
// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const task = taskInput.value;
//   if (task !== "") {
//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     taskInput.value = "";
//     displayTasks();
//   }
// }

// // Xóa công việc
// function deleteTask(index) {
//   tasks.splice(index, 1);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   displayTasks();
// }

// // Hiển thị danh sách công việc ban đầu
// displayTasks();

// // Lắng nghe sự kiện click vào nút Thêm
// const button = document.querySelector("#button");
// button.addEventListener("click", addTask);