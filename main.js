// where you esm-based application truly begins
import {default as sqr} from './lib/simple_square.js'
import {pi, cube} from './lib/math_util.js'

console.log(sqr(4))
// 16
console.log(cube(2))
// 8
console.log(`${pi} is an inexact representation of pi`)
// 3.1415 is an inexact representation of pi
