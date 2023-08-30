// Define API endpoint and API key
const endpoint = 'https://v6.exchangerate-api.com/v6/5aa97e9aa325cb1d18138230/latest/';

// Get elements from the HTML document
const form = document.querySelector('form');
const fromCurrency = document.getElementById('from_currency');
const toCurrency = document.getElementById('to_currency');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page from reloading on form submit
    convertCurrency();
});

// Function to perform currency conversion
async function convertCurrency() {
    const fromCurrencyCode = fromCurrency.value;
    const toCurrencyCode = toCurrency.value;
    const amountValue = amount.value;

    // Construct API URL with the user's selected currencies and amount
    const url = `${endpoint}${fromCurrencyCode}`;

    try {
        // Make API request to get exchange rates for the selected currency
        const response = await fetch(url);
        const data = await response.json();
console.log(data)
        // Get exchange rate for the target currency
        const exchangeRate = data.conversion_rates[toCurrencyCode];

        // Convert the amount to the target currency
        const convertedAmount = amountValue * exchangeRate;
        console.log(exchangeRate)

        // Display the converted amount in the result element
        result.innerHTML = `${amountValue} ${fromCurrencyCode} = ${convertedAmount.toFixed(2)} ${toCurrencyCode} <br> ${exchangeRate}`;
    } catch (error) {
        console.log('Error:', error.message);
    
    }
}