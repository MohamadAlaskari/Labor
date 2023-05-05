const bits = document.querySelectorAll('.box');
const start = document.getElementById('start');
const kill = document.getElementById('kill');
const boxarr = [true, false, true, false, false, false, false, false];
const time = 350;

const rotate = () => {
    boxarr.unshift(boxarr.pop())
    startfnc()
}
const startfnc = () => {
    let index = 0;
    boxarr.forEach((wert) => {
        if (wert) {
            bits[index].classList.add('active');
        } else {
            bits[index].classList.remove('active');
        }
        index++;
    })

}
const startbutton = () => {
    start.addEventListener('click', () => {
        setInterval(rotate, time)
    })
}

const killTheBit = () => {
    kill.addEventListener('click', () => {
        boxarr[boxarr.length - 1] = !boxarr[boxarr.length - 1];
        startfnc();
        winCheck();

    })
}

const winCheck = () => {
    let allTrue = boxarr.every(item => item === true)
    let allFalse = boxarr.every(item => item === false)
    console.log('allTrue', allTrue)
    console.log('allFalse', allFalse)
    if (allTrue) {
        alert('alle sind Rot')
    }
    if (allFalse) {
        alert('alle sind false')
    }

}

const app = () => {
    winCheck();
    startfnc();
    startbutton()
    killTheBit();


}
app();