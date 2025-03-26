function addTask() {
    let taskInput = document.getElementById("task");
    let deadlineInput = document.getElementById("deadline");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.classList.add("task-item");

        // Checkbox (Tengah)
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.onchange = function () {
            li.classList.toggle("completed", checkbox.checked);
        };

        // Task Info (Kiri)
        let taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        taskInfo.innerHTML = `<strong class="task-name">${taskInput.value}</strong><br><span class="deadline">Deadline: ${deadlineInput.value}</span>`;

        // Tombol Hapus (Kanan)
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Susun Elemen ke dalam List Item
        li.appendChild(taskInfo); // Info tugas di kiri
        li.appendChild(checkbox); // Checkbox di tengah
        li.appendChild(deleteBtn); // Tombol hapus di kanan

        // Tambahkan ke list
        taskList.appendChild(li);

        // Reset input
        taskInput.value = "";
        deadlineInput.value = "";
    }
}
