const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *     base requirements
  - chaining works!
  - throws an Error with message "You can't remove incorrect link!" on trying to remove wrong link
  - functional requirements
  - function returns correct values
  - removeLinks works correctly
  chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(), '( 3rd )~~( function () { } )'
    
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = '(  )') {
    this.chain.push( `( ${value} )` );
    return this;
  },

  removeLink(position) {
    if (Number.isNaN(position) || position > this.chain.length || position <= 0 || !Number.isInteger(position)){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    
    this.chain.splice(position-1, 1);
    return this;
  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
