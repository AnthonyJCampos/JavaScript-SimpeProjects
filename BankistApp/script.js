'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/** create user names */

function createUsernames(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(text => text.charAt(0))
      .join('');
  });
} // end createUsernames

function createBalances(accs) {
  accs.forEach(acc => calcBalance(acc));
} // end createBalances

function calcBalance(acc) {
  acc.balance = acc.movements.reduce((prevVal, curVal) => prevVal + curVal, 0);
} // end calcBalance

createUsernames(accounts);
createBalances(accounts);

/** EVENT HANDLERS  */
let currentAccount;

btnLogin.addEventListener('click', function (event, targetAcc) {
  // Prevent form from submitting
  event.preventDefault();
  currentAccount = processUserLoginInput();
  resetLoginFields();

  if (currentAccount !== undefined) {
    inputLoginPin.blur();
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;
    updateDisplay(currentAccount);
  } // end if
}); // end login button event

function processUserLoginInput() {
  const result = findUser(accounts, inputLoginUsername.value);

  if (result !== undefined && checkPin(result, inputLoginPin.value)) {
    // see if pin matches
    return result;
  } else {
    return undefined;
  } // end if
} // end processUserInput

function findUser(accs, input) {
  return accs.find(acc => acc.username === input);
} // end findUser

function checkPin(acc, input) {
  return acc.pin === Number(input);
} // end checkPin

function resetLoginFields() {
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
} // end resetLoginFields

/** TRANSFER METHODS */

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);

  if (amount > 0 && currentAccount.balance >= amount) {
    const receiverAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );
    if (
      receiverAcc !== undefined &&
      receiverAcc.username !== currentAccount.username
    ) {
      receiverAcc.movements.push(amount);
      currentAccount.movements.push(amount * -1);
      calcBalance(currentAccount);
      updateDisplay(currentAccount);
    } // end if
  } // end if
  resetTransferFields();
});

function resetTransferFields() {
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
} // end resetTransferFields

/** REQUEST LOAN METHODS */

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0) {
    const flag = currentAccount.movements.some(mov => mov > amount * 1.1);
    // if true take out loan
    if (flag) {
      currentAccount.movements.push(amount);
      calcBalance(currentAccount);
      updateDisplay(currentAccount);
    } // end if
  } // end if

  // reset field
  inputLoanAmount.value = '';
});

/** CLOSE ACCOUNT METHODS */

btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  // confirm username and pin
  const givenUsername = inputCloseUsername.value;
  const givenPin = inputClosePin.value;

  if (
    currentAccount.username === givenUsername &&
    currentAccount.pin === Number(givenPin)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    if (index !== -1) {
      accounts.splice(index, 1);
      // Hide UI
      containerApp.style.opacity = 0;
    } // end if
  } // end if

  resetCloseAccountFields();
});

function resetCloseAccountFields() {
  inputCloseUsername.value = '';
  inputClosePin.value = '';
} // end resetCloseAccountFields

/** SORT MOVEMENTS METHODS */

// sorted state
let sorted = false;
btnSort.addEventListener('click', event => {
  event.preventDefault();
  displayMovements(currentAccount.movements, containerMovements, !sorted);
  sorted = !sorted;
});

/** OTHER FUNCTIONS */

function updateDisplay(currentAccount) {
  // Display movements
  displayMovements(currentAccount.movements, containerMovements);
  // Display Balance
  updateBalanceElement(currentAccount, labelBalance);
  // Display summary
  updateDisplaySummary(
    currentAccount,
    labelSumIn,
    labelSumOut,
    labelSumInterest
  );
} // end updateDisplay

function displayMovements(movements, containerMovements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
       <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}
       </div>
           <div class="movements__value">${mov}$</div>
         </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
} // end displayMovements

function updateBalanceElement(account, element) {
  element.textContent = `${account.balance} USD`;
} // end updateBalance

function updateDisplaySummary(account, elementIn, elementOut, elementInterest) {
  elementIn.textContent = `${calcSummaryIn(account.movements)}$`;
  elementOut.textContent = `${calcSummaryOut(account.movements)}$`;
  elementInterest.textContent = `${calcSummaryInterest(
    account.movements,
    account.interestRate
  )}$`;
} // end updateDisplaySummary

function calcSummaryIn(movements) {
  return movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
} // end calcDisplaySummary

function calcSummaryOut(movements) {
  return Math.abs(
    movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  );
} // end calcSummaryOut

function calcSummaryInterest(movements, rate) {
  return movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * rate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
} // end calcSummaryInterest
