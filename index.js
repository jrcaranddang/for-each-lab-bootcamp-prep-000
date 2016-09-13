/*
describe('index', function() {
  describe('iterativeLog(array)', function() {
    it('logs each element with the format `${index}: ${element}`', function() {
      const log = expect.spyOn(console, 'log').andCallThrough()

      iterativeLog([1, 2, 3])

      expect(log).toHaveBeenCalledWith('0: 1')
      expect(log).toHaveBeenCalledWith('1: 2')
      expect(log).toHaveBeenCalledWith('2: 3')

      log.restore()
      expect.restoreSpies()
    })
  })
*/

function iterativeLog(array) {
  array.forEach((element, index) => {
//debugger
    return console.log(`${index}: ${element}`)
  })
}

//doToElementsInArray(array, iterativeLog)
//iterativeLog([1, 2, 3])

/*
  describe('iterate(callback)', function() {
    it('calls the callback on an internal array, then returns the array', function() {
      const forEach = expect.spyOn(Array.prototype, 'forEach').andCallThrough()
      const callback = expect.createSpy()

      const result = iterate(callback)

      // This is a hack to fix the fact that
      // this assertion is checked before forEach()
      // has been called. Totally unclear why that's
      // the case, since forEach *should* be blocking.
      setTimeout(() => {
        expect(forEach).toHaveBeenCalled()
      }, 1)
      expect(callback.calls.length).toBeGreaterThanOrEqualTo(1)
      expect(Array.isArray(result)).toBe(true)
    })
  })
*/

function iterate(callback) {
  var array = [1, 2, 3];
    array.forEach(callback);
      return array;
}

/*
  describe('doToArray(array, callback)', function() {
    it('uses `callback` as the callback for `array`.forEach', function() {
      const array = [1, 2, 3]
      const callback = expect.createSpy()

      doToArray(array, callback)

      expect(callback.calls.length).toEqual(3)
    })
  })
})
*/

function doToArray(array, callback) {
  array.forEach(callback);
}
