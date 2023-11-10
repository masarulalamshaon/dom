//most use function on click
function makeGreen(){
    document.body.style.backgroundColor ='green';
}

//use varible
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick =makeBlue;
function makeBlue(){
    document.body.style.backgroundColor ='blue';
}

const purpleButton = document.getElementById('make-parple');
purpleButton.onclick = function makeParple(){
   document.body.style.backgroundColor ='purple';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}


const redButton = document.getElementById('make-red');
redButton.addEventListener('click',function makered(){
    document.body.style.backgroundColor = 'red';
})

//most importent some use

document.getElementById('make-goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor ='goldenrod';
})