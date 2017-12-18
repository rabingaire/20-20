let start = true;
let beepInterval;

let appButton = document.getElementById('appButton'); 

let audio = new Audio(__dirname + '/assets/beep.wav');

appButton.addEventListener('click', main);

function main() {
  if (start == true) {
    appButton.className = 'btn stop';
    appButton.innerHTML = 'Stop';
    start = false;
    beepInterval = setInterval(playBeep, 1200000);
  } else {
    appButton.className = 'btn start';
    appButton.innerHTML = 'Start';
    start = true;
    clearInterval(beepInterval);
  }
}

function playBeep() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() =>{
      audio.play()
    }, i*1000 );
  }
}