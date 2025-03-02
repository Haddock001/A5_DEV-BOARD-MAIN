document.addEventListener('DOMContentLoaded', function() {
    function setInnerTextByIDandValue(id, value) {
        document.getElementById(id).innerText = value;
    }

    function checkAllButtonsClicked() {
        const buttons = document.querySelectorAll(".complete-button");
        return Array.from(buttons).every(button => button.disabled);
    }

    document.querySelectorAll(".complete-button").forEach(button => {
        button.addEventListener("click", function(event) {
            const task_left = parseInt(document.getElementById("task-left").innerText);
            const total_task_completed = parseInt(document.getElementById("total-task-completed").innerText);
            const updated_total_task_left = total_task_completed + 1;
            const updated_task_left = task_left - 1;
            setInnerTextByIDandValue("task-left", updated_task_left);
            setInnerTextByIDandValue("total-task-completed", updated_total_task_left);
            this.disabled = true;

            const time = new Date().toLocaleTimeString();
            const history = document.getElementById("history");
            const p = document.createElement("p");
            p.innerText = `Completed task at ${time}`;
            history.appendChild(p);

            if (checkAllButtonsClicked()) {
                alert("Congrats!!! You completed all the current tax");
            }
        });
    });

    document.getElementById("clear-history").addEventListener("click", function() {
        const history = document.getElementById("history");
        history.innerHTML = "";
    });

    document.getElementById("discover").addEventListener("click", function() {
        window.location.href = "discover.html";
    });

    document.getElementById('go-back').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('theme-btn').addEventListener('click', function(event) {
        event.preventDefault();
        const body = document.body;
        const colors = ['white', 'black', 'red', 'blue', 'green', 'yellow', 'purple'];
        let currentColorIndex = 0;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        body.style.backgroundColor = colors[currentColorIndex];
    });

    const currentDateElement = document.getElementById('current-date');
    const currentDate = new Date().toLocaleDateString();
    currentDateElement.innerText = currentDate;
});

