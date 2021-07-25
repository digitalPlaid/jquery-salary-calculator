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
    let annualSalary = Number(salaryElement.val()).toFixed(2); // trim to nearest cent
    // clear the fields
    firstElement.val('');
    lastElement.val('');
    idElement.val('');
    jobElement.val('');
    salaryElement.val('');
    // select table
    let table = $('tbody');
    // append table row containing relevant data
    table.append(`<tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${idNumber}</td>
                    <td>${jobTitle}</td>
                    <td class="salaryEntry">$${formatNumber(annualSalary)}</td>
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
        totalAnnualSalary += Number($(this).text().slice(1).split(',').join('')); // grab the number that is stored in the table.
        });
    // clear out the monthly salary and add it to dom
    let periodicDisplay = $('h3');
    let monthlySalary = (totalAnnualSalary/periodsPerYear).toFixed(2)
    if (monthlySalary > 20000) {
        $('.salaryEntry').addClass('overTwenty');
    } else if (monthlySalary <= 20000 && $('.salaryEntry').hasClass('overTwenty')) {
        $('.salaryEntry').removeClass('overTwenty');
    }
    periodicDisplay.empty();
    periodicDisplay.append(`Monthly Salary: $${formatNumber(monthlySalary)}`)
}

function formatNumber(numAsString) {
    // formats number to be presented as xxx,xxx.xx. takes a string or number
    // num is actually a string
    if (numAsString.split('.').length > 1) {
        return Number(numAsString.split('.')[0]).toLocaleString() + '.' + Number('.' + numAsString.split('.')[1]).toFixed(2).split('.')[1];
    }
    return Number(numAsString).toLocaleString();
}

// because we present the data on the table as trimmed to 2 digits and then read it from there, our
// monthly calculation will be off, but only by a very small margin, but for accounting purposes it could be a big deal.
// probably depends on what laws and rules accountants must follow.
// also probably I'd learn how to use regular expressions. Seems like the formatting of the numbers would be great for that.

// in this case the period is monthly. It wouldn't be too hard to update the inputs to a form and include a selector for a more general
    // periodic display, so that you could do semi-annual calculations, etc. but I'll leave that for a future project.

// it also might be nice to try a form, rather than disconnected inputs with type button. it'd expand my comfort with different html tags

// it might also be good to decouple the calculation of the periodic salary from the presentation of the periodic salary

// in future might create a function called 'unformatNumber' to change the format '$...xxx,xxx.xx' to ...xxxxxx.xx, a typical js number
    // rather than what I've got now, which is in the first jquery call in calculatePeriodicSalary.
    // it's an eye sore and tough to read, i feel like. if that was hidden in a function it helps the readability of the calculatePeriodicDisplay


// next time I would do what Edan did in the Friday example - just use a global array,
    // then put the row data into an object, push that to the array, and
    // update the display based on that, rather than doing the jquery salary calculation.
    // one reason could be you can change the row data and the monthly salary calculation
    // won't necessarily update. Which I guess isn't a big deal in this context, but maybe
    // could be in a more complicated app?