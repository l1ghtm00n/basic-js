const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (position in this.chain && position>0) {
      this.chain.splice(position-1,1);
      return this;
    } else {
      this.chain.length = 0;
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.splice(0,this.chain.length).join('~~');
  }
};

module.exports = {
  chainMaker
};
