const {deepQuery, isColor} = require('./ktools.cjs')


console.log(deepQuery({
  a: 'first',
  b: {
    c: 'second'
  }
}, "b", "c")) // second

console.log('isColor(#7bc96f):', isColor('#7bc96f'));