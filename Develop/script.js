// let hourBlock = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.", "5 p.m."];
// let currentTime = moment().format('YYYY-MM-DD hh:mm a');


// function blockColor(time, inputId) {
//     if (currentTime > hourBlock) {
//         document.querySelector("#inputId").addClass(".future");
//     } else if (currentHour == hourBlock) {
//         document.querySelector("#inputId").addClass(".present");
//     } else {
//         document.querySelector("#inputId").addClass(".past");
//     }
// };

//Add HTML timeblock elements.
for (i = 9; i <= 17; i++) {
    let retrieveTask = localStorage.getItem(i);
    
    document.querySelector(".container").innerHTML += 
    `<div class='row'>
        <textarea class='hour'>${moment(i.toString(),'LT').format('h A')}</textarea>
        <input type='text' id='input${[i]}' class='description, time-block' placeholder='Enter tasks here...' value="${retrieveTask}">
        <button type ='button' id='save${[i]}' class='btn, btn-primary, saveBtn' time=${[i]}><i class='far fa-save'></i>
    </div>`;

    if (retrieveTask == null) {
        document.querySelector(`#input${[i]}`).value = "Enter tasks here..."
    }
}
//Add local time.
document.querySelector("#currentDay").innerHTML = `${moment().format('MMMM Do YYYY, h:mm:ss a')}`;

//Save button functionality.
function saveTask() {
    let time = this.getAttribute("time");
    console.log(time);
    let inputTask = document.querySelector(`#input${time}`).value;
    console.log(inputTask);
    localStorage.setItem(time, inputTask);
}

for (i = 9; i <= 17; i++) {
    var saveBtn = document.querySelector(`#save${i}`);
    saveBtn.addEventListener("click", saveTask);
}
