const form = document.querySelector('form');
const inputs = document.querySelectorAll('input-number');
const playButton = document.getElementById('play-button');
const winNumbers_container = document.getElementById('winNumbers-container')
const result = document.getElementById('results');
const errorMessage = document.getElementById('errormessage');

const winarrayRnd = [];
const inputsarray = [];
const resultarray = [];
var trefferNumpersArr = [];


const inputValidation = () => {
    form.addEventListener('input', () => {
        let message = ''
        // Überprüfen, ob alle Eingabefelder gültig sind
        if (form.checkValidity()) {
            message = 'prima'
            errorMessage.innerHTML = `<div class="alert alert-success mt-3">${message}</div>`;
            // Überprüfen, ob es gleiche Zahlen in den Eingabefeldern gibt
            let hasDuplicates = false;
            inputs.forEach((input) => {
                const number = parseInt(input.value);
                if (inputsarray.includes(number)) {
                    hasDuplicates = true;
                    message = 'Sie Zahlen müssen unterschied sein'
                    errorMessage.innerHTML = `<div class="alert alert-danger mt-3">${message}</div>`;
                } else {
                    inputsarray.push(number);
                    hasDuplicates = false;
                }
            });
            // Wenn es keine doppelten Zahlen gibt, aktivieren Sie den Button
            if (!hasDuplicates) {
                playButton.disabled = false;
            } else {
                playButton.disabled = true;
            }
        } else {
            playButton.disabled = true;
            message = 'bitte fühlen Sie Alle 6 zahlen'
            errorMessage.innerHTML = `<div class="alert alert-danger mt-3">${message}</div>`;
        }
    })
}

const generateRandomArray = () => {
    let i = 0;
    while (i < 6) {
        const randomNumber = Math.floor(Math.random() * 49) + 1;
        if (!winarrayRnd.includes(randomNumber)) {
            winarrayRnd.push(randomNumber);
            i++;
        }
    }
}

const showWinNumber = () => {
    let iteration = true;
    playButton.addEventListener('click', () => {
        generateRandomArray();
        if (iteration) {
            winNumbers_container.innerHTML = `${winarrayRnd.map((r) => `<p class="bg-success  p-2 border border-1 rounded">${r}</p>`)}`
        }
    })
}


const vergleicharray = (array1, array2) => {

    trefferNumpersArr = array1.filter(item => array2.includes(item));
    let anzahlTreffer = trefferNumpersArr.length;
    result.innerHTML = `Sie haben ${anzahlTreffer} Treffer erzielt. `
    trefferNumpersArr.forEach(item => {
        result.innerText = ` ${item}`
    })
    console.log(trefferNumpersArr)
}

const arr2 = [22, 33, 11, 12, 4, 6, 6, 2, 1, 9, 8, 15, 34, 23, 7]

function app() {
    inputValidation();
    showWinNumber();
    vergleicharray(arr2, winarrayRnd);
}

app()