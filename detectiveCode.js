import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { measureMemory } from 'node:vm';

const rl = readline.createInterface({ input, output });


const decode = async () => {
    const input = (await rl.question('Enter coded string: ')).toLowerCase();
    rl.close();
    console.log(input);
let message = "";

for (const char of input) {
    if (char >= "a" && char <= "z") {
        const decodedChar = String.fromCharCode(
            219 - char.charCodeAt(0)
        );
        message += decodedChar;
    } else {
        message += char; // preserve spaces and punctuation
    }
}

console.log(message);
}
decode();