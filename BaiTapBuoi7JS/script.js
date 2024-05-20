console.log("---------------------------------------------------------------------");
// Câu 01. Kiểm tra số nguyên dương.
const isInteger = (number) => {
    if (number > 0 && number % 1 == 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
isInteger(15) ; // true
console.log("---------------------------------------------------------------------");
// Câu 02: Kiểm tra có phải là một hình?
const checkGeometry = (n , myArray) => {
    if ( n < 3 ) return false ;
    let tongCacGoc = 0 ;
    myArray.forEach(element => {
        tongCacGoc += element ;
    });
    if ( tongCacGoc === (n - 2) * 180){
        return true ;
    }
    else {
        return false ;
    }
}
console.log(checkGeometry(4 ,[90 , 90 ,90 ,90]));
console.log("---------------------------------------------------------------------");
// câu 03: Viết tắt câu
const abbreviate = (...res) => {
    myArray = res[0].trim().split(" ") ;
    let myString = "" ;
    myArray.forEach( (element) => {
       if ( res.length > 1){
        if ( element.length >= res[1]){
            myString += element.slice(0, 1).toUpperCase() ;
        }
       }
       else{
        myString += element.slice(0, 1).toUpperCase() ;
       }
    })
    return myString; 
}
console.log(abbreviate("Xin chào! Tôi tên là Nam.", 4)); // CN
console.log(abbreviate("Xin chào! Tôi tên là Nam.")); //XCTTLN
console.log("---------------------------------------------------------------------");
// Câu 04: AlTeRnAtInG cApS (Thay đổi viết hoa, viết thường).
const cPas = (myString) => {
    let newArray = myString.split(" ") ;
    let ArrayLength = [] ;
    
    newArray.forEach(element => {
        ArrayLength.push(element.length);
    })
    

    newArray = newArray.join("");
    let newString = "";
    for (let i = 0 ; i < newArray.length ; i = i + 2) {
        let j = i + 1 ;
        newString = newString+  newArray[i].toUpperCase() + newArray[j] ;

    };
     let newArray2 = [] ;
     let indexofvalue = 0;
     ArrayLength.forEach((element) => {
        newArray2.push(newString.slice(indexofvalue , element + indexofvalue));
        indexofvalue += element ;
     });
     return newArray2.join(" ") ;
}
console.log(cPas("Khổ trước sướng sau thế mới giàu")); // KhỔ tRưỚc SưỚnG sAu ThẾ mỚi GiÀu
console.log("---------------------------------------------------------------------");
// Câu 05: Thống kê cơ bản: Trung vị
const sum = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
  };
  
  const mean = (arr) => {
    return sum(arr) / arr.length;
  };
  
  const median = (arr) => {
    const numberBefore = arr[Math.floor((arr.length - 1) / 2)];
    const numberAfter = arr[Math.ceil((arr.length - 1) / 2)];
  
    return mean([numberBefore, numberAfter]);
  };
  
  const test1 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
  console.log(test1); // 6
  
  const test2 = median([2, 2, 6, 8, 8, 10, 10]);
  console.log(test2); // 8
  
  const test3 = median([1, 2, 2, 4, 7, 8, 9, 10]);
  console.log(test3); // 5.5
console.log("---------------------------------------------------------------------");
//Câu 06: Bánh sinh nhật
const getBirthDayCake = (name , age) => {
 let char = ""
 if ( age % 2 == 0){
    char = "#" ;    
 }
 else{
    char = "*";
}
let text = `${char} ${age} Chúc mừng sinh nhật ${name}! ${age} ${char}`;
  let stringChar = "" ;
 for(let i = 0 ; i < text.length ; i++){
    stringChar += char;
 }

 return `${stringChar}
${text}
${stringChar}
`
}
console.log(getBirthDayCake("Nam", 18));
console.log(getBirthDayCake("Long", 17));
console.log("---------------------------------------------------------------------");
// Câu 07: Blah, Blah, Blah….
const blahBlah = (myString,n) => {
    let newArray = myString.split(" ") ;
    for (let i = newArray.length - 1 ; i >= newArray.length - n ; i--){
        if ( i == newArray.length - 1){
            newArray[i] = "bla..." ;
        }else{
            newArray[i] = "bla" ;
        }
    }
    console.log(newArray.join(" "));
    
}
blahBlah("Anh học CNTT hả, cài win dùm em nhé!", 3);
blahBlah("Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.", 5)
console.log("---------------------------------------------------------------------");
//Câu 08: Tính tổng đơn hàng.
const getTotalPrice = (myArray) => {
    return myArray.reduce((accumulator , curentValue) => {
        return accumulator + curentValue.quantity * curentValue.price ;
    },0)
}
console.log(getTotalPrice([
	{ product: "Sữa", quantity: 1, price: 7000 }
]));
console.log(getTotalPrice([
    { product: "Sữa", quantity: 1, price: 7000 },
    { product: "Trứng", quantity: 12, price: 3000 },
    { product: "Bánh mỳ", quantity: 2, price: 15000 },
    { product: "Phô mai", quantity: 1, price: 5000 },
  ]));
  console.log("---------------------------------------------------------------------")
// Câu 09: Viết hoa chữ cái đầu tiên của mỗi từ
const makeTitle = (myString) => {
    var newArray = myString.split(" ");
    return newArray.map((element) => {
        return element.slice(0,1).toUpperCase() + element.slice(1);
    }).join(" ") ;
}
console.log(makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.")); // "Fix Bug Là Chuyện Dễ. Tìm Đoạn Code Gây Ra Bug Để Fix Mới Là Chuyện Khó."
console.log("---------------------------------------------------------------------")
//Câu 10: Chọn cầu chì
const chonCauTri = (fuses, current) => {
    const num = parseFloat(current);
    const possibleFuses = fuses.map(parseFloat).filter((fuse) => fuse >= num);
  
    return `${Math.min(...possibleFuses)}V`;
}
const result = chonCauTri(["3V", "5V", "12V"], "4.5V");
console.log(result); // 5V

// Câu 11: Đếm số lượng số "1" trong mảng 2D
console.log("---------------------------------------------------------------------")
const countOnes = (myArray) => {
   return myArray.reduce ((accumulator , curentValue) => {
        accumulator += curentValue.reduce ((element,curentValue) => {
            if (curentValue == 1){
                element ++;
            }
            return element ;
        },0);
        return accumulator ;
    },0);
}
console.log(countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
]
)); // 7

//Câu 12: Swap Cases (Đảo ngược viết hoa, viết thường)
console.log("---------------------------------------------------------------------")
const swappingCases = (string) => {
    let swapString = string.split("").map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
  
    return swapString;
  };
  
  const element1 = "Le VAn HunG";
  console.log(swappingCases(element1));
  const element2 = "Đặng PhưƠnG NAm";
  console.log(swappingCases(element2));
  console.log("---------------------------------------------------------------------")
// Câu 13: Inverted Numbers (Đảo ngược giá trị của số)
const changNumber = (myArray) => {
    return myArray.map(element => -element);
}
console.log(changNumber([1, -10, -20, 15, 100, -30]));
// Câu 14: Ignore Number Value (Bỏ qua các chữ số)
console.log("---------------------------------------------------------------------")
const ignoreNumber = (myString) => {
    var newString = myString.split("");
    var newString2 = newString.map( element => {
        if (isNaN(element)){ // nếu nó là not of number.
            return element ;
        }
    }).join("")
    return newString2 ;
}
console.log(ignoreNumber("Test4Ag54SF"));
//Câu 15: Tìm từ ≤ n ký tự
console.log("---------------------------------------------------------------------")
const smallWords = (myString , n) => {
    var newString = myString.split(" ");
    console.log(newString);
    return newString.filter(element => {
        if ( element.length < n){
            return element;
        }
    }).join(" ") ;
}
console.log(smallWords("I Love Foood Code Too Playing Much", 4));
//Câu 16: Tìm số trong String và Nhân
console.log("---------------------------------------------------------------------")
const multiplyNumberInString = (myString) => {
    var newString = myString.split("");
    return newString.reduce( (accumulator , curentValue) => {
        // console.log(!isNaN(curentValue));
        // console.log(curentValue);
        if (!isNaN(curentValue)){
            accumulator += (parseInt(curentValue)**2).toString() ;
        }
        return accumulator ;
    },"")
}
console.log(multiplyNumberInString("JG23BGH5BA")); // 4925
// Câu 18: Nhóm các học sinh trong một lớp theo giới tính
console.log("---------------------------------------------------------------------")
const students = [
    { hoTen: "Le Van A", gioiTinh: "Nam" },
    { hoTen: "Do Van B", gioiTinh: "Nam" },
    { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
    { hoTen: "Dao Van D", gioiTinh: "Nam" },
    { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
    { hoTen: "Vu Van F", gioiTinh: "Nam" },
  ];
  const groupedStudents = students.reduce((groups, item) => {
    if (groups[item.gioiTinh]) { // Mỗi vòng lặp kiểm tra xem trong object khởi tạo ban đầu có key là Nam hay Nữ chưa
      groups[item.gioiTinh].push(item.hoTen); // Nếu có rồi thì thêm họ tên vào key tương ứng
    } else {
      groups[item.gioiTinh] = [item.hoTen]; // Nếu chưa có tạo ra key là Nam hoặc Nữ, giá trị là một mảng
    }
    return groups;
  }, {}); // Giá trị khởi tạo ban đầu là 1 object
  
  console.log(groupedStudents); 
// Câu 19: Tính tổng theo từng nhóm trong một mảng
console.log("---------------------------------------------------------------------")
const numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
];
const sumOfGroup = (numbers) => {
    numbers.reduce( (accumulator , curentValue) => {
        let sum = 0 ;
        for (const iterator of curentValue) {
            sum += iterator ;
        }
        accumulator.push(sum);
        console.log(accumulator);
        return accumulator ;
    },[])
}
sumOfGroup(numbers) ;
// Câu 20: Tính tổng điểm theo từng lớp
console.log("---------------------------------------------------------------------")
const classStudent = [
    { hoTen: "Le Van A", lop: "A", diem: 7.5 },
    { hoTen: "Do Van B", lop: "B", diem: 6.8 },
    { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
    { hoTen: "Dao Van D", lop: "C", diem: 9 },
    { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
    { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
  ];
const sumOfPoint = (classStudent) => {
     return classStudent.reduce ( (accumulator , curentValue) => {
        if ( accumulator[curentValue.lop]){
            accumulator[curentValue.lop] += curentValue.diem;
        }
        else{
            accumulator[curentValue.lop] = curentValue.diem ;
        }
        return accumulator ;
    },{}) ;
}
console.log(sumOfPoint(classStudent));
// Câu 21: Tổng Thể Tích của Tất Cả Các Hộp
console.log("---------------------------------------------------------------------")
const totalVolume = (...res) => {
    return res.reduce((accumulator , curentValue) => {
        accumulator += curentValue.reduce((element,indexValue) => {
            element *= indexValue ;
            return element ;     
        },1)
        return accumulator ;
    },0);
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // 63
console.log(totalVolume([2, 2, 2], [2, 1, 1])); // 10

//Câu 22: Tìm Giá Trị Trung Bình của Tất Cả Các Chữ Số
console.log("---------------------------------------------------------------------")
const meanCharNumber = (myNumber) => {
    let sum = 0;
    let count = 0;
    while (myNumber > 0) {
      sum += myNumber % 10;
      myNumber = Math.floor(myNumber / 10);
      count++;
    }
    return Math.floor(sum / count);
}
console.log(meanCharNumber(42)); // 3
//Câu 23: H4ck3r Sp34k (Chuyển đổi thành ngôn ngữ Hacker)
console.log("---------------------------------------------------------------------")
const hackerSpeak = (myString) => {
    myString = myString.split("");
    return myString.reduce((accumulator , curentValue) => {
        if ( curentValue !== 'a' && curentValue !== 'e' && curentValue !== 'i' && curentValue !== 'o' && curentValue !== 's'){
            accumulator += curentValue ;
        }
        else {
            switch (curentValue) {
                case 'a':
                    accumulator += '4' ;
                    break;
                case 'e':
                    accumulator += '3' ;
                    break;
                case 'i':
                    accumulator += '1' ;
                    break;
                case 'o':
                    accumulator += '0' ;
                    break;
                case 's':
                    accumulator += '5' ;
                    break;
                default:
                    break;
            }
        }
        return accumulator ;
    },"")
}
console.log(hackerSpeak("programming is fun")); // "pr0gr4mm1ng 15 fun"
// cach 2 
// function hackerSpeak(str) { // đây là cú pháp regex , nó sẽ lấy ra tất cả các chữ có ký tự a và thay tất cả bằng 4
//     str = str.replace(/a/g, "4");
//     str = str.replace(/e/g, "3");
//     str = str.replace(/i/g, "1");
//     str = str.replace(/o/g, "0");
//     str = str.replace(/s/g, "5");
//     return str;
//   }

//Câu 24: Phạm vi mảng
console.log("---------------------------------------------------------------------")
const inclusiveArray = (...res) => {
    let result = [] ;
    for(let i = res[0] ; i <= res[1] ; i++ ){
        result.push(i) ;
    }
    console.log(result);
}
inclusiveArray(1, 5);
//Câu 25: Tách mã mặt hàng
console.log("---------------------------------------------------------------------")
const splitCode = (string) => {
    let arraytext = "" ;
    let arraynumber = "" ;
    for ( let i = 0 ; i < string.length ; i++ ){
        if (isNaN(string[i])){
            arraytext += (string[i]);
        }
        else{
            arraynumber += (string[i]);
        }
    }
    return [arraytext , arraynumber]
}
console.log(splitCode("TEWA8392")); // ["TEWA", 8392]
//Câu 26: Chạy Marathon 25 Dặm
console.log("---------------------------------------------------------------------");
const marathonDistance = (myArray) => {
    if ( typeof(myArray) == "undefined" || myArray.length === 0){
        return false ;
    }
    return myArray.reduce((element , curentValue) => {
        if(curentValue < 0){
            element += -curentValue;
        }
        else{
            element += curentValue;
        }
        return element ;
    },0) === 25
}
console.log(marathonDistance([-6, 15, 4]));// true
console.log(marathonDistance([]));//false
console.log(marathonDistance()); // false

// Câu 27: Vấn đề nhân viên bán hàng du lịch
console.log("---------------------------------------------------------------------");
const paths = numbers => {
    let result = 1 ;
    for ( let i = 1 ; i <= numbers ; i++ ){
        result *= i ;
    }
    return result ;
}
console.log(paths(4)); // 24
// cach 2 :  cách này thì dùng đệ quy để tìm ra các con đường đi ;
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   // Hàm tính tổng số lượng con đường có thể đi qua
//   function paths(n) {
//     return factorial(n);
//   }
// Câu 28: Cường độ nổ
console.log("---------------------------------------------------------------------");
const boomIntensity = (number) => {
    let stringBoom = "Boom";
    if ( number < 2) {
       return stringBoom.toLowerCase();
    }
    else {
        let stringO = "" ;
        for ( let i = 0 ; i < number ; i++){
            stringO += "o" ; 
        }
        stringBoom = stringBoom.slice(0,1) + stringO + stringBoom.slice(stringBoom.length - 1);
        if ( number % 10 == 0){
            stringBoom= stringBoom.toUpperCase() ;
            stringBoom += "!" ;
            return stringBoom ;
        }
        else if (number % 2 == 0){
            stringBoom += "!";
            return stringBoom ;
        }
        else if ( number % 5 == 0){
            return stringBoom.toUpperCase() ;
        }
      
    }
}
console.log(boomIntensity(4)); //"Boooom!"
// Có 4 ký tự "o" và 4 chia hết cho 2 (bao gồm dấu chấm than)
boomIntensity(1) //"boom"
// 1 nhỏ hơn 2, nên trả về "boom"
console.log(boomIntensity(5));// "BOOOOOM"
// Có 5 ký tự "o" và 5 chia hết cho 5 (IN HOA)
console.log(boomIntensity(10));// "BOOOOOOOOOOM!"
// Có 10 ký tự "o" và 10 chia hết cho 2 và 5 (IN HOA và bao gồm dấu chấm than)
// cach 2 :
// const boomIntensity = (n) => {
//     let result = "";
//     if (n < 2) {
//       result = "boom";
//     } else {
//       result = "B" + "o".repeat(n) + "m";
//       if (n % 2 === 0 && n % 5 === 0) {
//         result += "!";
//       } else if (n % 2 === 0) {
//         result += "!";
//       }
//       if (n % 5 === 0) {
//         result = result.toUpperCase();
//       }
//     }
//     return result;
//   };
// Câu 29: Giám sát hội trường
console.log("---------------------------------------------------------------------")
const possiblePath = (myArray) => {
    for ( let i = 0 ; i < myArray.length ; i++ ){
        if ( !isNaN (myArray[i]) && !isNaN (myArray[i + 1]) ){
            return false ;
        }
    }
    return true ;
}
console.log(possiblePath([1, "H", 2, "H", 3, "H", 4]));
console.log(possiblePath([1, 2, "H", 3]));
// Câu 30: Bộ chuyển đổi trọng lượng hành tinh
console.log("---------------------------------------------------------------------")
const weight = {
    Mercury : 3.7,
    Venus  : 8.87,
    Earth : 9.81 ,
    Mars  : 3.711 , 
    Jupiter : 24.79 , 
    Saturn : 10.44 , 
    Uranus : 8.69 ,
    Neptune : 11.15 
}
const spaceWeights = (a , b , c) => {
    return (b / weight[a]) * weight[c] ;
}
console.log(spaceWeights("Earth", 1, "Mars").toFixed(2)); ;