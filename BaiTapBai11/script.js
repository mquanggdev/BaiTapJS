// Câu 09: Trích xuất các thuộc tính từ JSON
const dataJSON = `{
    "name": "Lê Văn A",
    "age": 20,
    "email": "levana@gmail.com",
    "address": {
      "street": "Số 123, đường ABC",
      "city": "Hà Nội",
      "country": "Việt Nam"
    }
  }`;

const newDataJSON = JSON.parse(dataJSON);
console.log(newDataJSON);
if (newDataJSON?.name && newDataJSON?.email && newDataJSON?.address?.city){
    console.log(newDataJSON.name , newDataJSON.email , newDataJSON.address.city);
}

console.log("----------------------------------------------------------------------------");
// Câu 10: Xử lý mảng đối tượng JSON

const dataJSON2 = `
  [
    {
      "name": "Lê Văn A",
      "age": 30,
      "skills": ["JavaScript", "HTML", "CSS"]
    },
    {
      "name": "Nguyễn Thị B",
      "age": 25,
      "skills": ["Python", "Java", "C++"]
    },
    {
      "name": "Đỗ Văn C",
      "age": 35,
      "skills": ["Ruby", "PHP", "SQL"]
    }
  ]
`;

const newDataJSON2 = JSON.parse(dataJSON2) ;
console.log(newDataJSON2);
const result = newDataJSON2.map(element =>  element.name) ;
console.log(result);

//Câu 11: Tính tổng giá trị đơn hàng
console.log("----------------------------------------------------------------------------");
const ordersJSON = `
  [
    {
      "id": 1,
      "items": [
        {
          "productId": 1,
          "quantity": 2
        },
        {
          "productId": 2,
          "quantity": 1
        }
      ]
    },
    {
      "id": 2,
      "items": [
        {
          "productId": 3,
          "quantity": 3
        }
      ]
    }
  ]
`;

const productsJSON = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "price": 1200
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "price": 1000
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "price": 900
    }
  ]
`;

const caculateOrderTotal = (id) => {
    let arrayOrder  = JSON.parse(ordersJSON);
    let arrayProduct = JSON.parse(productsJSON);
    if (arrayOrder.find(element => element.id === id)) {
        let result = 0 ;
        const order = arrayOrder.find(element => element.id === id) ;
        result = order.items.reduce((accumulate , currentValue) => {
            let currentProduct = arrayProduct.find(element => element.id === currentValue.productId);
            accumulate += currentProduct.price * currentValue.quantity ;
            return accumulate ;
        },0) ;
        return result ;   
    }
    else {
        return "Không tìm thấy đơn hàng" ;
    }
}
console.log(caculateOrderTotal(2));
console.log(caculateOrderTotal(1));
console.log(caculateOrderTotal(3));

// Câu 12: Xóa sản phẩm từ JSON 
console.log("----------------------------------------------------------------------------");
let productsJSON2 = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "price": 1200
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "price": 1000
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "price": 900
    }
  ]
`;

const deleteProduct = (idProduct) => {
    const arrayProduct2 = JSON.parse(productsJSON2);
    const productFind = arrayProduct2.find(element => element.id === idProduct);
    if (productFind.id){
        arrayProduct2.forEach((element,index) => {
            if ( element.id === productFind.id)
            arrayProduct2.splice(index,1) ;
        });
    }
    return arrayProduct2;
}
productsJSON2 = JSON.stringify(deleteProduct(2));
console.log(productsJSON2);
//Câu 13: Tính tổng số lượng sản phẩm từ JSON
console.log("----------------------------------------------------------------------------");

const productsJSON3 = `
  [
    {
      "id": 1,
      "name": "iPhone 12",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Samsung Galaxy S21",
      "quantity": 5
    },
    {
      "id": 3,
      "name": "Google Pixel 5",
      "quantity": 8
    }
  ]
`;

let newArrayProduct = JSON.parse(productsJSON3) ;
const caculateTotalQuantity = () => {
    var allQuantity = newArrayProduct.reduce((accumulate, currentValue) => {
        accumulate += currentValue.quantity;
        return accumulate ;
     },0)
     console.log(allQuantity);
}
caculateTotalQuantity(); // 23

// Done!
