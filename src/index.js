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
    // write your solution here
    let chars = expr.match(/.{1,10}/g);
    for (let i = 0; i < chars.length; i++){
        chars[i] = chars[i].replace(/00/g, '');
        chars[i] = chars[i].replace(/10/g, '.');
        chars[i] = chars[i].replace(/11/g, '-');
        chars[i] = chars[i].replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
        chars[i] === ' ' ? null : chars[i] = MORSE_TABLE[chars[i]];
    }
    return chars.join('');
}

module.exports = {
    decode
}