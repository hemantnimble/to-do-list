let inputBox = document.getElementById("text-box");
let listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        savaData();
    }

    inputBox.value = "";


}


listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        savaData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savaData();

    }
})


function savaData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();