let display=document.getElementById("display")
let timer=null;
let starttime=0;
let elapsedtime=0;
let isRunning=false;
function start(){
if(!isRunning){
starttime=Date.now()-elapsedtime;
timer=setInterval(update,10)
isRunning=true;
}
}
function stop(){
if(isRunning){
    clearInterval(timer);
    elapsedtime=Date.now-starttime();
    isRunning=false;
}
}
function reset(){
 clearInterval(timer);
  starttime=0;
  elapsedtime=0;
  isRunning=false;
  display.textContent=("00:00:00:00");
}
function update(){
const currentTime=Date.now();
elapsedtime=currentTime-starttime;
let hour=Math.floor(elapsedtime/(1000*60*60));
let minute=Math.floor(elapsedtime/(1000*60)%60);
let second=Math.floor(elapsedtime/1000 %60);
let miliseconds=Math.floor((elapsedtime%1000)/10);
hour=String(hour).padStart(2,"0")
minute=String(minute).padStart(2,"0")
second=String(second).padStart(2,"0")
miliseconds=String(miliseconds).padStart(2,"0")

display.textContent=`${hour}:${minute}:${second}:${miliseconds}`;
}