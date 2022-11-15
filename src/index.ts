import f from './quotes.json';
async function adatBetoltes() {
    let response = await fetch('/src/quotes.json');
    let betoltes = await response.json();
    console.log(betoltes);
    adatBetoltes();
}
