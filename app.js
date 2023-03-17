// SOUNDS
let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hiHat = document.getElementById("hiHat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openHat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

// ANIMATIONS
let boomwrapper = document.getElementById("boomwrapper");
let clapwrapper = document.getElementById("clapwrapper");
let hiHatwrapper = document.getElementById("hiHatwrapper");
let kickwrapper = document.getElementById("kickwrapper");
let openHatwrapper = document.getElementById("openHatwrapper");
let ridewrapper = document.getElementById("ridewrapper");
let snarewrapper = document.getElementById("snarewrapper");
let tinkwrapper = document.getElementById("tinkwrapper");
let tomwrapper = document.getElementById("tomwrapper");


let allKeys = document.querySelectorAll(".keyswrapper");
let allSounds = [boom, clap, hiHat, kick, openhat, ride, snare, tink, tom];

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);
}

const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keypress', (keyValue) => {
    if (keyValue.key === "a") {
        boomwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            boomwrapper.style.removeProperty('animation')
        }, 100)
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if (keyValue.key === "s") {
        clapwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            clapwrapper.style.removeProperty('animation')
        }, 100)
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if (keyValue.key === "d") {
        hiHatwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            hiHatwrapper.style.removeProperty('animation')
        }, 100)
        hiHat.pause()
        hiHat.currentTime = 0
        hiHat.play();
    } else if (keyValue.key === "f") {
        kickwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            kickwrapper.style.removeProperty('animation')
        }, 100)
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if (keyValue.key === "g") {
        openHatwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            openHatwrapper.style.removeProperty('animation')
        }, 100)
        openHat.pause()
        openHat.currentTime = 0
        openHat.play();
    } else if (keyValue.key === "h") {
        ridewrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            ridewrapper.style.removeProperty('animation')
        }, 100)
        ride.pause()
        ride.currentTime = 0
        ride.play();
    } else if (keyValue.key === "j") {
        snarewrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            snarewrapper.style.removeProperty('animation')
        }, 100)
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if (keyValue.key === "k") {
        tinkwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            tinkwrapper.style.removeProperty('animation')
        }, 100)
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if (keyValue.key === "l") {
        tomwrapper.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            tomwrapper.style.removeProperty('animation')
        }, 250)
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
  })

let count = 0
allKeys.forEach((key, index) => {
    key.addEventListener("click", () => {
        key.style.animation = "zoom 0.1s linear"
        setTimeout(() => {
            key.style.removeProperty('animation')
        }, 250)
        allSounds[index].pause()
        allSounds[index].currentTime = 0
        allSounds[index].play()
    });
});

// main.addEventListener("click", () => {
//     count++
// if(count%2 == 0){
//     main.style.animation = "mainDrum 0.1s linear"
//     setTimeout(() => {
//         main.style.removeProperty('animation')
//     }, 100)
//     boom.pause()
//     boom.currentTime = 0
//     boom.play();
// } else{
//     main.style.animation = "mainDrum 0.1s linear"
//         setTimeout(() => {
//             main.style.removeProperty('animation')
//         }, 100)
//         kick.pause()
//         kick.currentTime = 0
//         kick.play();
// }
// })

// tomDrum.addEventListener("click", () => {
//     tomDrum.style.animation = "tomDrum 0.25s linear"
//         setTimeout(() => {
//             tomDrum.style.removeProperty('animation')
//         }, 250)
//         tom.pause()
//         tom.currentTime = 0
//         tom.play();
// })

// document.getElementsByClassName("hihatContainer")[0].addEventListener("click", () => {
//     count++
// if(count%5 == 0){
//     openhatCymbal.style.animation = "openHihat 0.1s linear"
//         setTimeout(() => {
//             openhatCymbal.style.removeProperty('animation')
//         }, 100)
//         openhat.pause()
//         openhat.currentTime = 0
//         openhat.play();
// } else{
//     hihatCymbal.style.animation = "zoom 0.1s linea"
//         setTimeout(() => {
//             hihatCymbal.style.removeProperty('animation')
//         }, 100)
//         hihat.pause()
//         hihat.currentTime = 0
//         hihat.play();
// }
// })

// document.getElementsByClassName("snareContainer")[0].addEventListener("click", () => {
//     snareDrum.style.animation = "snareDrum 0.1s linear"
//         setTimeout(() => {
//             snareDrum.style.removeProperty('animation')
//         }, 100)
//         snare.pause()
//         snare.currentTime = 0
//         snare.play();
// })

// document.getElementsByClassName("cymbalContainer")[0].addEventListener("click", () => {
//     mainCymbal.style.animation = "mainCymbal 0.1s linear"
//         setTimeout(() => {
//             mainCymbal.style.removeProperty('animation')
//         }, 100)
//         ride.pause()
//         ride.currentTime = 0
//         ride.play();
// })

// document.getElementsByClassName("clap")[0].addEventListener("click", () => {
//     clap.style.animation = "mainCymbal 0.1s linear"
//         setTimeout(() => {
//             clap.style.removeProperty('animation')
//         }, 100)
//         clap.pause()
//         clap.currentTime = 0
//         clap.play();
// })
