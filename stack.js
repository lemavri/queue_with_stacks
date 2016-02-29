"use strict"

function Stack() {
  if (!(this instanceof Stack)) { return new Stack }

  this.elements = []
}

Stack.prototype.push = function(element) {
  this.elements.push(element)
}

Stack.prototype.pop = function() {
  return this.elements.pop()
}

Stack.prototype.length = function() {
  return this.elements.length
}

module.exports = Stack
