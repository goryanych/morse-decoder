const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const strToArray = [];
    const arrayToMorse = [];
    let startIndex = 0;

    for (let i = 1; i <= expr.length; i++) {
        if (i % 10 === 0) {
            strToArray.push(expr.slice(startIndex, i));
            startIndex = i;
        }
    }

    for (let elem of strToArray) {
        let str = '';

        for (let i = 0; i < elem.length; i++) {
            if (elem[i] == 1) {
                if (elem[++i] == 0) str += '.';
                else str += '-'
            }
        }
        arrayToMorse.push(str);
    }

    const result = arrayToMorse.reduce((acc, e) => {
        if (!MORSE_TABLE[e]) acc += ' ';
        else acc += MORSE_TABLE[e];

        return acc;

    }, '');
    
    return result;
}

module.exports = {
    decode
}