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
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyOne} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

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
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyTwo} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

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
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyThree} Taka is Donated for Injured in the Quota Movement</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

            document.getElementById('my_modal_3').showModal();
        }
        else {
            alert('Donation failed. Please enter a valid amount.');
        }
    });