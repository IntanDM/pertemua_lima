 number1 = 10;
let number2 = 20;
const number3 = 30;

var number1 = 40; //tidak disarankan
number2 = 50;
//number3 = 30;

console.log(number1);
console.log(number2);
console.log(number3);

//tipe data

//1 number
const number = 10;

console.log(typeof number);

//2 undefined
let x;

console.log(typeof x);

//3 string
const text = "Hello world";

console.log(typeof text);

//4 boolean
const islogin = true;

console.log(typeof islogin);

//5 object
let someLaterData =  null;

console.log(typeof someLaterData);

//6 array
const arr = [1, 2, 3, 4, 5];

console.log(arr[0]);

for (let i =0; i < arr.length; i++){
    console.log(arr[i]);
}

//7  object
// key : value 
const user = {
    email : "aadmnd@gmail.com",
    password : "12345678",
};

console.log(user.email);
console.log(user.password);

//komparsi apa sto lia di materi

const aString = "10";
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString != aNumber);

console.log(number2 > number3);
console.log(number2 >= number3);
console.log(number2 < number3);
console.log(number2 <= number3);

console.log(aString === aNumber); //false
console.log(aString !== aNumber); //true

console.log(number2 > number3 && number2 >= number3); // true
console.log(number2 > number3 || number2 < number3); // true
console.log(!islogin); // not is login -> false


//perulangan
//parameter 1 -> mulai -> dari 0
//paramter  2 -> berakhir -> kurang dari 5
//parameter 3 -> increament (j++) -> setiap perulangan j ditambah satu
for (let j = 0; j < 5; j++){
    console.log(j);
}

//parameter 1 -> mulai -> dari 5
//paramter  2 -> berakhir -> lebih dari 0
//parameter 3 -> decreament (j--) -> setiap perulangan j dikurang satu
for (let j = 5; j > 0; j--){
    console.log(j);
}

const language = "Deutsch";

if (language === "English"){
    console.log("Good Morning");
}

if (language === "English"){
    console.log("Good Morning");
}else {
    console.log("Selamat Pagi");
}


if (language === "English"){
    console.log("Good Morning");
}else if (language === "Deutsch") {
    console.log("Guten Morgen");
} else {
    console.log("Selamat Pagi");
}

