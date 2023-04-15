const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *     base requirements
      - chaining works!
      - throws an Error with message "You can't remove incorrect link!" on trying to remove wrong link
      - functional requirements
      - function returns correct values
      - removeLinks works correctly
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    // throw new Error("You can't remove incorrect link!");
    this.chain.splice(position, 1)
    return this;


  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
