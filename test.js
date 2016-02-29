"use strict"

var assert = require('assert')
var Queue = require('./queue')

describe('Queue implemented with queues', function() {

  describe('on dequeue', function() {

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

  describe('when enqueing and dequeing', function() {

    it('stores and retrieves values in the right position', function() {

      var queue = new Queue()

      queue.enqueue(2)
      queue.enqueue(3)
      assert.equal(2, queue.dequeue())

      queue.enqueue(8)
      queue.enqueue(12)

      assert.equal(3, queue.dequeue())
      assert.equal(8, queue.dequeue())
      assert.equal(12, queue.dequeue())

    })

  })

})
