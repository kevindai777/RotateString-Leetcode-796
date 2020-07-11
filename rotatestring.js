//Objective is to see whether two strings are rotations of each other.

let str1 = 'ABCDE'
let str2 = 'CDEAB'


//O(n * m) solution that checks if the two strings are of same length and
//the substring of one exists in the other.

return str1.length == str2.length && (str1 + str1).indexOf(str2) !== -1