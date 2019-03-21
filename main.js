// where you esm-enabled application truly begins
import simple_square from './lib/simple_square.js'
import {pi, cube} from './lib/math_util.js'

console.log(simple_square(4))
// 16
console.log(cube(2))
// 8
console.log(`${pi} is an inexact representation of pi`)
// 3.1415 is an inexact representation of pi
