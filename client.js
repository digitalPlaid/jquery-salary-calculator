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
    // data validation - remember to trim leading zeros
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
        totalAnnualSalary += Number($(this).text());
        });
    // clear out the monthly salary and add it to dom
    let periodicDisplay = $('h3');
    periodicDisplay.empty();
    let monthlySalary = totalAnnualSalary/periodsPerYear
    // if monthySalary goes above 20k add red 
    // if it is below 20k and it has the class, make it white
    if (monthlySalary > 20000) {
        console.log('should be toggling class')
        $('.salaryEntry').addClass('overTwenty');
    } else if (monthlySalary <= 20000 && $('.salaryEntry').hasClass('overTwenty')) {
        $('.salaryEntry').removeClass('overTwenty');
    }
    periodicDisplay.append(`Monthly Salary: ${monthlySalary}`)
}



// add additional functionality
// add red highlighting
// add styling


// next time I would do what Edan did in the Friday example - just use a global array,
    // then put the row data into an object, push that to the array, and
    // update the display based on that, rather than doing the jquery salary calculation.
    // one reason could be you can change the row data and the monthly salary calculation
    // won't necessarily update. Which I guess isn't a big deal in this context, but maybe
    // could be in a more complicated app?