const addUp = (integer) => {
    if(typeof(integer) !== 'number') {
        return 'not a number';
    }
    let sum = 0;
    for (let i = 0; i <= integer; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log('1:', addUp(13));

function sumCubes(a, b, c) {
    if (typeof(a) !== 'number') {
        a = 0;
    } if (typeof(b) !== 'number') {
        b = 0;
    } if (typeof(c) !== 'number') {
        c = 0;
    }
    return a ** 3 + b ** 3 + c ** 3;
}

console.log('2:', sumCubes());

function stringCheck(string, word) {
    if(typeof(string) !== 'string' || typeof(word) !== 'string') {
        return 'not a string';
    }
    string.split('');
    word.split('');

    for (let i = 0; i < string.length; i ++) {
        if (string[i] !== word[i]) {
            return false;
        }
    }
    return true;
}


console.log('3:', stringCheck('two', 'twoitch'));

const isLEQZero = (integer) => integer <= 0;

console.log('4:', isLEQZero(1));

function countOccurrences(string, letter) {
    if(typeof(string) !== 'string' || typeof(letter) !== 'string') {
        return 'not a string';
    }

    const check = string.split(letter);
    return check.length - 1;
}

console.log('5:', countOccurrences('this is a string', 'i'));

const calcBaseToExponent = (a, b) => a ** b;

console.log('6:', calcBaseToExponent(3, 3));

const dogAge = (age) => `Your doggo is ${age * 7} years old in dog years!`;

console.log('7:', dogAge(4));

//Extra

function accurateDogAge(age) {
    let dogAge;
    switch (age) {
        case 0:
            dogAge = 0;
        case 1:
            dogAge = 15;
        case 2:
            dogAge = 24;
        default:
            dogAge = 24 + (age - 2) * 4;
    }
    return `Your doggo is ${dogAge} years old in dog years!`;
}

console.log('7extra:', accurateDogAge(6));

const calcLifetimeSupply = (age, amount) => `The snack company should provide you with ${((100 - age) * amount * 365.25).toFixed(0)} units, until you are a ripe old age of 100. Happy snacking!`;

console.log('8:', calcLifetimeSupply(40, 3));

const calcLifetimeSupplyTwo = (age, amount, max) => {
    if(typeof(max) !== 'number') {
        return `The snack company should provide you with ${((100 - age) * amount * 365.2425).toFixed(0)} units, until you are a ripe old age of 100. Happy snacking!`;
    } else {
        return `The snack company should provide you with ${((max - age) * amount * 365.2425).toFixed(0)} units, until you are a ripe old age of ${max}. Happy snacking!`;
}
}

console.log('8bonus:', calcLifetimeSupplyTwo(32, 0.58, 65));

function isWaldoHere(here) {
    if(typeof(here) !== 'string') {
        return 'not a string';
    }
    let check = here.toLowerCase().split('waldo');

    if(check.length > 1) {
        return true;
    } else {
        return false;
    }
}

console.log('9:', isWaldoHere('I found you Waldo!'));

const isEqualSlices = (slices, people, each) => people * each < slices;

console.log('10;', isEqualSlices(8, 3, 2));

const isEqualNumXandO = (string) => {
    if(typeof(string) !== 'string') {
        return 'not a string';
    }
    let checkOne = string.toLowerCase().split('o');
    let checkTwo = string.toLowerCase().split('x');

    if(checkOne.length === checkTwo.length) {
        return true;
    } else {
        return false;
    }
}

console.log('11:', isEqualNumXandO('xooxx'));

const isPrime = (number) => {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log('12:', isPrime(1299827));

const validateEmail = (email) => {
    if(typeof(email) !== 'string') {
        return `${email} is invalid`;
    }

    let checkOne = email.split('@');
    if(checkOne.length !== 2) {
        return `${email} is invalid`;
    }

    let checkTwo = email.split('.');
    if(checkTwo.length < 2) {
        return `${email} is invalid`;
    }

    let checkThree = email.split('');

    if(checkThree[checkThree.length - 1] === '@' || checkThree[checkThree.length - 1] === '.') {
        return `${email} is invalid`;
    }

    if(checkThree[0] === '@') {
        return `${email} is invalid`;
    }

    for(let i = 0; i < checkThree.length; i++) {
        if(checkThree[i] === '.' && checkThree[i + 1] === '.') {
            return `${email} is invalid`;
        }
        if(checkThree[i] === '.' && checkThree[i + 1] === '@' || checkThree[i] === '@' && checkThree[i + 1] === '.') {
            return `${email} is invalid`;
        }
        if(checkThree[i] === '@') {
            for(j = i + 1; j <= checkThree.length; j) {
                if(checkThree[j] === '.') {
                    break;
                } else {
                    j++;
                }
                if(j === checkThree.length) {
                    return `${email} is invalid`;
                }
            }
        }
    }

    return `${email} is valid`;
}

console.log('12:', validateEmail('j@e.m'));