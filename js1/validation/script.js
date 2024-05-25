const str1 = "The cat is white";
const str2 = "rat eats fish";
const str3 = "Is it ok fishe";
const str4 = `
Hello
good meat
is always good
Hai
`;

const regexp1 = /a/;
const result1 = regexp1.test(str1); // the test method checks if str1 contains letter 'a'
console.log("result1 : ", result1); // true

const regexp2 = /A/i; // the 'i' in js used to allow capital letter and small letter be same(perform case-insensitive)
const result2 = regexp2.test(str1); // checks if str1 contains letter 'A' and performs case-insensitive search
console.log("result2 : ", result2); // true

const regexp3 = /ab/;
const result3 = regexp3.test(str1); // checks if str1 contains 'ab'
console.log("result3 : ", result3); // false

//[] - represents range
const regexp4 = /[crb]a/;
const result4 = regexp4.test(str1); // checks if str1 contains 'c' 'r' or 'b' before 'a'
console.log("result4 : ", result4); // true

const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1); // checks if str1 contains any leters in between 'a' to 'z' before 'a', also 'i' represents case insensitive search
console.log("result5 : ", result5); // true

const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1); //checks if str1 contains any letters in between 'a' - 'z' or any digits in between 0 to 9 before 'a'
console.log("result6 : ", result6); //true

// ' ^ ' represents start of a string
const regexp7 = /^rat/i;
const result7 = regexp7.test(str2); // checks if str2 starts with 'rat'
console.log("result7 : ", result7); // true

// $ represents end of a string
const regexp8 = /fish$/i;
const result8 = regexp8.test(str2); // checks if str2 ends with 'fish'
console.log("result8 : ", result8); //true

const regexp9 = /^good/im; //m-flag repesents multiline matching
const result9 = regexp9.test(str4); // checks if str4 starts with "good"
console.log("result9 : ", result9); //true

const regexp10 = /good$/im; //m-flag repesents multiline matching
const result10 = regexp10.test(str4); // checks if str4 ends with "good"
console.log("result10 : ", result10); // true

const regexp11 = /fishes?/im; //charactor before '?' is optional for matching
const result11 = regexp11.test(str3); // it matches both fishe and fishes, 's' is optional
console.log("result11 : ", result11); // true

const regexp12 = /fish(es)?/im; // '()' represents groups
const result12 = regexp12.test(str3); //it matches both fish and fishes, 'es' is optional
console.log("result12 : ", result12); // true

const regexp13 = /fishes*$/i; // the letter before '*' can occur multiple times in a string
const result13 = regexp13.test(str3); //it matches fishe, fishes, fishesss...
console.log("result13 : ", result13); //true

const regexp14 = /fishes+$/i; //the letter before '+' also can occur multiple times in a string, but atleast one occurance is required
const result14 = regexp14.test(str3); //here it matches fishes, fishesss..
console.log("result14 : ", result14); // false

const regexp15 = /fish.$/i; // any charecter can occur after fish, '.' represents any type of charecter
const result15 = regexp15.test(str3); //here it matches fishe, fisha, fishb, fish1, fish2, ... , but does not matches fish, a charecter in place of '.' is a must
console.log("result15 : ", result15); //true

const regexp16 = /fish.*$/i;
const result16 = regexp16.test(str3); // here it matches fishe, fishes, fishesss, ..., since due to '*' multiple charecters are matched
console.log("result16 : ", result16); //true




const str5="Hello";

const regexp17 =  /[kjm]/i;
const result17 = regexp17.test(str5)// if there is a 'k' or 'j' or 'm' then it will be true
console.log("result17 : ",result17);// false

const regexp18 = /[^kjm]/i;
const result18 = regexp18.test(str5)// if there is no 'k' or 'j' or 'm' then it will be true
console.log("result18 : ",result18);// true

const regexp19 = /[h+]/i;// atleast one 'H' is required
const result19 = regexp19.test(str5);
console.log("result19 : ",result19);// true 