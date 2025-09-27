let sec=0;
let min=0;
let hour=0;
let time="";
let interval=null;
let startbtn=document.getElementById("startbtn");
let stopbtn=document.getElementById("stopbtn");
let resetbtn=document.getElementById("resetbtn");
stopbtn.disabled=true;
resetbtn.disabled=true;
function start(){
    if(!interval){
        interval=setInterval(() => {
            sec++;
            time=`${hour}:${min}:${sec}`;
            if(sec>=60)
            {
                min++;
                sec=0;
            }
            if(min>=60){
                hour++;
                min=0;
                sec=0;
            }
            let timerElem=document.getElementById("timer");
            timerElem.innerHTML=time;
        }, 1000);
        startbtn.disabled=true;
        stopbtn.disabled=false;
        resetbtn.disabled=false;
    }
}

function stop(){
    clearInterval(interval);
    interval=null;
    startbtn.disabled=false;
    stopbtn.disabled=true;
    resetbtn.disabled=false;

}
function reset(){
    clearInterval(interval);
    interval=null;
    sec=0;
    min=0;
    hour=0;
    time =`${hour}${hour}:${min}${min}:${sec}${sec}`;
    let timerElem = document.getElementById("timer");
    timerElem.innerHTML = time;
    startbtn.disabled=false;
    stopbtn.disabled=true;
    resetbtn.disabled=true;
}

