const billInput = document.querySelector('.bill input');
const tipOptions = document.querySelector('.tipPercent');
const billSplit_input = document.querySelector('.billSplit input');
const calcResult = document.querySelector('#calc input');
const alertMsg = document.querySelector('#tipResult');
const billMsg = document.querySelector('#billFinal');
const billSplitMsg = document.querySelector('#billSplitTotal');


const btnOpen = document.querySelector('.button');
const modalEl = document.querySelector('.modal');
const closeEl = document.querySelector('.close');

function roundNum(num) {
	return Math.round(num * 100) / 100; // Rounding values to 2 decimals.
}

function billAmount() {
	const bill = billInput.value;
	const tip = tipOptions.value;
	const billSplit = billSplit_input.value;
	const tipPercent = tip / 100;
	const result = bill * tipPercent;
	const billTotal = parseFloat(bill) + parseFloat(result);
	const billSplitTotal = billTotal / parseFloat(billSplit);

	// Validation arguments

	if(bill == '' || tip == '' || billSplit == '') {
		alertMsg.innerHTML = 'Enter all fields';
		billMsg.innerHTML = '';
		billSplitMsg.innerHTML = '';
		alertMsg.classList.add('red-glow');
		setTimeout(() => alertMsg.classList.remove('red-glow'), 600);

	} else if (bill <= 0 || bill == '') {
		alertMsg.innerHTML = 'Enter a correct bill amount';
		billMsg.innerHTML = '';
		billSplitMsg.innerHTML = '';
		alertMsg.classList.add('red-glow');
		setTimeout(() => alertMsg.classList.remove('red-glow'), 600);

	} else if(tip == 0) {
		alertMsg.innerHTML = 'Enter tip amount';
		billMsg.innerHTML = '';
		billSplitMsg.innerHTML = '';
		alertMsg.classList.add('red-glow');
		setTimeout(() => alertMsg.classList.remove('red-glow'), 600);

	} else if(billSplit <= 0 || billSplit == '') {
		alertMsg.innerHTML = 'Enter a correct split amount';
		billMsg.innerHTML = '';
		billSplitMsg.innerHTML = '';
		alertMsg.classList.add('red-glow');
		setTimeout(() => alertMsg.classList.remove('red-glow'), 600);

	} else {
		alertMsg.innerHTML = `You should tip: $${roundNum(result)}`;
		billMsg.innerHTML = `Final bill: $${roundNum(billTotal)}`;
		billSplitMsg.innerHTML = `Final bill per person: $${roundNum(billSplitTotal)}`;
	}
}

// Adding Event Listeners

function modal(){
	btnOpen.addEventListener('click', () => {
		modalEl.classList.add('open');
		billAmount();
	});
	closeEl.addEventListener('click', () => modalEl.classList.remove('open'));
	window.addEventListener('click', function(event) {
		if(event.target === modalEl){
			modalEl.classList.remove('open');
		}
	})
}

modal();