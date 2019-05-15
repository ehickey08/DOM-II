class Rocket {
    constructor(block){
        this.rocket = block;
        this.rocket.style.marginLeft = '10px';
        this.isBlasting = false;
        this.blastRocket = 0;
        this.descendRocket = 0;

        this.rocket.addEventListener('mousedown', event => {
            if(event.button === 2){ 
                event.preventDefault();
                this.toTop();
            } else{
            this.isBlasting = !this.isBlasting; 
            this.isBlasting ? this.moveRight() : this.moveLeft();
            }
        });

        this.rocket.addEventListener('contextmenu', e => e.preventDefault());
    }

    toTop (){
        let parent = this.rocket.parentNode;
        parent.removeChild(this.rocket);
        parent.prepend(this.rocket);
    }

    moveRight() {
        clearInterval(this.descendRocket);
        this.blastRocket = setInterval (() => { 
            this.rocket.style.marginLeft = `${parseInt(this.rocket.style.marginLeft)+5}px`; 
                if(this.rocket.style.marginLeft === '800px')
                    clearInterval(this.blastRocket);
        },1000/60) 
    }

    moveLeft() {
        clearInterval(this.blastRocket);
        this.descendRocket = setInterval (() => {
            this.rocket.style.marginLeft = `${parseInt(this.rocket.style.marginLeft)-5}px`; 
                if(this.rocket.style.marginLeft === '10px')
                    clearInterval(this.descendRocket);  
        },1000/60);
    }
}

let rockets = [...document.querySelectorAll('.block')];
rockets.forEach(block => {return new Rocket(block)});

      