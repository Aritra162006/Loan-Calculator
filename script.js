const information = {
    currency: '₹',
    rate: 5.5,
    term: 30,
    loan: 50000,
    monthly: '--',
    total: '--',
    interest: '--'
}

function updateCurrency(event) {
    const currency = (event.target.value === 'INR') ? '₹' : (event.target.value === 'USD') ? '$' : (event.target.value === 'EUR') ? '€' : (event.target.value === 'GBP') ? '£' : '₹';
    information.currency = currency;
    calculateLoan();
}


function updateLoan(type) {
    const loanInput = document.getElementById('loan-input');
    const loanRange = document.getElementById('loan-range');
    if (type == "range") {
        loanInput.value = loanRange.value;
    } else if (type == "input") {
        loanRange.value = loanInput.value;
    }

    information.loan = loanInput.value;
    calculateLoan();
}


function updateInterest(type) {
    const rateInput = document.getElementById('rate-input');
    const rateRange = document.getElementById('rate-range');
    if (type == "range") {
        rateInput.value = rateRange.value;
    } else if (type == "input") {
        rateRange.value = rateInput.value;
    }

    information.rate = rateInput.value;
    calculateLoan();
}


function updateTerm(type) {
    const termInput = document.getElementById('term-input');
    const termRange = document.getElementById('term-range');
    if (type == "range") {
        termInput.value = termRange.value;
    } else if (type == "input") {
        termRange.value = termInput.value;
    }

    information.term = termInput.value;
    calculateLoan();
}



function calculateLoan() {
    const loanInput = document.getElementById('loan-input');
    const rateInput = document.getElementById('rate-input');
    const termInput = document.getElementById('term-input');
    const resultValue = document.getElementById('result-value');

    information.loan = loanInput.value;
    information.rate = rateInput.value;
    information.term = termInput.value;

    const loan = information.loan;
    const rate = information.rate;
    const term = information.term;
    const currency = information.currency;

    let monthlyPayment = 0;
    let totalAmount = 0;
    let interestCost = 0;

    if (rate <= 0) {
        monthlyPayment = loan / (term * 12);
        totalAmount = loan;
        interestCost = 0;
    } else {

        monthlyPayment = loan * (rate / 100 / 12) / (1 - Math.pow(1 + rate / 100 / 12, -term * 12));
        totalAmount = monthlyPayment * term * 12;
        interestCost = totalAmount - loan;
    }

    information.monthly = monthlyPayment.toFixed(2);
    information.total = totalAmount.toFixed(2);
    information.interest = interestCost.toFixed(2);

    document.getElementById('result-value').innerHTML = currency + information.monthly;
    document.getElementById('monthly').innerHTML = currency + information.monthly;
    document.getElementById('total').innerHTML = currency + information.total;
    document.getElementById('interest').innerHTML = currency + information.interest;

    console.log(information);
}

calculateLoan();