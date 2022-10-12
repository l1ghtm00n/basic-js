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
  encrypt() {
    if (arguments[0]!==undefined && arguments[1]!==undefined) {
      let message = arguments[0].toUpperCase();
      let key = arguments[1].toUpperCase();
      let a = Math.floor(message.length/key.length);
      let b = message.length%key.length;
      let fullKey = key.repeat(a)+key.slice(0,b);
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      // console.dir(fullKey.charCodeAt(0));
      let resultCode=0;
      let result = [];
      for (let i=0; i<message.length;i++) {
        resultCode = ((message.charCodeAt(i) + fullKey.charCodeAt(i)));
        result.push(String.fromCharCode(resultCode));
        console.dir(resultCode);
      }
      return result.join('');
    } else {
      throw new Error('Incorrect arguments!');
    }
  }

  decrypt() {
    if (arguments[0]!==undefined && arguments[1]!==undefined) {
    } else {
      throw new Error('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
