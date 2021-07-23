$(document).ready(onReady);

function onReady(){
    $(document).on('click', '#addBtn', addItem);
    $(document).on('click', '.deleteBtn', deleteItem)
}

function addItem() {
    // select the stuff of interest
    let firstElement = $('#firstName')
    let lastElement = $('#lastName')
    let idElement = $('#idNumber')
    let jobElement = $('#jobTitle')
    let salaryElement = $('#annualSalary')
    // pull in data
    let firstName = firstElement.val();
    let lastName = lastElement.val();
    let idNumber = idElement.val();
    let jobTitle = jobElement.val();
    let annualSalary = salaryElement.val();
    // clear the fields
    firstElement.val('');
    lastElement.val('');
    idElement.val('');
    jobElement.val('');
    salaryElement.val('');
    // data validation
    // select table
    let table = $('tbody');
    // append table row containing relevant data
    table.append(`<tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${idNumber}</td>
                    <td>${jobTitle}</td>
                    <td>${annualSalary}</td>
                    <td><input type="button" class="deleteBtn" value="Delete"></td>
                </tr>`);
    // if total monthly cost > 20000 make it a red background
    // add delete button
}

function deleteItem() {
    // delete the row that this button is located in upon click
    // remove the salary from the reported total
    console.log('hi');
}
