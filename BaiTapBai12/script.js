// Câu 01: In ra từng phần tử của mảng

const forEachTest = (array , callback) => {
    array.forEach(e => {
        callback(e) ;
    })
}
function consoleLog(a){
    console.log(a);
}
var array =  ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"]
forEachTest(array , consoleLog);
//Câu 02: Cộng từng cặp phần tử liên tiếp của mảng
const forEachPair = (array , callback) => {
    for (var i = 0 ; i < array.length - 1 ; i++ ){
        consoleLogT(array[i] , array[i + 1]);
    }
}
function consoleLogT(a , b) {
    var result = a + b ;
    console.log(result);
}

let arrayT= [1, 2, 3, 4, 5] ;
forEachPair(arrayT , consoleLog);

//Câu 03: Trả về một số nguyên ngẫu nhiên từ 1 đến 10

const promise = new Promise((resolve , reject) => {
    var number = Math.floor (Math.random() * 10) ;
    if ( number){
        resolve (number) ;
    }
    else {
        reject() ;
    }
}) 
   
promise 
   .then ((number)=>{
    console.log(number);
   })
   .catch(() => {
    console.error("Không thể tạo số random");
   })

//Câu 04: Lấy danh sách các số chẵn

const evenArray =  (array) => {
    return new Promise((resolve , reject)=>{
        var arrayEven = array.reduce((accumlate , currentValue) => {
            if ( currentValue % 2 == 0){
                accumlate.push(currentValue) ;
            }
            return accumlate ;
           
        },[]);

        if (arrayEven.length !== 0){
            resolve(arrayEven);
        }
        else {
            reject("Không tìm thấy số chẵn trong mảng");
        }
    })
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
evenArray(myArray) //  thử thêm  [11, 13, 15, 17, 19]
 .then ((value) => {console.log(value);})
 .catch((err)=>{
    console.log("Lỗi :" , err);
 }
)

// Câu 05: Lấy data thông qua API và in ra màn hình.

const country = document.querySelector(".country") ;
const fetchApi = async (api) => {
    const response = await fetch(api);
    const result = await response.json();
    return result;
  };
  
  fetchApi("https://restcountries.com/v2/all")
 .then ((data) =>{
    console.log(data);
     let arrayCountry  = data.map((item)=> {
        return `
        <div class="inner-item">
        <div class="inner-box">
          <img class="inner-image" src="${item.flag}" alt="${item.capital} - ${item.name}" />
          <div class="inner-title">
            ${item.capital} - ${item.name}
          </div>
        </div>
      </div>
        `
     })
     country.innerHTML = arrayCountry.join("");
 })