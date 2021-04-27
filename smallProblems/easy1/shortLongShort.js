/* Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Problem:
-takes two string as arguments
-detrmines the longer of the two string
- retrun shorter string + longer string + shorter string

Understandingn the Problem
Input: 
two string

Output:
a concatinated string (shorter + longer + shorter)

Example case:
input: 'abc', 'defgh'
output: "abcdefghabc"

input: 'abcde', 'fgh'
output: "fghabcdefgh"

input: '', 'xyz'
output: "xyz"

mental model:
-takes two string as arguments, detrmines the longer of the two string, compare the two string and retrun shorter string + longer string + shorter string

Data and Algorithem

1. take two string as argument, stringA and stringB
2. determines stringA.length and set it to stringALong.
3. determines stringB.legnth and set it to stringBLong
4. IF stringALong < stringBLong return stringALong+stringBLong+stringAlong
5. ELSE return stringBLong + stringALong + stringBlong

check with the case
input: 'abc', 'defgh'
output: "abcdefghabc"

1. take two string as argument, stringA and stringB. 'abc', 'defgh'
2. determines stringA.length and set it to stringALong. stringAlong = abc.length // 3
3. determines stringB.legnth and set it to stringBLong. stirngBLong = defgh.length // 5
4. IF stringALong < stringBLong return stringALong+stringBLong+stringAlong "abcdefghabc"
5. ELSE return stringBLong + stringALong + stringBlong

CODE */

function shortLongShort (stringA, stringB) {
  
  if (stringA.length < stringB.length) {
    return stringA + stringB + stringA;
  } else {
    return stringB + stringA + stringB;
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"