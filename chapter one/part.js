// quation one
// let attence=23
// if(attence>=75){
//     console.log("student allow to sit for examination")
// }else{
//     console.log("student dosnt allow to sit exam")
// }
// quation two
// let amount=9
// if(amount>=100){
//     console.log("Discount apply")
// }else{
//     console.log("no discount")
// }
// quatoin 3
// let units= Number(prompt("enter the you unit"));
// if(units > 100){
//     console.log("hignt electronic")
// }

//quation 4
// let mark= Number(prompt("enter the marks"))
// if(mark>=50){
//     console.log("pass")
// }else{
//     console.log("fail")
// }

// quation 5
// let amount= number (prompt("the the amount"))
// let reasult= amount>=500 ?"free deliver" :"free deliver apples";
// console.log(reasult)

// quation 6
// let membership= prompt("doyou have valid membership")
// let reasult= membership.toLocaleLowerCase()===
// "yes" ?"access granded":"acess denied";
// console.log(reasult)

//quation 7
// let gpa=Number(prompt("enter the gpa"))
// let attendance=Number(prompt("enter the attendance"))
// if(gpa>=3.0 && attence >=80){
//     console.log("eligible for scholership")
// }else{
//     console.log("not eligible")
// }

// quation 8
// let username=prompt("enter the usename")
// let password=prompt("enter the password")
// if(username==="admin"&& password==="123"){
//     console.log("acess granted")
// }else{
//     console.log("invalid logical")
// }

// quation 9
// let day=prompt("enter the day of the week")
// let amount=prompt("enter the purchase amount")
// if(day.toLowerCase()=== "friday"||amount>=200){
//     console.log("specail promotion apled")
// }else{
//     console.log("no special promotion")
// }

//quation 10
// let mark=(prompt("enter the mark"))
// if(mark>=80 && mark<=100){
//     console.log("A")
// }else if(mark>=700 && mark<80){
// console.log("B")
// }else if(mark>=60 && mark<70){
//     console.log("C")
// }else if(mark>=50 && mark<60){
//     console.log("D")
// }else if(mark>=0 && mark<50){
//     console.log("F")
// }else{
//     console.log("invalid mark")
// }

//quation 11
// let rating=Number(prompt("enter the serves rating "))
// if(rating===5){
//     console.log("excelent serves")
// }else if(rating===4){
//     console.log("very good serves")
// }else if(rating===3){
//     console.log("good serves")
// }else if(rating===2){
//     console.log("poor serves")
// }else if(rating===1){
//     console.log("very poor ")
// }else{
//     console.log("invalid rating")
// }

//quation 12
// let option= number(prompt("1= check Ballance\2 =deposit\n3 =withrawn\4 =exist"))
// switch(option){
//     case 1:
//         console.log("check balance");
//         break;
//         case 2:
//             console.log("deposit")
//             break;
//             case 3:
//                 console.log("withdraw")
//                 break;
//                 case 4:
//                 console.log("exist")
//                 break;
//                 default:
//                     console.log("invalid option")
// }

//quation 13
// let colour=prompt("enter colour")
// switch (colour.toLowerCase()){
//     case red:
//         console.log("stop");
//         break;
//         case yellow:
//             console.log("get ready")
//             break;
//      case green:
//             console.log("go")
//             break;
//     default:
//         console.log("invalid colour");
// }

//quation 14

// let total=0
// for(let day=1; day<=7; day++){
//     let sale=(prompt("enter the sale for day"+day +":"))
//     console.log("day"+day + "sale:"+sale)
//     total+= sales;
// }
// console.log("total weekly sale"+total)

//quation 15
// let number= (prompt("enter a number:"))
// for (let i=1;i<=10; i++){
//     console.log(number +"x"+i+"="+(number *i));
// }

// quation 16
// for (let i=1; i<=30; i++){
//     console.log("student"+i)
// }

// quation 17
// let pin="";
// while(pin !== "1234"){
//    pin= prompt("enter you pin");
// }
// console.log("correct pin. access granted")

//quation 18
// let amount;
// let total=0
// do{
//     amount= prompt("enter the purchase amount(-1 to stop")
//     if(amount !== -1){
//         total += amount;
//     }
// }while(amount == 2);
// console.log("total purchases:"+total);

// quation 19
// for(let id=1; id<=20; id++){
//     if(id===20){
//         break;
//     }
//     if(id===7 || id=== 12 || id===18){
//         continue;
//     }
//     console.log("product id:"+id);
// }

// quation 20
for(let row=1; row<=5; row++){
    for(let seat=1; seat<=6; seat++){
        console.log("row"+row+"seat"+seat);
    }
}