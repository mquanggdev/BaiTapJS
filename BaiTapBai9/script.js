// Ẩn thông báo (Ví dụ 01)
const box = document.querySelector(".box");

function showNotidication () {
    setTimeout(() => {
        box.style.display = "none" ;
    }, 3000);
}

// showNotidication();
//Câu 02: Ẩn thông báo (Ví dụ 02)
function fadeOut() {
    var opacity = 1;
    var time = setInterval(()=>{
        if ( opacity <= 0){
            clearInterval(time);
            box.style.display = "none";
        }
        box.style.opacity = opacity;
        opacity -= 0.1;

    },100)
}

// setTimeout(fadeOut, 3000);
// Câu 03: Thay đổi nội dung một phần tử.

const contentCurrent = document.querySelector("#element");
contentCurrent.innerHTML = "Noi Dung Moi";

// Câu 04: Thay đổi màu chữ.

const titles = document.querySelectorAll(".title") ;
titles.forEach( (element) => {
    element.style.color = "blue";
})

// Câu 05: Đổi màu nền sau một khoảng thời gian

setTimeout(() => {
    document.getElementsByTagName("body")[0].style.background = "#FECF73";
  }, 3000);

  // Câu 06: Thay đổi nút bấm
const btnClickMe = document.querySelector(".btn");
function change() {
    setTimeout(() => {
        btnClickMe.style.height = "200px" ;
        btnClickMe.style.width = "300px" ;
        btnClickMe.style.backgroundColor = "green";
    },5000);
}
change() ;

// Câu 07: Seven Boom!

const sevenBoom = (myArray) => {
    let newString = myArray.join("") ;
    var check = newString.includes("7");
    if (check){
        console.log("Boom!");
    }
    else{
        console.log("Khong co so 7 trong mang");
    }
}
sevenBoom([2, 55, 60, 97, 86]);
sevenBoom([8, 6, 33, 100]);

// Câu 08: Phân phối tần suất của một mảng

const getFrequencies = (myArray) => {
     return myArray.reduce((accumulator , currentValue) => {
        if (!accumulator[currentValue]){
            accumulator[currentValue] = 1  ;
        }
        else {
            accumulator[currentValue] ++ ;
        }
        return accumulator ;
    }, {});
}
console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([1, 2, 3, 3, 2]));


// Câu 09: Số Disarium ;

const isDisarium = (number) => {
    let newArrayString = number.toString().split("");
    let tong = newArrayString.reduce((accumulator , currentValue , index) => {
        accumulator += currentValue ** (index + 1 ) ;
        return accumulator ;
    },0) ;
    if ( tong === number){
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isDisarium(544); // false
isDisarium(518); // true

// Câu 10: Hoán đổi ký tự
const doubleSwap = (myString , a , b) => {
    let newString = "" ;
    for ( let i = 0 ; i < myString.length ; i++ ){
        if ( myString[i] === a){
            newString += b ;
        }
        else if ( myString[i] === b){
            newString += a ;
        }
        else {
            newString += myString[i] ;
        }
    }
    return newString ;
}
console.log(doubleSwap( "aabbccc", "a", "b") );
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));


// Câu 11: Số Pronic

const isHeteromecic = (number) => {
    for ( let i = 0 ; i <= number / 2 ; i++ ){
        if (i * (i + 1) === number){ 
            return true ;
        }
    }
    return false ;
}

console.log(isHeteromecic(7));
console.log(isHeteromecic(110));
console.log("---------------------------------------");
// Câu 12: Thay đổi chuỗi thành camelCase
const camelCase = (myString) => {
    let newString = "" ;
    if ( myString.includes("_")){
        for (const char of myString) {
            if ( char !== "_"){
                newString += char ;
            }
            else {
                newString += " " ;
            }
         }
         return changecamelCase(newString) ;
    } else {
        return changecamelCase(myString) ;
    }   
}
function changecamelCase(myString) {
    myString= myString.toLowerCase() ;
    let newArray = myString.split(" ") ;
    let newArray2 = [] ;
    newArray2.push(newArray[0]);
    for ( let i = 1; i < newArray.length ; i++ ){
        newArray2.push(newArray[i].slice(0,1).toUpperCase() + newArray[i].slice(1));
    }
    return newArray2.join("");
}

console.log(camelCase("low high_HIGH"));

// cach 2: dung replace(/kytu/g , ky_tu_muon_thay) ;
console.log("---------------------------------------");
// Câu 13: Tìm ký tự đầu tiên lặp lại

const firstRepeat = (myString) => {
    let cnt = [] ;
    for ( let i = 0 ; i < myString.length ;i++){
        cnt[myString[i]] = 0;
    }
    for (let char of myString){
        cnt[char]++ ;
    }

    for (const char in cnt) {
        if ( cnt[char] === 2){
            return char ;
        }
    }
    return -1 ;
}
console.log(firstRepeat("Gandalf"));;
console.log(firstRepeat("Isildur"));

console.log("---------------------------------------");
// Câu 14: Số nhiều!

const pluralize = (myArray) => {
   return myArray.reduce((accumulator , currentValue) => {
        if (!accumulator[currentValue]){
            accumulator[currentValue] = currentValue ;
        }
        else {
            accumulator[currentValue] = currentValue + "s" ;
        }
        return accumulator ;
    },[]);
}
console.log(pluralize(["table", "table", "table"]));
console.log(pluralize(["cow", "pig", "cow", "cow"]));
console.log(pluralize(["chair", "pencil", "arm"]));

// Câu 15:
const mapLetters = (myString) => {
    let newArray = myString.split("") ;
    return newArray.reduce((accumulator, currentValue , index) => {
        console.log(currentValue , index);
        if ( !accumulator[currentValue]){
            accumulator[currentValue] = [index];
        }
        else {
            accumulator[currentValue].push(index);
        }
        return accumulator;
    },{});
}
 console.log(mapLetters("froggy"));