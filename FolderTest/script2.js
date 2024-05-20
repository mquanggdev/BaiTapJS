//Câu 21: Diện Tích của Tam Giác
function triArea(a,b){
  return (a * b) / 2 ;
}
console.log(triArea(3,2));// 3
//Câu 22: Cạnh Lớn Nhất của Tam Giác
console.log("-----------------------------------------------------------------------"); 
var nextEdge = (a,b) => {
    return  a + b - 1 ;
}
console.log(8,10);

// Câu 23: Tổng Góc của Đa Giác
console.log("-----------------------------------------------------------------------");
var sumPolygon = (...res) => {
    res.forEach((element)=>{
        console.log((element - 2) * 180);
    }) ;
}
sumPolygon(3,4,6);
// Câu 24: Điểm Bóng Đá
console.log("-----------------------------------------------------------------------");
var footballPoint = (...res) => {
    // console.log(res);
    res.forEach((element)=>{
        // console.log(element);
        var result = element[0] * 3  + element[1] ;
        console.log(result);
    })
}
var obj = {
    tran1 : [3,4,2],
    tran2 : [5,0,2],
    tran3 : [0,0,1],
};
var values = Object.values(obj) ;
footballPoint(...values);
console.log("-----------------------------------------------------------------------");
// Câu 25: Khung Hình Trên Giây
var Frames = (...res) => {
    res.forEach((element) => {
        // console.log(element);
        let result = element.min * 60 * element.frame ;
        console.log(result);
    }) ;
}
var ques = [
    {
        min : 1,
        frame: 1
    },
    {
        min : 10,
        frame: 1
    },
    {
        min : 10,
        frame: 25
    }
];
Frames(...ques);
console.log("-----------------------------------------------------------------------");
// Câu 26: Diện tích hình chữ nhật
var areaHCN = (...res) => {
    res.forEach((element) => {
        let result ;
        if ( element.Length <= 0 || element.width <= 0 ) {
            result = -1 ;
        }
        else {
            result = element.Length * element.width;
        }
        console.log(result);
    }) ;
}
var ques26 = [
    {
        Length : 4,
        width: 3
    },
    {
        Length : 11,
        width: 10
    },
    {
        Length : 5,
        width: -1
    }
];
areaHCN(...ques26);
console.log("-----------------------------------------------------------------------");
//Bài 27 : Number of Stickers (Số lượng nhãn dán)
var howManyStick = (a) => {
    return (a**a)*6 ;
}
console.log(howManyStick(1));
//Câu 28: 50-30-20 Strategy (Chiến lược 50-30-20)
console.log("-----------------------------------------------------------------------");
var fiftyThirtyTwenty = (money) => {
    let Needs = money * 1/2 ;
    let Hobby = money * 3/10;
    let Savings = money * 1/5 ;
    return {
        Needs:Needs,
        Hobby:Hobby,
        Savings:Savings
    }
}
console.log(fiftyThirtyTwenty(10000));
//Câu 29: Nth Star Number (Số sao thứ N)
console.log("-----------------------------------------------------------------------");
function starNumber(n) {
    return 6 * n * (n - 1) + 1;
  }
  console.log(starNumber(2));
console.log("-----------------------------------------------------------------------");
//Câu 30: Lãi kép

var compoundInterest = (p, t , r , n) => {
    var result = p * ((1 + r / n)**(n*t)) ;
    console.log(parseFloat(result.toFixed(2)));
}
compoundInterest(10000, 10, 0.06, 12);

console.log("-----------------------------------------------------------------------");
// Câu 31: The Farm Problem (Vấn đề trang trại)
var farmProblem = (chickens , cows , pigs) => {
    let result = chickens*2 + (cows+pigs)*4 ;
    console.log(result);
}
farmProblem(2, 3, 5);
console.log("-----------------------------------------------------------------------");
//Câu 32: Chuyển đổi tuổi sang ngày
var changeAgeToDay = (date) => {
    console.log(date * 365);
}
changeAgeToDay(65);
console.log("-----------------------------------------------------------------------");
//Câu 33: Khủng hoảng thế kỷ
function futurePeople(population, n){
    let result = population + n * 12 * 30 ;
    console.log(result);
}
futurePeople(256, 2) //976
console.log("-----------------------------------------------------------------------");
//Câu 34: Xếp chồng các hộp
function stackBoxes(n) {
    console.log( n * n);
  }
  stackBoxes(1);
  console.log("-----------------------------------------------------------------------");
  //Câu 35: Viết hàm Nói lắp
  var stutter = (s) => {
    var stringStutter = s.slice(0,2);
    stringStutter = stringStutter.concat("...") ;
    s = stringStutter + stringStutter + s;
    console.log(s);
  }
  stutter("Bạn có khỏe không?")