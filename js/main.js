const inputName = document.getElementById('input-name');
const inputNumber = document.getElementById('input-number');
const inputDateM = document.getElementById('input-date-m');
const inputDateY = document.getElementById('input-date-y');
const inputCvc = document.getElementById('input-cvc');

const TextName = document.getElementById('text-name');
const TextNumber = document.getElementById('text-number');
const TextDateM= document.getElementById('text-date-m');
const TextDateY = document.getElementById('text-date-y');
const TextCvc = document.getElementById('text-cvc');

const pError = document.getElementById('error');

const button = document.getElementById('btn-confirm');
const informations = document.getElementById('informations');
const completed = document.getElementById('completed');

button.addEventListener('click', () => {
    TextName.innerHTML = inputName.value
    if(!parseInt( inputNumber.value) && inputNumber.value.length<16){
        createMsg('Card number wrong format, numbers only!');
        console.log(typeof inputNumber.value);
        console.log(inputNumber.value.length)
    }else {
        TextNumber.innerHTML = createNumber(inputNumber.value);
    }
    if(parseInt(inputDateM.value)>12){
        createMsg('Month invalid!');
    }else{
        TextDateM.innerHTML = inputDateM.value;
    }
    if(inputDateY.value.length>2){
        createMsg('Enter only end numbers of the year!');
    }else{
        TextDateY.innerHTML = addZero(inputDateY.value);
    }
    if(!parseInt(inputCvc.value) && !inputCvc.value.length===3){
        createMsg("CVC invalid!")
    }else{
        TextCvc.innerHTML = inputCvc.value;
    }

    informations.classList.add('hidden');
    completed.classList.remove('hidden');
   
});

function createMsg(msg) {
    pError.innerText = msg
};

function createNumber(number) {
    const part1 = number.slice(0,4);
    const part2 = number.slice(4,8);
    const part3 = number.slice(8,12);
    const part4 = number.slice(12,16)

    return `${part1} ${part2} ${part3} ${part4}`
};

function addZero(year) {
    let zero = ''
    if(year.length<2){
        return zero = `0${year}`
    }else{
        return year
    }
}