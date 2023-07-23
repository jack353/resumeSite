function bruceClick(){
    bruceSwim.pause();
    bruceRun.restart();
    bruceBob.pause();
    bruceJump.restart();

    popAll();

    setTimeout(() => {
        bruceRun.pause();
        bruceSwim.restart();
        bubble.restart();
        bruceBob.restart();
        bruceJump.pause();
    }, 3000);
}

function popAll(){
    let bubbles = document.getElementsByClassName("bubble");
    Array.prototype.forEach.call(bubbles, function(bubble) {
        popBubble(bubble.id, 3000);
    });
}

function popBubble(bubble){
    let icon = document.getElementById("icon"+bubble);
    bubble = document.getElementById(bubble);

    setTimeout(() => {
        icon.style.visibility = 'hidden';
        bubble.src = "assets/pngs/pop.png";
        setTimeout(() => {bubble.style.visibility = 'hidden';}, getRandomInt(500));
    }, getRandomInt(250));

    setTimeout(() => {bubble.src = "assets/pngs/bigBubble.png";
        bubble.style.visibility = 'visible';
        icon.style.visibility = 'visible';}, 3000);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}