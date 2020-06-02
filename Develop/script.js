let hourBlock = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.", "5 p.m."];
let currentTime = moment().format('YYYY-MM-DD hh:mm a');

}

function blockColor(time, inputId) {
    if (currentTime > hourBlock) {
        document.querySelector("#inputId").addClass(".future");
    } else if (currentHour == hourBlock) {
        document.querySelector("#inputId").addClass(".present");
    } else {
        document.querySelector("#inputId").addClass(".past");
    }
};
