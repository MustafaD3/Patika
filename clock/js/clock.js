document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("myName").innerHTML = prompt("Adınız Nedir")
    showTime()
    setInterval(showTime,1000)
})
function showTime(){
    const date = new Date()
    document.getElementById("myClock").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}