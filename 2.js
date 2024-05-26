// Conversion rates
const conversionRates = {
    INR: 1,    // Base currency
    USD: 0.013,
    EUR: 0.011
};

// Convert currency
function convertCurrency(currency) {
    const amountInINR = 100; // Base amount in INR
    const convertedAmount = amountInINR * conversionRates[currency];
    let currencySymbol = '';
    
    switch (currency) {
        case 'INR':
            currencySymbol = '₹';
            break;
        case 'USD':
            currencySymbol = '$';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
        default:
            currencySymbol = '';
    }

    const displayAmount = `${convertedAmount.toFixed(2)} ${currencySymbol}`;
    document.getElementById('wallet-amount').textContent = displayAmount;
}

// Add money
function addMoney() {
    const amountInINR = 100; // Base amount in INR
    let currentAmount = parseFloat(document.getElementById('wallet-amount').textContent);
    const newAmount = currentAmount + amountInINR;
    document.getElementById('wallet-amount').textContent = `${newAmount.toFixed(2)} ₹`;
}

// Toggle dropdown
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.wallet-button')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

let currentAdIndexLeft = 0;
let currentAdIndexRight = 0;

const adsLeft = document.querySelectorAll('.ads-container.left .ad');
const adsRight = document.querySelectorAll('.ads-container.right .ad');

function showAd(index, side) {
    const ads = side === 'left' ? adsLeft : adsRight;
    ads.forEach((ad, i) => {
        ad.style.transform = `translateY(${(i - index) * 100}%)`;
    });
}

function nextAd(side) {
    if (side === 'left') {
        currentAdIndexLeft = (currentAdIndexLeft + 1) % adsLeft.length;
        showAd(currentAdIndexLeft, 'left');
    } else {
        currentAdIndexRight = (currentAdIndexRight + 1) % adsRight.length;
        showAd(currentAdIndexRight, 'right');
    }
}

showAd(currentAdIndexLeft, 'left');
showAd(currentAdIndexRight, 'right');

setInterval(() => nextAd('left'), 3000);
setInterval(() => nextAd('right'), 3000);
