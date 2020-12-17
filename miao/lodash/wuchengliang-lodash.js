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
  function groupBy(collection, iteratee = identity) {
    var result = {}
    for (let i = 0; i < collection.length; i++) {
      var key = iteratee(collection[i])
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
  function sumBy(array, iteratee = identity) {
    var sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += iteratee(array[i])
    }
    return sum
  }
  function mapValues(object, iteratee = identity) {
    var result = {}

    for (var key in object) {
      result[key] = iteratee(object[key], key, object)

    }
    return result
  }
  function mapKeys(object, iteratee = identity) {
    var result = {}
    for (var key in object) {
      var a = iteratee(object[key], key, object)
      result[a] = object[key]
    }
    return result
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





  }


}()