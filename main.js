const grid = document.querySelector(".grid")
const resize = document.querySelector(".resize")
const erase = document/querySelector(".erase")
const random = document.querySelector(".random")
const reset = document.querySelector(".reset")


let cellNumbers = 64;
let divs;
let clear = false;
let randomClr = false;

function createGraph(){
    for(let i=1; i<=cellNumbers; i++){
        const row = document.createElement(`section`);
        row.classList.add("row");
        grid.appendChild(row);
        for(let j=1; i<=cellNumbers; j++){
            const div = document.createElement(`div`);
            row.appendChild(div);
            div.classList.toggle("column");
        }
    }
}

createGraph();


function draw(){
    divs = document.querySelectorAll("div");
    for (let i = 0; i<divs.length; i++){
        divs[i].onmouseenter = () => {
            divs[i].classList.add("black");
        }
    }
}

draw();

random.addEventListener('click', () =>{
    randomClr = !randomClr;
    clear = false;


    erase.classList.remove(`selected`);
    rainbow.classList.toggle(`selected`);

    if (randomClr == true && clear == false){
        randomizeClr();
    }else if (clear == false && randomClr == false){
        draw();
    }else if (clear ==true && randomClr == false){
        erase();
    }
})


function randomizeClr(){
    for (let i=0; i<divs.length; i++){
        let randomClr1 = Math.ceil(Math.random()*255);
        let randomClr2 = Math.ceil(Math.random()*255);
        let randomClr3 = Math.ceil(Math.random()*255);

        divs[i].onmouseenter = () => {
            divs[i].setAttribute(`style`, `background-color: rgb(${randomClr1},${randomClr2},${randomClr3})`);
        }
    }
}



erase.addEventListener("click", () =>{
    clear = !clear;
    randomClr = false;


    random.classList.remove("selected");
    erase.classList.toggle("selected");


    if(clear == true && randomClr == false){
        erase();
    }else if (clear == false && randomClr == false){
        draw();
    }else if (randomClr == true && clear == false){
        randomizeClr();
    }
})



function erase(){
    divs = document.querySelectorAll("div");
    for(let i =0; i<divs.length; i++){
        divs[i].onmouseenter = () => {
            divs[i].classList.remove("black");
            divs[i].style.backgroundColor = null;
        }    
    }
}


resize.addEventListener("onclick", (button) =>{
    animateButton(button);
    reset();
})



function animateButton(button){
    button.target.classList.add(`selected`);
    setTimeout(()=>{button.target.classList.remove(`selected`)},240);
}


resize.addEventListener(`click`, (button)=>{
    for (let i = 0; i<cellNumbers; i++){
        const row = document.querySelector(".row");
        row.parentNode.removeChild(row);
    }

    cellNumbers = parseInt(prompt("Enter a number between 1 - 100. The default value is 64"))
    if (isNaN(cellNumbers) || cellNumbers <1 || cellNumbers > 100){
        cellNumbers = 64;
        alert("A valid value was not entered. The default value will be applied.");
    }
    createGraph();
    draw();
    animateButton();
})


reset.addEventListener("onlcick",(button)=>{
    animateButton(button);
    reset();
})



function reset(){
    clear = false;
    randomClr = false;

    erase.classList.remove("selected")
    random.classList.remove("selected")

    divs = document.querySelectorAll("div");

    for (let i =0; i<cellNumbers; i++){
        const row = document.querySelector(`.row`);
        row.parentNode.removeChild(row);
    }
    createGraph();
    draw();
}