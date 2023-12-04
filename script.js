const hrs = document.querySelector('.hrs')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
const ms = document.querySelector('.ms')

const start= document.querySelector('.start')
const stop= document.querySelector('.stop')
const reset= document.querySelector('.reset')
let h=m=s=mise=0,sT;

start.addEventListener('click',()=>{
    start.classList.add("start-active")
    stop.classList.remove("stop-active")
    sT = setInterval(stopWatch,10);
    function stopWatch(){
        mise++;

        if (mise===100){
            s++;
            mise=0
        }

        if (s===60){
            m++;
            s = 0
        }

        if (m===60){
            h++;
            m=0
        }

        updated()
    }
});
stop.addEventListener('click',()=>{
    clearInterval(sT);
    stop.classList.add("stop-active")
    start.classList.remove('start-active')
});
reset.addEventListener('click',()=>{
    clearInterval(sT)
    h=m=s=mise=0
    updated() 
    start.classList.remove('start-active')
    stop.classList.remove("stop-active")
    
});
function updated(){
    ph = h <10?'0'+h:h;
    pm = m <10?'0'+m:m;
    ps = s <10?'0'+s:s;
    pmise = mise <10?'0'+mise:mise;

    document.querySelector('.hrs').innerText=ph;
    document.querySelector('.min').innerText=pm;
    document.querySelector('.sec').innerText=ps;
   document.querySelector('.ms').innerText=pmise;
   
   
}