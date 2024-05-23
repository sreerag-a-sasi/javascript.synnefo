const str1  = "The cat is white";
const str2  = "rat eats fish";
const str3  = "Is it ok fishe";
const str4  = `
Hello
good meat
is always good
Hai
`;


const regexp1 = /a/;
const result1 = regexp1.test(str1);// the test method checks if str1 contains letter 'a'
console.log("result1 : ", result1);// true

const regexp2 = /A/i; // the 'i' in js used to allow capital letter and small letter be same(perform case-insensitive)
const result2 = regexp2.test(str1);// checks if str1 contains letter 'A' and performs case-insensitive search
console.log("result2 : ",result2);// true

const regexp3 = /ab/;
const result3 = regexp3.test(str1);// checks if str1 contains 'ab'
console.log("result3 : ",result3);// false


//[] - represents range
const regexp4 = /[crb]a/;
const result4 = regexp4.test(str1);// checks if str1 contains 'c' 'r' or 'b' before 'a'
console.log("result4 : ",result4);// true

const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1);// checks if str1 contains any leters in between 'a' to 'z' before 'a', also 'i' represents case insensitive search
console.log("result5 : ",result5);// true

const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1);//checks if str1 contains any letters in between 'a' - 'z' or any digits in between 0 to 9 before 'a'
console.log("result6 : ",result6);//true


// ' ^ ' represents start of a string 
const regexp7 = /^rat/i;
const result7 = regexp7.test(str2);// checks if str2 starts with 'rat'
console.log("result7 : ",result7);// true

// $ represents end of a string 
const regexp8 = /fish$/i;
const result8 = regexp8.test(str2);// checks if str2 ends with 'fish'
console.log("result8 : ",result8);//true

const regexp9 = /^good/im; //m-flag repesents multiline matching
const result9 = regexp9.test(str4);// checks if str4 starts with "good"
console.log("result9 : ",result9);//true

const regexp10 = /good$/im; //m-flag repesents multiline matching
const result10 = regexp10.test(str4);// checks if str4 ends with "good"
console.log("result10 : ",result10);// true