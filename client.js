$(document).ready(onReady);

function onReady(){
    $(document).on('click', '#addBtn', addItem);
    $(document).on('click', '.deleteBtn', deleteItem)
}

function addItem() {
    // data validation
    // select table
    // append table row conttaiing relevant data
    // if total monthly cost > 20000 make it a red background
    // add delete button
}

function deleteItem() {
    // delete the row that this button is located in upon click
    // remove the salary from the reported total
}
