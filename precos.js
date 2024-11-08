async function fetchBitcoinPrice() {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl');
        const data = await response.json();
        const price = data.bitcoin.brl;
        document.getElementById('bitcoin-price').innerText = `R$ ${price.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
        }
    fetchBitcoinPrice();

        async function fetchEterioPreco() {
         const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl');
         const data = await response.json();
        const priceEterio = data.ethereum.brl;
        document.getElementById('ethereum-price').innerText = `R$ ${priceEterio.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    }
    fetchEterioPreco();
