document.getElementById('btn-one')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('money-available');
        const donateMoneyOne = getInputFieldValueById('input-one');
        if (donateMoneyOne > 0 && donateMoneyOne <= moneyAvailable) {
            const donatedOne = getTextFieldValueById('donated-amount-one');
            const updatedMoneyAvailable = moneyAvailable - donateMoneyOne;
            document.getElementById('money-available').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedOne + donateMoneyOne;
            document.getElementById('donated-amount-one').innerText = updatedDonation;

            document.getElementById('my_modal_1').showModal();
        }
        else {
            alert('Donation failed. Please enter a valid amount.');
        }
    });

document.getElementById('btn-two')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('money-available');
        const donateMoneyTwo = getInputFieldValueById('input-two');
        if (donateMoneyTwo > 0 && donateMoneyTwo <= moneyAvailable) {
            const donatedTwo = getTextFieldValueById('donated-amount-two');
            const updatedMoneyAvailable = moneyAvailable - donateMoneyTwo;
            document.getElementById('money-available').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedTwo + donateMoneyTwo;
            document.getElementById('donated-amount-two').innerText = updatedDonation;

            document.getElementById('my_modal_2').showModal();
        }
        else {
            alert('Donation failed. Please enter a valid amount.');
        }
    });

document.getElementById('btn-three')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('money-available');
        const donateMoneyThree = getInputFieldValueById('input-three');
        if (donateMoneyThree > 0 && donateMoneyThree <= moneyAvailable) {
            const donatedThree = getTextFieldValueById('donated-amount-three');
            const updatedMoneyAvailable = moneyAvailable - donateMoneyThree;
            document.getElementById('money-available').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedThree + donateMoneyThree;
            document.getElementById('donated-amount-three').innerText = updatedDonation;

            document.getElementById('my_modal_3').showModal();
        }
        else {
            alert('Donation failed. Please enter a valid amount.');
        }
    });