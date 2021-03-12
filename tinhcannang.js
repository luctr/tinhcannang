
let height= parseInt(prompt('Chiều Cao'));
let weight = parseInt(prompt('Cân Nặng'));
let bmi= weight / (height**2);

if(bmi<=18.5){
    document.write('thiếu cân');
}else if(bmi<=25.0){
    document.write('bình thường');
}else if(bmi<=30.0){
    document.write('thừa cân');
}else{
    document.write('béo phì');
}