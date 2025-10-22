/*
Tasks
1. Write a function named reverseString that takes a string as input.
2. The function should:
○ Return the string itself if it contains only one character (base case).
○ Use recursion to reverse the string by concatenating the last character
of the string with the result of the recursive call on the remaining part
of the string (recursive case).
3. Test the function with various string inputs to verify its correctness.
*/


function reverseString(str){
    //Base case
    //String contains 1 character or if empty string return the string itself
    if(str.length<=1){
        return str;
    }
    //Recursive case
    // last character "+" concatenation recursive call with the remaining string
    return str[str.length-1] + reverseString(str.slice(0,-1));

}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("recursion")); // Output: "noisrucer"
console.log(reverseString("a")); // Output: "a"
console.log(reverseString("")); // Output: ""
console.log(reverseString("Farheen")); //Output: 