let rockets = [...document.querySelectorAll('.block')];
rockets.forEach(el => {
    el.addEventListener('click', toTop)
});

function toTop (){
    let parent = this.parentNode;
    parent.removeChild(this);
    parent.prepend(this);
}

rockets.forEach(el => {
    el.addEventListener('mousedown', event => {
    });
});




rockets.forEach(el => {
    el.addEventListener('mouseup', event => {
    });
});