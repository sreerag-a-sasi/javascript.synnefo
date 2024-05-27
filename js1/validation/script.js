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

const regexp20 = /O$/i;// string ends with 'O'
const result20 = regexp20.test(str5);
console.log("result20 : ",result20);// true

const regexp21 = /O?$/i;// 'O' in string ending is optional
const result21 = regexp21.test(str5);
console.log("result21 : ", result21);// true

const regexp22 = /O+$/i;// Atleast one 'O' is required in the string end
const result22 = regexp22.test(str5);
console.log("result22 : ", result22);// true

//{}- indicates the number of charecters, a{2} means "aa", ie 2 a is  required
const regexp23 = /L{2}O$/i;// 'O' should exactly after 2 L's
const result23 = regexp23.test(str5);
console.log("result23 : ",result23);// true

const regexp24 = /L{2,4}O$/i;// 'O' should be exactly after between 2 to 4 L's
const result24 = regexp24.test(str5);
console.log("result24 : ", result24);// true

const regexp25 = /HeL{2,4}O$/i;// 'O' should be exactly after between 2 to 4 L's and 'O' is required
const result25 = regexp25.test(str5);
console.log("result25 : ", result25);// true

const regexp26 = /HeL{2,}O$/i;// '2' or more 'L' is required
const result26 = regexp26.test(str5);
console.log("result26 : ",result26);// true


// \ - indicates escape character, used for matching any characters which has special meaning
const regexp27 = /\d/i;// if there is any digits, it will be true, else it will be false
const result27 = regexp27.test(str5);
console.log("result27 : ", result27);// false

const regexp28 = /\D/i;// if there is any non-digits it will be true, if there is only digits it will be false
const result28 = regexp28.test(str5);
console.log("result28 : ",result28);// true

// suppose we want to match '.' in a string, since '.' has a special meaning in regular expressions it will not work as expected and will match evarything

const regexp29 = /./i;// if there is '.' or anything will match 
const result29 = regexp29.test(str5);
console.log("result29 : ",result29);// true

const regexp30 = /\./i;// if there is any '.' in the string it match, else it will be false
const result30 = regexp30.test(str5);
console.log("result30 : ",result30);// false

// so '\' (backslash) is used to escape special characters


//Date validation

//1
const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i;// string should start with 1 or 2 digits, then after '-' symbol, then again 1 or two digits, after '-',ending digits should be 4

//2
// | - indicates or case 0 | 1 means either 0 or 1 can occur
const regexpForDate1 = /^([0][1-9]|[1]\d|[2]\d|3[01])-([0][1-9]|[1][012])-(\d{4})$/i;// in the first group- if first character is 0 or 1 or 2 then the second character can be any digits(0-9) or if the character is '3' then the second character should be '0' or '1'
//in the second group if the first character is '0' then second charecter can be any digits (0-9) or if first character is 1 then the second character should be 0 or 1 or 2
//in the last group four digits is allowed

function checkResult(value) {
    const result = regexpForDate1.test(value);

    if (result) {
        return '';
    } else {
        return 'Inavalid String';
    }
}

const value = "16-12-2023";

let validation_result = checkResult(value);
console.log("validation_result : ",validation_result);

function onChange(arg) {
    let validation_result = checkResult(arg.value);
    let label = document.getElementById('error');
    if (validation_result) {
        label.innerHTML = validation_result;
    } else {
        label.innerHTML = validation_result;
    }
}


//'^' and '$' can only be used in the start and end of a string and cannot be used in between strings to match, so we use lookaheads for givinng starting and ending in between strings

//(?=) - positivelookahead, A(?=B) -> matches : A only if A is followed by B
//(?!) - negative lookahead, A(?!B) -> matches : A only if A is not followed by B
//(?<=) - positive lookbehind, (?<=B)A -> matches : A only if A is proceeded by B
//(?<!) - negative lookbehind, (?<!B)A -> matches : A only if A is not proceeded by B

{

    let datestring = '19-12-2023'

    let regex = /-\d+-/; // it will match also '-12-' in result and gives as result array
    const result = datestring.match(regex);

    console.log("result : ", result);

    //inorder to match exactly '12' in date string  we can use lookaheads
    let regex1 = /(?<=-)\d+(?=-)/; // this will exactly match '12' in string
    const result1 = datestring.match(regex1);
    console.log("result : ", result1);

    //example for negative lookahead and negative lookbehind
    let phone = "(91)1234567890";

    //to match numbers outside of (91)
    const phoneregex = /(?<!\()\d+(?!\))/;
    const phoneregexresult = phone.match(phoneregex);
    console.log("phoneregexresult : ",phoneregexresult);


}