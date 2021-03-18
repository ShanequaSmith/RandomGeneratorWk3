// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialEl = document.getElementById('special');
const generatedEl = document.getElementById('generated');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumbers,
  special: getRandomSpecial,
};

generatedEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSpecial = specialEl.checked;
  
    resultEl.innerHTML = generatedPassword(hasLower, hasUpper, hasNumbers, hasSpecial, length);
  
  });

  function generatedPassword(lower, upper, numbers, special, length) {
      let generatedPassword = '';

      const typesCount = lower + upper + numbers + special;
      console.log('typesCount:', typesCount);
      const typesArr = [{ lower }, { upper }, { numbers }, { special }].filter(item => Object.values(item)[0]);
      console.log('typesArr: ', typesArr);

      if (typesCount === 0) {
        return '';
      }

      for(let i =0; i< length; i += typesCount) {
        typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          console.log('funcName: ', funcName);
      
          generatedPassword += randomFunc[funcName];
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
    }

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  return special[Math.floor(Math.random() * special.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumbers());
console.log(getRandomSpecial());



var generatedBtn = document.querySelector("#generated");


