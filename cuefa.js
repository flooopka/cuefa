// 0-камень 1-бумага 2-ножницы
const computer = Math.floor(Math.random() * 2);
let player = Math.floor(Math.random() * 2);
if (computer===0 && player===0){
  console.log('Ничья',"Компьютер:камень,ты:камень")
}
if (computer===0 && player===1){
  console.log('Ты выиграл',"Компьютер:камень,ты:бумага")
}
if (computer===0 && player===2){
  console.log('Ты проиграл',"Компьютер:камень,ты:ножницы")
}
/////////////////////////////////////
if (computer===1 && player===0){
  console.log('Ты проиграл',"Компьютер:бумага,ты:камень")
}
if (computer===1 && player===1){
  console.log('Ничья',"Компьютер:бумага,ты:бумага")
}
if (computer===1 && player===2){
  console.log('Ты выиграл',"Компьютер:бумага,ты:ножницы")
}
/////////////////////////////////////
if (computer===2 && player===0){
  console.log('Ты выиграл',"Компьютер:ножницы,ты:камень")
}
if (computer===2 && player===1){
  console.log('Ты проиграл',"Компьютер:ножницы,ты:бумага")

}
if (computer===2 && player===2){
  console.log('Ничья')
  console.log('Ты выиграл',"Компьютер:ножницы,ты:ножницы")
}