//Default Animations
let bubble = anime({
    targets: ['.bubble','.icon'],
    translateY: 30,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
})

let bruceBob = anime({
    targets: ['.bruce'],
    translateY: ['0vh', '-3vh'],

    height: ["30vh", "31vh"],

    loop: true,
    easing: 'easeInOutSine',
    duration: 750,
    direction: 'alternate',
})

let bruceSwim = anime({
    begin: function (){ 
        document.getElementById("bruce").src = "assets/pngs/bruce.png";
    },
    targets: ['#bruceTank'],
    translateX: ['80vh', '-210vh'],
    loop: true,
    duration: 15000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loopComplete: function() {
        let bruce = document.getElementById("bruce");
        if (bruce.src.match("assets/pngs/bruce.png")) {
            bruce.src = "assets/pngs/bruceReverse.png";
        }
        else {
            bruce.src = "assets/pngs/bruce.png";
        }
    }
})

//Bruce Clicked Animations
let bruceJump = anime({
    targets: ['.bruce'],
    translateY: '-75vh',
    loop: true,
    easing: 'linear',
    duration: 1500,
    direction: 'alternate',
    autoplay: false,
})

let bruceRun = anime({
    begin: function (){ 
        document.getElementById("bruce").src = "assets/pngs/bruce.png";
    },
    targets: ['#bruceTank'],
    translateX: ['30vh', '-180vh'],
    loop: true,
    duration: 750,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: false,
    loopComplete: function() {
        let bruce = document.getElementById("bruce");
        if (bruce.src.match("assets/pngs/bruce.png")) {
            bruce.src = "assets/pngs/bruceReverse.png";
        }
        else {
            bruce.src = "assets/pngs/bruce.png";
        }
    }
})