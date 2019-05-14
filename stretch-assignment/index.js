let rockets = [...document.querySelectorAll('.block')];
rockets.forEach(el => {
    el.addEventListener('click', toTop)
});

function toTop (){
    let parent = this.parentNode;
    parent.removeChild(this);
    parent.prepend(this);
}

let isMoving = false;
let blastRocket = 0;
let descendRocket = '';

function moveRocket (isMoving, el){
    if(isMoving){
        el.style.marginLeft = '10px';
        blastRocket = setInterval (function () {
            el.style.marginLeft = parseInt(el.style.marginLeft) + 5 + 'px';
        },1000/60)
        
    } else{
        
        descendRocket = setInterval (function () {
            el.style.marginLeft = parseInt(el.style.marginLeft) - 5 + 'px';
            if(el.style.marginLeft === '10px'){
                clearInterval(descendRocket);
            }
        },1000/60);
    }
}

rockets.forEach(el => {
    el.addEventListener('mousedown', function() {
        isMoving = true;
        movingBlock = this;
        moveRocket(isMoving, movingBlock);
    });
});


rockets.forEach(el => {
    el.addEventListener('mouseup', function() {
        clearInterval(blastRocket);        
        isMoving = false;
        movingBlock = this;
        moveRocket(isMoving, movingBlock);
    });
});