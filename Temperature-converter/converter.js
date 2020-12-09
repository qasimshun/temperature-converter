const kelvinInput = document.querySelector("#kelvin > input");
const farenheitInput = document.querySelector("#farenheit > input");
const celciusInput = document.querySelector("#celcius > input");

function round(num) {
    return Math.round((num*100)/100);
}

function kelvinToOthers() {
    const kTemp = parseFloat(kelvinInput.value);
    const fTemp = 9/5 * kTemp;
    const cTemp = kTemp - 273.15;
    farenheitInput.value = round(fTemp);
    celciusInput.value = round(cTemp);
}

function farenheitToOthers() {
    const fTemp = parseFloat(farenheitInput.value);
    const kTemp = (fTemp + 459.67) * 5/9;
    const cTemp = (fTemp - 32) * (5/9);
    kelvinInput.value = round(kTemp);
    celciusInput.value = round(cTemp);
}

function celciusToOthers() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) +32;
    const kTemp = cTemp + 273.15;
    farenheitInput.value = round(fTemp);
    kelvinInput.value = round(kTemp);
}

function main() {
    kelvinInput.addEventListener("input", kelvinToOthers);
    farenheitInput.addEventListener("input", farenheitToOthers);
    celciusInput.addEventListener("input", celciusToOthers);
}

main();