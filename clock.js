var card=document.getElementById('card');
var message=document.getElementById('message');
card.addEventListener('mouseover',function(){
    card.style.backgroundColor="green";
    message.innerHTML="You are IN";
});
card.addEventListener('mouseout',function(){
    card.style.backgroundColor="red";
    message.innerHTML="You are out";
});
card.addEventListener('click',function(){
    card.style.backgroundColor="yellow";
    message.innerHTML="You Clicked Me!";
});   

function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;

    playSound();
}

let clickSound = new Audio("WhatsApp Audio 2025-08-13 at 11.46.34_8c1d5a8a.mp3");
clickSound.autoplay = true; 
clickSound.muted = false;   

function playSound(){
    clickSound.currentTime=0;
    clickSound.play().catch(err => {
        console.warn("Autoplay blocked by browser:", err);
    });
}

window.setInterval(updateClock, 1000);
updateClock();
