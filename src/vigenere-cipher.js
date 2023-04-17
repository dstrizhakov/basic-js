const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const normalizedMessage = message.toUpperCase();
    const normalizedKey = key.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < normalizedMessage.length; i++) {
      const char = normalizedMessage[i];

      if (alphabet.includes(char)) {
        const keyChar = normalizedKey[j % normalizedKey.length];
        const shift = alphabet.indexOf(keyChar);
        const encryptedChar =
          alphabet[(alphabet.indexOf(char) + shift) % alphabet.length];
        result += encryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const normalizedMessage = encryptedMessage.toUpperCase();
    const normalizedKey = key.toUpperCase();
    let result = "";

    for (let i = 0, j = 0; i < normalizedMessage.length; i++) {
      const char = normalizedMessage[i];

      if (alphabet.includes(char)) {
        const keyChar = normalizedKey[j % normalizedKey.length];
        const shift = alphabet.indexOf(keyChar);
        const decryptedChar =
          alphabet[
            (alphabet.indexOf(char) - shift + alphabet.length) % alphabet.length
          ];
        result += decryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
