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
  constructor (value=true) {
    this.value = value;
  }
  encrypt() {
    if (arguments[0]!==undefined && arguments[1]!==undefined) {
      let message = arguments[0].toUpperCase();
      let key = arguments[1].toUpperCase();
      let rm ='';
      if(this.value===false) {
        rm = message.split("").reverse().join("");
        message = rm;
      }
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let resultCode=0;
      let result = [];
      let j=0;
      for (let i=0; i<message.length;i++) {
        if (alphabet.indexOf(message[i]) !== -1) {
          resultCode = ((alphabet.indexOf(message[i]) + alphabet.indexOf(key[j%key.length]))%alphabet.length);
          result.push(alphabet[resultCode]);
          j++;
        } else {
          result.push(message[i]);
        }        
      }
      return result.join('');
    } else {
      throw new Error('Incorrect arguments!');
    }
  }

  decrypt() {
    if (arguments[0]!==undefined && arguments[1]!==undefined) {
      let message = arguments[0].toUpperCase();
      let key = arguments[1].toUpperCase();
      let rm ='';
      if(this.value===false) {
        rm = message.split("").reverse().join("");
        message = rm;
      }
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let resultCode=0;
      let result = [];
      let j=0;
      for (let i=0; i<message.length;i++) {
        if (alphabet.indexOf(message[i]) !== -1) {
          resultCode = ((alphabet.indexOf(message[i]) - alphabet.indexOf(key[j%key.length]) + alphabet.length)%alphabet.length);
          result.push(alphabet[resultCode]);
          j++;
        } else {
          result.push(message[i]);
        }        
      }
      return result.join('');
    } else {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
