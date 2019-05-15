// rockets.forEach(el => {
//     el.addEventListener('dblclick', toTop)
// });

function toTop (el){
    let parent = el.parentNode;
    parent.removeChild(el);
    parent.prepend(el);
}

let isMoving = false;
let blastRocket = 0;
let descendRocket = '';

function moveRocket (isMoving, el){
    if(isMoving){
        if(el.style.marginLeft === ''){
            el.style.marginLeft = '10px';
        }
        console.log('moveRight')
        clearInterval(descendRocket)
        blastRocket = setInterval (function () {
            el.style.marginLeft = parseInt(el.style.marginLeft) + 5 + 'px';
            if(el.style.marginLeft === '800px'){
                clearInterval(blastRocket);
            }
        },1000/60)
    } else{
        console.log('moveLeft')
        clearInterval(blastRocket);
        descendRocket = setInterval (function () {
            el.style.marginLeft = parseInt(el.style.marginLeft) - 5 + 'px';
            if(el.style.marginLeft === '10px'){
                clearInterval(descendRocket);
            }
        },1000/60);
    }
}

let rockets = [...document.querySelectorAll('.block')];

rockets.forEach(el => {
    el.addEventListener('mousedown', function(event) {
        if(event.button ===2){
            event.preventDefault();
            toTop(this)
        } else{
        isMoving = !isMoving;
        movingBlock = this;
        moveRocket(isMoving, movingBlock);
        }
    });

    el.addEventListener('contextmenu', e => {
        e.preventDefault();
    })
});