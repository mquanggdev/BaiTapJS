
export const tong = (a,b) => {
    return a + b ;
}
export const hieu = (a , b) => {
    return a - b ;
}
export const tich = (a,b) => a * b ;
export const thuong = (a , b) => a / b ;

export const allFunction = (a , b )  => {
    var lc = prompt("vui long nhap lua chon cua ban") ;
    switch (lc) {
        case "1":
           return tong(a , b) ;
        case "2":
           return hieu(a , b) ;
        case "3":
           return tich(a , b) ;
        case "42":     
           return  thuong(a , b) ;
    }   
}