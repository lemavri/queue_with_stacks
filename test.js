"use strict"

var assert = require('assert')
var Queue = require('./queue')

describe('Queue implemented with queues', function() {

  describe('On dequeue', function() {

    it('takes elements out in the order they were enqueued', function() {
      var elements = [2, 3, 4],
        queue = new Queue()

      elements.forEach(el => {
        queue.enqueue(el)
      })

      assert.equal(2, queue.dequeue())
      assert.equal(3, queue.dequeue())
      assert.equal(4, queue.dequeue())
      assert.equal(undefined, queue.dequeue())
    })

  })

})
