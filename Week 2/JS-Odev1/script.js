
//get name control
let names=prompt("What is your Name?"); //get name
let myName=document.querySelector(`#myName`)
if(names){
    myName.innerHTML=`${names}`
}else{//else wrong
    alert(`Please try again.`)
    location.reload();
}
//time and day control
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function clockFunc() {
    let dateTime = new Date();
    let day = days[dateTime.getDay()]//assign days to variable
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    document.querySelector(`#myClock`).innerHTML=`${hours}: ${minutes}: ${seconds}  ${day}`//html etiketine değer atamak myclock kimliğine sahip
}

setInterval(clockFunc,1000);
