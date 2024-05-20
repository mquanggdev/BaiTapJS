//Câu 01: Max number (Tìm số lớn nhất)
console.log("-------------------------------------------------------------------------------------------");
const findMaxNumber = (a , b) => {
    if ( a > b) {
        console.log(a);
    }
    else{
        console.log(b);
    }
}
findMaxNumber(10,5) ; //10
//Câu 02: Bài toán FizzBuzz
console.log("-------------------------------------------------------------------------------------------");
const FizzBuzz = (a) => {
    if (typeof(a) !== 'number'){
        console.log("Vui Long Nhap So");
    }
    else {
        if ( a % 3 == 0 && a % 5 == 0) {
            console.log("FizzBuzz");
            return;
        }
        if (a % 3 == 0){
            console.log("Fizz");
            return;
        }
        if ( a % 5 == 0){
            console.log("Buzz");
            return;
        }
        else if ( a % 3 != 0 || a % 5 != 0) {
            console.log(a);
            return;
        }
    }
};
FizzBuzz(30);//FizzBuzz
//Câu 03: Tốc độ giới hạn
console.log("-------------------------------------------------------------------------------------------");
const checkSpeedLimit = a =>{
    let result = "" ;
    if ( a <= 70){
        result = "Van toc an toan";
        return result ;
    }
    else if ( a > 70 && a <= 120) {
        let soTien = ((a - 70 - a % 5) / 5) * 30000 ; // dùng math.floor cũng được
        result = `Ban bi phat ${soTien} + d` ;
        return result;
    }
    else {
        return "Ban bi tuoc bang lai xe" ;
    }
}
console.log(checkSpeedLimit(99)); // Ban bi phat 150000 + d

//Câu 04: In ra key, value của object
console.log("-------------------------------------------------------------------------------------------");
const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
  };
const getKeyValue = object => {
    let arrayKey = Object.keys(object);
    arrayKey.forEach(element => { // lưu ý : không dùng object.element được bởi vì trong object không có key nào tên là element cả , element chỉ là biến lưu trữ cái key thôi , mà muốn truy cập value của obj thì cần chấm đến chính xác tên của nó
        if( typeof(object[element]) === "string"){
            console.log(`${element} : ${object[element]} ;`);
        }
    });
}
getKeyValue(person);
//Câu 05: Số nguyên tố
console.log("-------------------------------------------------------------------------------------------");
const CheckPrime = number => {
    if (number < 2){
        return false ;
    }
    for (let i = 2 ; i <= number/2 ; i++){
        if (number % i == 0){
            return false ;
        }
    }
    return true ;
}
const Prime = (n) => {
    for ( let i = 2 ; i <= n ; i++ ){
        if ( CheckPrime(i)){
            console.log("Số Nguyên Tố :",i);
        }
    }
}
Prime(5);

//Câu 06: 24-Hour Time
console.log("-------------------------------------------------------------------------------------------");
const convertTime = time => {
    var newTime1 = time.slice(0,8) ;
    let newTime2 = newTime1.split(":");
    if (time.charAt(time.length - 2) === 'A'){
        if ( newTime2[0] >= 12 && newTime2[1] > 0 && newTime2[2] > 0){
            newTime2[0] = `${parseInt(newTime2) - 12}` ;
        }
       let newString = newTime2.join(":") ;
       return newString ;
    }
    else {
        if ( newTime2[0] < 12){
            newTime2[0] = `${parseInt(newTime2) + 12}` ;
        }
       let newString =  newTime2.join(":");
       return newString;
    }
}

console.log(convertTime('12:40:22AM'));
console.log(convertTime("12:45:54PM"));
console.log(convertTime("07:05:45PM"));
//Câu 07: Kiểm tra năm nhuận
console.log("-------------------------------------------------------------------------------------------");
const leapYear = year => {
    if ( (year % 4 == 0 & year % 100 != 0 )|| (year % 400 == 0) ){
        return true ;
    }
    return false ;
}
console.log(leapYear(2016));
//Câu 08: Lấy đuôi mở rộng của một file.
console.log("-------------------------------------------------------------------------------------------");
const getFile = fileName => {
    let index = fileName.indexOf(".") ;
    let tail = fileName.slice(index + 1) ;
    console.log(tail);
}
getFile("test.html");
//Câu 12: Lấy ra tên
console.log("-------------------------------------------------------------------------------------------");
const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
var arr = [] ;
myFriends.forEach(e => {
    if (typeof(e) == 'string'){
        arr.push(e) ;
    }
});
console.log(arr);

//Câu 13: Cửa hàng tiện lợi
console.log("-------------------------------------------------------------------------------------------");
var arrMoneyKey = [0.25 , 0.1 , 0.05 , 0.01];
const changeEnough = (arrMoney , cost) => {
    let valueMoney = 0 ;
    arrMoney.forEach((e,index) =>{
        if(index == 0){
            valueMoney += e * 0.25 ;
        }
        else if ( index == 1){
            valueMoney += e * 0.1 ;
        }
        else if ( index == 2){
            valueMoney += e * 0.05 ;
        }
        else {
            valueMoney += e * 0.01 ;
        }
    });
    if (valueMoney < cost) return false ;
    if(cost == 0) return true;
}
console.log(changeEnough([2, 100, 0, 0] , 14.11));

//Câu 14: Máy tính cơ bản
console.log("-------------------------------------------------------------------------------------------");
const calculator = (param1 ,sign , param2) => {
    let result = 0 ;
    if (param2 == 0 && sign == "/"){
        console.log("Not Devide for zero");
    }
    switch(sign) {
        case "+" :
            result = param1 + param2 ;
            break;
        case "-" :
            result = param1 - param2 ;
            break;
        case "/" :
            result = param1 / param2 ;
            break;
        case "*" :
            result = param1 * param2 ;
            break;
    }
    return result ;
}
console.log(calculator(2, "+", 2)); //4
//Câu 15: Tính Thể Tích của Hình Nón
console.log("-------------------------------------------------------------------------------------------");
const coneVolume = (r , h) => 1/3 * Math.PI * (r**2) * h ;
console.log(coneVolume(2, 3).toFixed(2)); // 12.57;
//Câu 16: Tìm Giá Giảm Giá
console.log("-------------------------------------------------------------------------------------------");
const discount = (a , b) => a * (b / 100) ;
console.log(discount(1500, 50)); // 750
//Câu 17: Trọng Lượng Của Hình Trụ
console.log("-------------------------------------------------------------------------------------------");
const weight = (r , h) => Math.PI * r**2 * h * 10**(-3) ;
console.log(weight(4, 10).toFixed(2)); // 
//Câu 18: Trúng Độc Đắc
console.log("-------------------------------------------------------------------------------------------");
const testJackpot = arrMoney => {
    pivotValue = arrMoney[0] ;
    let result = arrMoney.every(element => element === pivotValue) ;
    return result ;
}
console.log(testJackpot(["@", "@", "@", "@"])); // true
console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // false
//Câu 19: Instant JAZZ
console.log("-------------------------------------------------------------------------------------------");
const jazzify = arrayNode => {
   return arrayNode.map((element) => {
        // console.log(element);
        var newValue = element.charAt(element.length - 1) == '7' ? element : element = element + "7" ;
        return newValue ;
    })
}
console.log(jazzify(["Dm", "G", "E", "A"]));
//Câu 20: Mảng Đối Xứng
console.log("-------------------------------------------------------------------------------------------");
const mirror = (arrayValue) => {
      let newArrayValue = arrayValue.reduce((accumulator , currentValue , index ) => {
        if ( index != arrayValue.length - 1){
            accumulator.push(currentValue) ;
        }
        return accumulator ;
     },[]);
     arrayValue.push (...newArrayValue.reverse())  ;
     return arrayValue
}
console.log(mirror([0, 2, 4, 6]) ); // [0, 2, 4, 6, 4, 2, 0]

// Câu 21: Tìm Số Thiếu
console.log("-------------------------------------------------------------------------------------------");
const missingNum = (arrayValue) => {
    var pivotSum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 ;
    var newSum =  0
    arrayValue.forEach( (element) => {
        newSum += element ;
    });
    return pivotSum - newSum ;
}
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // 7

// Câu 22: Tính Sự Bằng Nhau của 3 Giá Trị
console.log("-------------------------------------------------------------------------------------------");
function equal(a, b, c) {
    if (a === b && b === c) {
      return 3; 
    } else if (a === b || b === c || a === c) {
      return 2; 
    } else {
      return 0; 
    }
  }
  console.log(equal(3, 4, 3));//2
 // Câu 23: Viết hoa tên của bạn
console.log("-------------------------------------------------------------------------------------------");

const capMe = (res) => {
    res.forEach((element,index) => {
        let curValue = element ;
        element = element.toLowerCase();
         let newElement = element.replace(element[0],element[0].toUpperCase()) ;
       res[index] = res[index].replace(curValue,newElement);
    });
    return res
}

console.log(capMe(["mavis", "senaida", "letty"]));// ['Mavis', 'Senaida', 'Letty']
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])); // ['Samuel', 'Mabelle', 'Letitia', 'Meridith']
 // Câu 24: Ba Số Là Bộ Ba Pythago
 console.log("-------------------------------------------------------------------------------------------");
const isTriplet = (a , b , c) => {
    if ( a > b && a > c){
        return c**2 + b**2 == a**2 ;
    }
    else if (b > a && b > c){
        return a**2 + c**2 == b**2 ;
    }
    else if (c > a && c > b){
        return a**2 + b**2 == c**2 ;
    }
}
console.log(isTriplet(3,4,5)); // true 
console.log(isTriplet(13,5,12));// true
console.log(isTriplet(1,2,3));// false

//Câu 25: Trả về ký tự ở giữa của chuỗi
console.log("-------------------------------------------------------------------------------------------");
const getMiddle = (string) => {
    let index = string.length / 2 ;
    if( string.length % 2 == 0) {
        newStrings = string.slice(index - 1 , index + 1) ;
    }
    else{
        newStrings = string.slice(index , index + 1) ;
    }
    
    console.log(newStrings); 
}
getMiddle("test");// es
getMiddle("testing");//t

//Câu 26: Chuyển đổi nhiệt độ
console.log("-------------------------------------------------------------------------------------------");
const tempConversion = (temp) => {
    let F = temp * 9/5 + 32 ;
    let K = temp + 273.15 ;
    return [F,K] ;
}
console.log(tempConversion(100));//[212, 373.15]

//Câu 27: Độ dài đoạn thẳng
console.log("-------------------------------------------------------------------------------------------");
const lineLength = (arrayA , arrayB) => {
    let result = Math.sqrt((arrayA[0] - arrayB[0])**2 + (arrayA[1] - arrayB[1])**2) ;
    console.log(result.toFixed(2));
}
lineLength([15, 7], [22, 11]);//8.06

//Câu 28: Lọc và Sắp Xếp Duy Nhất
console.log("-------------------------------------------------------------------------------------------");
const uniqueSort = (arrayValue) => {
    let stringSX = "" ;
    let newArray = [] ;
    arrayValue.forEach((element) => {
        if(!stringSX.includes(element.toString())){
           stringSX += element ;
           newArray.push(element) ;
        }
        
    });
    for (let index = 0; index < newArray.length; index++) {
        let minIndex = index;
        for (let index2 = index + 1; index2 < newArray.length; index2++) {
            if (newArray[minIndex] > newArray[index2]){
                minIndex = index2 ;
            }
        }
        let tmp = newArray[index] ;
        newArray[index] = newArray[minIndex];
        newArray[minIndex] = tmp ;
    }
    console.log(newArray);
}
uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]);//[1, 2, 3, 4]
uniqueSort([6, 7, 3, 2, 1]);//[1, 2, 3, 6, 7]
//Câu 29: Chuyển đổi một câu thành chuỗi viết tắt
console.log("-------------------------------------------------------------------------------------------");
const ChangeString = (myString) => {
    myString = myString.trim();
    let arrayChar = myString.split(" ") ;
    arrayChar.forEach((element,index) => {
        if (element !== "và"){
            arrayChar[index] = element.toUpperCase().slice(0,1) + "." ;
        }
    })
     arrayChar = arrayChar.join(" ") ;
     return arrayChar;
}
console.log(ChangeString(" Học và lập trình là thú vị   "));//"H. và L. T. L. T. V.";
console.log(ChangeString(" Công ty Công Nghệ và Dịch Vụ DACA "));//"C. T. C. N. và D. V. D."
//Câu 30: Loại bỏ các ký tự trùng lặp trong một chuỗi
console.log("-------------------------------------------------------------------------------------------");
const SetFunction = (myString) => {
    myString = myString.toLowerCase().trim();
    // console.log(myString);
    let result = "" ;
    for (const iterator of myString) {
        if (!result.includes(iterator)){
            result += iterator ;
        }
    }
    return result ;
} 
console.log(SetFunction("Mississippi"));//misp
//Câu 31: Đếm số từ trong một chuỗi
console.log("-------------------------------------------------------------------------------------------");
const CountWord = (myString) => {
    let arrayWord = myString.trim().split(" ") ;
    return arrayWord.length;
}
console.log(CountWord("    JavaScript là một ngôn ngữ lập trình   "));//7
//Câu 32: Tìm từ dài nhất trong chuỗi
console.log("-------------------------------------------------------------------------------------------");
const FindMostLength = (myString) => {
    let arrayWord = myString.trim().split(" ") ;
    let maxLength = 0 ;
    return arrayWord.reduce( (accumulator , currentValue , index) => {
        if (currentValue.length > maxLength){
            maxLength = currentValue.length ;
            accumulator = currentValue ;
        }
        return accumulator ;
    },"");
}
console.log(FindMostLength(" JavaScript là ngôn ngữ lập trình phổ biến nhất "));//
//Câu 33: Tính tổng và trung bình của các số
console.log("-------------------------------------------------------------------------------------------");
const SumAndAverage = (myString) => {
    let arrayWord = myString.trim().split(" ") ;
    let cnt =  0;
    let sum = arrayWord.reduce( (accumulator , currentValue ) => {
        
        // console.log(parseInt(currentValue));
        if (!isNaN(parseInt(currentValue))){
            cnt ++ ;
            accumulator += parseInt(currentValue) ;
        }
        // console.log(accumulator);
        return accumulator ;
    },0) ;
    console.log(sum);
    console.log(sum / cnt);
}
SumAndAverage("5, 8, 10, abc, 12"); // 35 , 8.75
//Câu 34: Quản lý danh sách công việc
console.log("-------------------------------------------------------------------------------------------");
// var danhSachCongViec = {} ;
// var ok = true;
// let count = 0 ;
// while( ok == true){
//     var luachon = prompt(`
//         Vui Long chon 1 lua chon trong cac lua chon duoi day
//         1 : Them Cong Viec
//         2 : Hien Thi Danh Sach Cong Viec
//         3 : Thoat Chuong Trinh
//     `);
//     if (luachon === "1"){
//         count++ ;
//         console.log(count);
//         var tenCongViec = prompt("nhap ten cong viec") ;
//         danhSachCongViec[`cong viec ${count}`] = tenCongViec ;
//     }
//     else if (luachon === "2"){
//         console.log("Danh sach cong viec la :");
//         console.log(danhSachCongViec);
//     }
//     else {
//         break ;
//     }
// }
//Câu 35: Giải Phương Trình
console.log("-------------------------------------------------------------------------------------------");
function tinhToan(bieuThuc) {
    // Tạo một mảng chứa các số và toán tử từ chuỗi
    let so = []; // Mảng chứa các số
    let toanTu = []; // Mảng chứa các toán tử
    let soHienTai = ''; // Biến tạm thời lưu trữ số đang được xây dựng từ chuỗi
    for (let kyTu of bieuThuc) {
        if (!isNaN(kyTu)) {
            soHienTai += kyTu; // Xây dựng số hiện tại từ các ký tự số liên tiếp
        } else {
            so.push(parseInt(soHienTai)); // Thêm số hiện tại vào mảng số
            toanTu.push(kyTu); // Thêm toán tử vào mảng toán tử
            soHienTai = ''; // Đặt lại chuỗi số hiện tại
        }
    }
    so.push(parseInt(soHienTai)); // Thêm số cuối cùng vào mảng số

    // Thực hiện phép nhân trước để đảm bảo tính đúng đắn của phép tính
    for (let i = 0; i < toanTu.length; i++) {
        if (toanTu[i] === '*') {
            so[i] *= so[i + 1]; // Thực hiện phép nhân
            so.splice(i + 1, 1); // Xóa số sau khi đã thực hiện phép nhân
            toanTu.splice(i, 1); // Xóa toán tử sau khi đã thực hiện phép nhân
            i--; // Để xử lý các phép nhân liên tiếp
        }
    }

    // Thực hiện các phép cộng và trừ
    let ketQua = so[0]; // Khởi tạo kết quả bằng số đầu tiên
    for (let i = 1; i < so.length; i++) {
        if (toanTu[i - 1] === '+') {
            ketQua += so[i]; // Thực hiện phép cộng
        } else if (toanTu[i - 1] === '-') {
            ketQua -= so[i]; // Thực hiện phép trừ
        }
    }

    return ketQua; // Trả về kết quả
}

// Kiểm tra các ví dụ
console.log(tinhToan("1+1"));        // ➞ 2
console.log(tinhToan("7*4-2"));      // ➞ 26
console.log(tinhToan("1+1+1+1+1"));  // ➞ 5
console.log(tinhToan("6+6*6-6"));    // ➞ 36
console.log(tinhToan("15+20*6-12"));    // ➞ 123
//Câu 36: Matchstick Houses (Nhà diêm)
console.log("-------------------------------------------------------------------------------------------");
const matchHouses = (number) => {
    return 4*number + number + 1 ; 
}
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));
//Câu 37: Sum of Cubes (Tổng các khối lập phương)
console.log("-------------------------------------------------------------------------------------------");
const sumOfCubes = (myArray) => {
    return myArray.reduce( (accumulator , currentValue) => {
        return accumulator + currentValue ** 3 ;
    }, 0 );
}
console.log(sumOfCubes([1, 5, 9])); //  855

//Câu 38: Tổng các phần tử số trong một mảng
console.log("-------------------------------------------------------------------------------------------");
const numbersSum = (myArray) => {
    let sum = 0 ;
    myArray.forEach( (element , index) => {
        if ( typeof(element) == "number")
        sum += parseInt(element) ;
    })
    console.log(sum);
}
numbersSum([1, 2, "13", "4", "645"]) ; // 3
numbersSum([true, false, "123", "75"]) ; // 0
//Câu 39: Số lớn nhất
console.log("-------------------------------------------------------------------------------------------");
const largestNumbers = ( n , myArray) => {
    for (let index = 0; index < myArray.length; index++) {
        let minIndex = index;
        for (let index2 = index + 1; index2 < myArray.length; index2++) {
            if (myArray[minIndex] > myArray[index2]){
                minIndex = index2 ;
            }
        }
        let tmp = myArray[index] ;
        myArray[index] = myArray[minIndex];
        myArray[minIndex] = tmp ;
    }
    console.log(myArray.reverse().slice(0 , n).reverse());
}
largestNumbers(3, [14, 12, 57, 11, 18, 16]);//[16, 18, 57]
//Câu 40: Sam có ở cùng Frodo không?
console.log("-------------------------------------------------------------------------------------------");
const middleEarth = (myArray) =>{
    let ok = false ;
    myArray.forEach((element , index)=>{
        if (element == "Sam" && (myArray[index + 1] == "Frodo" || myArray[index - 1] == "Frodo") ){
            ok = true;
        }
        
    });
    console.log(ok);
}
middleEarth(["Orc", "Sam", "Frodo", "Legolas"]); // true
middleEarth(["Frodo", "Saruman", "Sam"]); // false
