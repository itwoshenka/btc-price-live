let btcprice = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let btcPriceElement = document.getElementById('btc-price')
let lastPrice = null;

btcprice.onmessage = (event) => {
    let priceObject = JSON.parse(event.data);
    btcPriceElement.innerText = priceObject.p
    let price= parseFloat(priceObject.p).toFixed(2);
    btcPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
}