document.addEventListener('DOMContentLoaded', () => {
    let amount = 0;
    const totalFund = document.getElementById('total-fund').innerText;
    const amountDisplay = document.getElementById('amount');
    const balancedDisplay = document.getElementById('balanced');

    document.getElementById('increase').addEventListener('click', () => {
        amount++;
        amountDisplay.innerText = amount;
    });

    document.getElementById('decrease').addEventListener('click', () => {
        if (amount > 0) {
            amount--;
            amountDisplay.innerText = amount;
        }
    });

    document.getElementById('confirm').addEventListener('click', () => {
        const balanced = parseInt(balancedDisplay.innerText);
        const newBalanced = balanced - amount;

        if (newBalanced >= 0) {
            balancedDisplay.innerText = newBalanced;
        } else {
            alert('Not enough balance');
        }

        amount = 0;
        amountDisplay.innerText = amount;
    });
});
