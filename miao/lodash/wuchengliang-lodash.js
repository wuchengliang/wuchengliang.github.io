var wuchengliang = function () {

  function compact(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }
  function chunk(ary, size) {
    var result = []
    for (i = 0; i < ary.length; i = i + size) {
      if (i + size < ary.length) {
        result.push(ary.slice(i, i + size))
      }
      else {
        result.push(ary.slice(i, ary.length))
      }
    }
    return result
  }
  function join(ary, separator) {
    var result = ""
    for (var i = 0; i < ary.length - 1; i++) {
      result = result + ary[i] + separator
    }
    return result + ary[ary.length - 1]
  }
  function last(ary) {
    return ary[ary.length - 1]
  }
  function lastIndexOf(ary, value, fromIndex = ary.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  }
  function drop(ary, n = 1) {
    ary.splice(0, n)
    return ary
  }
  function dropRight(ary, n = 1) {
    if (ary.length <= n) {
      return []
    }
    else {
      ary.splice(ary.length - n, n)
      return ary
    }
  }
  function dropRightWhile(array, predicate = identity) {
    var pre = iteratee(predicate)
    var result = array
    for (var i = array.length - 1; i >= 0; i--) {
      if (!pre(array[i])) {
        break
      }
      else {
        result.pop()
      }

    }
    return result



  }
  function fill(ary, value, start = 0, end = ary.length) {
    for (var i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  }
  function head(ary) {
    // if (ary.length == 0) {
    //   return null
    // }

    return ary[0]

  }
  function indexOf(array, value, fromIndex = 0) {
    for (i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
  }

  function initial(array) {
    if (array.length == 0) {
      return []
    }
    else {
      return array.slice(0, array.length - 1)
    }
  }
  function reverse(array) {
    var right = 0
    var left = array.length - 1
    while (right < left) {
      var t = array[right]
      array[right] = array[left]
      array[left] = t
      right++
      left--
    }
    return array

  }
  function sortedIndex(array, value) {
    var left = 0
    var right = array.length - 1
    if (right == left) {
      if (array[left] < value) {
        return 1
      }
      return 0
    }
    if (value > array[right]) {
      return right + 1
    }
    if (value < array[left]) {
      return 0
    }

    while (right > left) {
      var mid = (left + right) >> 1
      if (array[mid] >= value) {
        right = mid
      }
      else {
        left = mid + 1
      }

    }
    return right
  }
  function toArray(value) {
    var result = []
    if (typeof (value) == "string") {
      return value.split("")
    }
    else if (typeof (value) == "object") {
      for (i in value) {
        result.push(value[i])
      }
      return result
    }
    else {
      return result
    }

  }
  function max(ary) {
    var max1 = -Infinity
    if (ary.length == 0 || !ary) {
      return undefined
    }
    for (i = 0; i < ary.length; i++) {
      if (max1 < ary[i]) {
        max1 = ary[i]
      }
    }
    return max1
  }
  function min(ary) {
    var min1 = Infinity
    if (!ary || ary.length == 0) {
      return undefined
    }
    for (i = 0; i < ary.length; i++) {
      if (min1 > ary[i]) {
        min1 = ary[i]
      }
    }
    return min1
  }
  function sum(ary) {
    var sum1 = 0
    if (ary.length == 0 || !ary) {
      return undefined
    }
    for (i = 0; i < ary.length; i++) {
      sum1 += ary[i]
    }
    return sum1
  }
  function flatten(array) {
    return [].concat(...array)
    //return [].concat.apply([],arrays)这两个是等价的
  }
  function concat(...values) {//values在操作的时候是个数组
    var result = []
    for (let i = 0; i < values.length; i++) {
      if (Array.isArray(values[i])) {
        values[i].forEach(it => {
          result.push(it)
        })
      }
      else {
        result.push(values[i])
      }


    }
    return result

  }
  function flattenDeep(arrays) {
    var result = []
    for (let i = 0; i < arrays.length; i++) {
      if (Array.isArray(arrays[i])) {
        result = result.concat(flattenDeep(arrays[i]))
      }
      else {
        result = result.concat(arrays[i])
      }

    }
    return result
  }
  function flattenDepth(arrays, depth = 1) {
    var result = []
    if (depth == 0) {
      return arrays.slice()//复制函数
    }
    for (let i = 0; i < arrays.length; i++) {
      if (Array.isArray(arrays[i])) {
        result = result.concat(flattenDepth(arrays[i], depth - 1))
      }
      else {
        result.push(arrays[i])
      }

    }
    return result
  }
  function groupBy(collection, iteratees = identity) {
    var result = {}
    iteratees = iteratee(iteratees)
    for (let i = 0; i < collection.length; i++) {
      var key = iteratees(collection[i])
      if (!Array.isArray(result[key])) { //来判断对象属性里是否已经有值了
        result[key] = []

      }

      result[key].push(collection[i])
    }

    return result

  }
  function identity(...ary) {
    return ary[0]
  }
  function sumBy(array, iteratees = identity) {
    var sum = 0
    var pre = iteratee(iteratees)
    for (let i = 0; i < array.length; i++) {
      sum += pre(array[i])
    }
    return sum
  }
  function mapValues(object, iteratees = identity) {
    var result = {}
    iteratees = iteratee(iteratees)
    for (key in object) {
      var value = object[key]
      result[key] = iteratees(value)
    }
    return result
  }
  function mapKeys(object, iteratees = identity) {
    var result = {}
    iteratees = iteratee(iteratees)
    for (var key in object) {
      var a = iteratees(object[key], key, object)
      result[a] = object[key]
    }
    return result
  }
  function every(collection, predicate = identity) {
    var sum = true
    predicate = iteratee(predicate)
    for (let i = 0; i < collection.length; i++) {
      var a = collection[i]
      if (Object.prototype.toString.call(a) == "[object Object]") {
        for (var k in a) {
          sum = sum && predicate(a[k])
        }
      }
      else {
        sum = sum && predicate(a)
      }
    }
    return sum
  }
  function some(collection, predicate = identity) {
    predicate = iteratee(predicate)
    return !every(collection, function (...args) {
      return !predicate(...args)
    })
  }
  function random(lower = 0, upper = 1, floating = true) {


  }
  function ary(f, n = f.length) {//限制传入ary的参数
    return function (...args) {
      return f(...args.slice(0, n))
    }
  }
  function before(n, func) {//调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
    var c = 0
    var result //用来保存最后一次的结果
    return function (...args) {
      if (c < n) {
        return result = func.call(this, ...args)
        c++
      } else {
        return result
      }
    }
  }
  function after(n, func) { //调用多少次后才会返回这个函数
    var c = 0
    return function (...args) {
      c++
      if (c > n) {
        return func.call(this, ...args)
      }
    }
  }
  function flip(func) {
    return function (...args) {
      return func(...args.reverse())
    }
  }
  function negate(predicate) {//针对断言函数 func 结果取反的函数。 func 断言函数被调用的时候，this 绑定到创建的函数，并传入对应参数。
    return function (...args) {
      return !predicate(...args)
    }
  }
  function get(obj, path, defaultValue) {
    if (typeof path == "string") {
      path = toPath(path)
    }
    for (let key of path) {
      if (key in Object(obj)) {//把obj转成对象
        obj = obj[key]
      }
      else {
        return defaultValue
      }
    }
    return obj
  }


  function property(path) {
    return bind(get, null, window, path)
  }
  function toPath(value) {
    return value.match(/\w+/g)
  }
  function isMatch(object, source) {
    for (var key in source) {
      if (source[key] && typeof source[key] == "object") { //如果用来检查的元素是一个对象就继续执行
        if (!isMatch(source[key], object[key])) {
          return false
        }
      } else {
        if (object[key] !== source[key]) {
          return false
        }
      }
    }
    return true
  }
  function matches(src) {
    return bind(isMatch, null, window, src)
  }
  function matchesProperty(path, srcValue) {
    if (isArray(path)) {
      srcValue = path[1]
      path = path[0]
    }
    return (obj) => {
      return obj[path] == srcValue
    }
  }


  function bind(func, thisArg, ...partials) {
    return function (...args) {
      var copy = partials.slice()
      for (let i = 0; i < copy.length; i++) {
        if (copy[i] === window) { //表示要跳过的项
          copy[i] = args.shift()//如果遇到了想要跳过的项，就从要传入的数组当中取第一项代替他
        }
      }
      return func.call(thisArg, ...copy, ...args)//这时候的args已经是处理过的了
    }




  }
  function iteratee(predicate) {//根据传入的参数类型来返回函数
    if (typeof predicate === "string") {
      return property(predicate)

    }
    if (Object.prototype.toString.call(predicate) == "[object Object]") {
      return (value) => isMatch(value, predicate);
    }
    if (Array.isArray(predicate)) {
      return (value) => value[predicate[0]] == predicate[1];
    }
    if (typeof predicate === "function") {
      return predicate
    }
  }
  function map(collection, iteratees = identity) {
    let result = []
    iteratees = iteratee(iteratees)
    for (let i = 0; i < collection.length; i++) {
      result.push(iteratees(collection[i]))
    }
    return result
  }
  function spread(func) {
    return function (ary) {
      return func.apply(this, ary)
    }
  }
  /*柯里化函数，只有传满参数才会返回值，不然都是返回绑定了参数的函数
  */
  function curry(func, arity = func.length) {

  }





  return {
    compact,
    chunk,
    join,
    last,
    lastIndexOf,
    drop,
    dropRight,
    fill,
    head,
    indexOf,
    initial,
    reverse,
    sortedIndex,
    toArray,
    max,
    min,
    sum,
    flatten,
    concat,
    flattenDeep,
    flattenDepth,
    groupBy,
    identity,
    sumBy,
    mapValues,
    mapKeys,
    every,
    some,
    flip,
    isMatch,
    bind,
    matches,
    get,
    property,
    matchesProperty,
    iteratee,
    dropRightWhile,
    ary,
    before,
    after,
    negate,
    toPath,
    map,
    spread,





  }


}()