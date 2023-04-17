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
 *  когда вы кодируете строчку, например "attack at dawn!"  вы ее кодируете так, как будто там нет пробелов: 
 * "attackatdawn", а потом дробите на слова так, чтобы наборы букв соответствовали по длине изначальной строке. 
 * ключ надо применять не к ней, а к строчке без пробелов либо иных, нелатинских символов.
 */
class VigenereCipheringMachine {

  //constructor of this class accepts true (or nothing) to create direct machine and false to create reverse machine
  //Our machine will have 2 modifications: direct and reverse (the type of machine is determined at the moment of creation). 
  constructor (type = true) {
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return this.type = type;
  }
  

  //encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword)
  //an Error with message Incorrect arguments! must be thrown.
  //The text returned by these methods must be uppercase. 
  //Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged).
  //https://www.youtube.com/watch?v=KST4bGAH-8Y

  encrypt(message, key) {
    const alphabet = this.alphabet;
    if(!message || !key) {
      throw new Error ('Incorrect arguments!');
    }
    
    let result = '';
    let j = 0;
    
    for (let i = 0; i<message.length; i++) {
        if (j > key.length-1) {
            j = 0;
        };
        if (!alphabet.includes(message[i].toUpperCase())) {
            result +=message[i];
        } else {
            result += alphabet[(alphabet.indexOf(message[i].toUpperCase()) + alphabet.indexOf(key[j].toUpperCase()) ) % 26]
            j++
        }
    }
    return this.type ? result : result.split('').reverse().join('');
  }

  //decrypt method accepts 2 parameters: encryptedMessage (string to decode) and key (string-keyword).
  decrypt(message, key) {
    const alphabet = this.alphabet;
    if(!message || !key) {
      throw new Error ('Incorrect arguments!');
    }
    let result = '';
    let j = 0;

    for (let i = 0; i<message.length; i++) {
      if (j > key.length-1) {
        j = 0;
      };

      if (!alphabet.includes(message[i].toUpperCase())) {
        result +=message[i];
      } else {
        if ((alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase()) >= 0)) {
          result += alphabet[(alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase()) )]
          j++
        } else {
          let index = (alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase())) + 26;
          result += alphabet[index];
          j++
        }
          
      } 
    }
    return this.type ? result : result.split('').reverse().join('');
  }

  
}

module.exports = {
  VigenereCipheringMachine
};
