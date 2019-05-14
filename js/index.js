// Your code goes here
//Need 10 unique event listeners to update DOM
//Nest two similar events and prevent event propagation
//Stop the navigation from items from refreshing the page by using preventDefault()
//Implement GSAP animations

//Implement mouseover and mouseout on navBar to expand fontsize of all links
let navBar = document.querySelector('.nav');
navBar.addEventListener('mouseover', function () {
    let links = [...this.children];
    links.forEach(el => el.style.fontSize = '2.0rem');
});

navBar.addEventListener('mouseout', function () {
    let links = [...this.children];
    links.forEach(el => el.style.fontSize = '1.6rem');
});

//Implement a click/keydown to move the fun bus image
let topImage = document.querySelector('header img');
topImage.addEventListener('click', trackKeys);
topImage.style.marginTop = '0px';
topImage.style.marginLeft = '0px';

function trackKeys () {
    window.addEventListener('keydown', function (event) {
        console.log(event.key);
        if(event.key === 'w'){
            topImage.style.marginTop = parseInt(topImage.style.marginTop) - 5 + 'px';
            console.log(topImage.style.marginTop);
        }
        if(event.key === 'a'){
            topImage.style.marginLeft = parseInt(topImage.style.marginLeft) - 5 + 'px';
        }
        if(event.key === 's'){
            topImage.style.marginTop = parseInt(topImage.style.marginTop) + 5 + 'px';
        }
        if(event.key === 'd'){
            topImage.style.marginLeft = parseInt(topImage.style.marginLeft) + 5 + 'px';
        }
    });
}

//Implement a wheel event to scale the boat image
let destinationImage = document.querySelector('.content-destination img');
let scale = 1;
destinationImage.addEventListener('wheel', event => {
    event.preventDefault();
    
    if(event.deltaY < 0){ //scrolling up on the wheel
        scale += 0.1;
    } else {
        scale -= 0.1;
    }
    
    scale = Math.min(Math.max(scale, 0.1), 3.5); //set limits on the min and max
    destinationImage.style.transform = `scale(${scale})`;
});

//Implement a load event to produce an animation
window.addEventListener('load', function () {
    let funBus = document.querySelector('.logo-heading');
    funBus.style.animation = 'bounce-in 3s ease-in'; //causes bounce in animation once 10s is hit

});

//Implement a focus/blur event for buttons
let buttons = [...document.querySelectorAll('.btn')];
buttons.forEach(el => {
    el.addEventListener('focus', function () {
        el.textContent = 'I am focused!';
        el.style.color = 'darkRed';
    });
})

buttons.forEach(el => {
    el.addEventListener('blur', function () {
        el.textContent = 'Sign Me Up!';
        el.style.color = '';
    });
})

//Implement a resize event
function stopResizing () {
    console.log('help')
    let textInput = document.querySelector('header h2');
    textInput.textContent = `Welcome to Fun Bus!   Please stop touching the window!`;
}

window.addEventListener ('resize', stopResizing);

//Implement a scroll event
let navContainer = document.querySelector('.nav-container');
let imagesMain = document.querySelectorAll('.content-section img');
imagesMain.forEach(el => {
    el.classList.add('hidden')
});
window.addEventListener('scroll', function () {
    imagesMain.forEach(el => {
        if(document.documentElement.scrollTop > 200) {
            el.classList.remove('hidden')
            el.classList.add('slideUp')
        } else {
            el.classList.add('hidden');
            el.classList.remove('slideUp');
        }
    });

    if(document.documentElement.scrollTop>125){
        navContainer.style.background = 'yellow'
    } else {
        navContainer.style.background = '';
    }
});

//Implement a dblclick event
let destinationSection = document.querySelector('.content-destination');
destinationSection.addEventListener('dblclick', function () {
    this.classList.toggle('large');
});

//Implement a copy event

let allParas = [...document.querySelectorAll('p')]
allParas.forEach(el => {
    el.addEventListener('copy', function () {
        let spanWarning = document.createElement('span');
        el.appendChild(spanWarning);
        spanWarning.textContent = `\n Don't try to steal my work without crediting me!`
        spanWarning.style.fontWeight = 'bold';
    })
})