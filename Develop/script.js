
//Repeated rules for each time block.
for (i = 9; i <= 17; i++) {
    let retrieveTask = localStorage.getItem(i);
    var someHTML;

    //Retrieving tasks saved to local storage to display as persistent saved data.
    if(retrieveTask == null){
        someHTML = `placeholder='Enter task here...'`;
    } else {
        someHTML = `value='${retrieveTask}'`;
    }

    //Determining the colour of the textblock according to the current time.
    if (moment().format('H') < i) {
        blockColor = "future";
    } else if (moment().format('H') == i) {
        blockColor = "present";
    } else {
        blockColor = "past";
    };

    //Creating HTML textbox elements.
    document.querySelector(".container").innerHTML += 
    `<div class='row'>
        <textarea class='hour'>${moment(i.toString(),'LT').format('h A')}</textarea>
        <input type='text' id='input${[i]}' class='description, time-block, ${blockColor}' ${someHTML}>
        <button type ='button' id='save${[i]}' class='btn, btn-primary, saveBtn' time=${[i]}><i class='far fa-save'></i>
    </div>`;
}

//Add local time to paragraph element.
document.querySelector("#currentDay").innerHTML = `${moment().format('MMMM Do YYYY, h:mm:ss a')}`;

//Save button functionality - save to local storage.
function saveTask() {
    let time = this.getAttribute("time");
    let inputTask = document.querySelector(`#input${time}`).value;
    localStorage.setItem(time, inputTask);
}

for (i = 9; i <= 17; i++) {
    var saveBtn = document.querySelector(`#save${i}`);
    saveBtn.addEventListener("click", saveTask);
}