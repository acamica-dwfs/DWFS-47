//element.animate(keyframes, options)
function addMovingAnim(selector, duration, distance){
    document.querySelector(selector).animate([
        { transform: 'translatex(0px)' },
        { transform: 'translatex(' + distance + 'px)'},
        { transform: 'translatex(0px)' },
    ], {
        duration: duration,
        iterations: Infinity
    });
}


function addRotateAnim(selector, duration){
    document.querySelector(selector).animate([
        { transform: 'rotateZ(0deg)' },
        { transform: 'rotateZ(180deg)' },
        { transform: 'rotateZ(360deg)' }
    ], {
        duration: duration,
        iterations: Infinity
    });
}


function addFadeOut(selector, duration){
    document.querySelector(selector).animate([
        { opacity: 1 },
        { opacity: 0.5 },
        { opacity: 0 }
    ], {
        duration: duration,
        iterations: 1
    });
    document.querySelector(selector).style.opacity = 0;
}
