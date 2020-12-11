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




  }


}()