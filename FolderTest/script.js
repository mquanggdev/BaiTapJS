// câu 5 : Swapping Variables (Hoán đổi biến)
var a = "one" ;
var b = "two" ;
var tmp = a ;
a = b; 
b = tmp;
console.log(a , b); // two one
// Câu 06: Một hình tròn và hai hình vuông
function squareAreasDifferance(r) {
    var squareSmall = 2*(r**2); 
    var squareBig = (r * 2) ** 2 ;
    return squareBig - squareSmall ;
}
console.log(squareAreasDifferance(5) , squareAreasDifferance(6) ,squareAreasDifferance(7)); //50 72 98

// Câu 07: Kiểm tra xem một chuỗi có phải là palindrome hay không?

function check(s){
    var result = [];
    s.forEach(element => {
        var ok = true ;
          for (var i = 0 ; i < element.length ; i++){
            if ( element[i] !== element[element.length - i - 1]){
                ok = false;
                break;  
             }
         }
       console.log(element);
       if ( ok == true){
        result.push("true") ;
      }else{
        result.push("false") ;
      }
    });
    return result ;
}
var arrS = ["cicic","solos","test" ,"hello","rotavator"] ;
console.log(check(arrS)); // ['true', 'true', 'false', 'false', 'true']
// Câu 10: Type Coercion (Ép kiểu)
var a = "100";
var b = 20;
var c = true;

console.log(+a + b + c);// 121

//Câu 19: indexOf() và lastIndexOf()
function FirstIndexOf(chuoi , tutimkiem) {
    var n = tutimkiem.length ;
    for ( var i = 0 ; i < chuoi.length ; i++ ){
        var chuoiMoi = chuoi.slice(i , i + n) ;
        if ( chuoiMoi === tutimkiem){
            console.log(i);
            break;
        }
    }
}
 var chuoi = "JavaScript là một ngôn ngữ lập trình phổ biến. Đây là ngôn ngữ đứng đầu trong bảng xếp hạng 2023.";
var tuTimKiem = "ngôn ngữ";
FirstIndexOf(chuoi,tuTimKiem);

function LastIndexOf(chuoi,tuTimKiem){
  var n = tuTimKiem.length ;
  for ( var i = chuoi.length - 1 ; i >= 0 ; i++ ){
    var chuoiMoi = chuoi.slice(i , i - n) ;
    if ( chuoiMoi === tuTimKiem){
      console.log(n - i);
      break;
    }
  }
}
LastIndexOf(chuoi,tuTimKiem) ;

//Câu 20: Chuyển Đổi Phút thành Giây

function convert(...params) {
  params.forEach((element)=>{
    return element * 60 ;
  });
}
console.log(convert(5,3,2));

