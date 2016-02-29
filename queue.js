"use strict"

var Stack = require('./stack')

function Queue() {

  if (!(this instanceof Queue)) {
    return new Queue
  }

  this.inbound = new Stack()
  this.outbound = new Stack()

}

Queue.prototype.enqueue = function(element) {
  this.inbound.push(element)
}

Queue.prototype.dequeue = function() {

  if (this.outbound.length() === 0) {
    var el
    while (el = this.inbound.pop()) {
      this.outbound.push(el)
    }
  }

  return this.outbound.pop();
}

module.exports = Queue
