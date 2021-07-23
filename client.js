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
                    <td class="salaryEntry">${annualSalary}</td>
                    <td><input type="button" class="deleteBtn" value="Delete"></td>
                </tr>`);
    calculatePeriodicSalary(12);
}

function deleteItem() {
    $(this).closest('tr').remove();
    calculatePeriodicSalary(12);
}

function calculatePeriodicSalary(periodsPerYear) {
    // sum up all annual salary data
    let totalAnnualSalary = 0;
    $('.salaryEntry').each(function(i) {
        totalAnnualSalary += parseInt($(this).text());
        });
    // clear out the monthly salary and add it to dom
    let periodicDisplay = $('h3');
    periodicDisplay.empty();
    periodicDisplay.append(`Monthly Salary: ${totalAnnualSalary/periodsPerYear}`)
}