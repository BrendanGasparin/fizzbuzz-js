function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        const li = document.createElement('li');
        
        if (i % 3 === 0 && i % 5 === 0) {
            li.textContent = 'FizzBuzz';
        } else if (i % 3 === 0) {
            li.textContent = 'Fizz';
        } else if (i % 5 === 0) {
            li.textContent = 'Buzz';
        } else {
            li.textContent = '' + i;
        }

        document.querySelector('ol').appendChild(li);
    }
}

function getInput() {
    const textField = document.querySelector('input');
    const input = textField.value;
    
    if(isNaN(input) === false) {
        document.querySelector('.error-text').textContent = '';
        const num = parseInt(input);
        fizzBuzz(num);
    }
    else {
        document.querySelector('.error-text').textContent = 'Not a number.';
    }
}

const btn = document.querySelector('button');

const num = btn.addEventListener('click', getInput);