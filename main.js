const grid = document.getElementById('container');
const reset = document.getElementById('reset');

// //make grid visible
// function createGrid() {
//     for (let i = 0; i < 256; i++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     grid.appendChild(square);
//     }
// }
// createGrid();

// //coloring function
// const color = document.querySelector('div');
// color.addEventListener('mouseover', function(stroke) {
//     stroke.target.classList.replace('square', 'color');
// });

//display slider value
function sliderChange(val) {
    document.getElementById('output').innerHTML = `${val}x${val}`;
}
document.getElementById('slider').value = 16;
sliderChange(16);

//grid that darkens each pass over
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', function(pass) {
            pass.target.style.backgroundColor ='black';
            pass.target.style.opacity = (parseFloat(pass.target.style.opacity) || 0) + 0.2;
        });
        grid.appendChild(square);
    }
}
createGrid();

// //reset grid to number <=100
// function resetGrid() {
//     let input = prompt('How many squares per side?');
//     let value = parseInt(input);
//     console.log(value);

//     if (value > 100) {
//         alert('Please set number to 100 or less.');
//     } else if (value <= 100) {
//         grid.innerText = "";
//         grid.style.setProperty('grid-template-columns', `repeat(${value}, 1fr)`);
//         grid.style.setProperty('grid-template-rows', `repeat(${value}, 1fr)`);

//         for (let i = 0; i < (value * value); i++) {
//             const square = document.createElement('div');
//             //square.classList.add('square');
//             square.addEventListener('mouseover', function(pass) {
//                 pass.target.style.backgroundColor ='black';
//                 pass.target.style.opacity = (parseFloat(pass.target.style.opacity) || 0) + 0.2;
//             });
//             grid.appendChild(square);  
//         }
//     } else {
//         alert('No number was given.')
//     }
// }
// reset.addEventListener('click', resetGrid);

//reset grid using slider
function resetSlider() {
    let value = document.getElementById('slider').value;

    grid.innerText = "";
    grid.style.setProperty('grid-template-columns', `repeat(${value}, 1fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(${value}, 1fr)`);

    for (let i = 0; i < (value * value); i++) {
        const square = document.createElement('div');
        //square.classList.add('square');
        square.addEventListener('mouseover', function(pass) {
            pass.target.style.backgroundColor ='black';
            pass.target.style.opacity = (parseFloat(pass.target.style.opacity) || 0) + 0.2;
        });
        grid.appendChild(square);
    }
}
reset.addEventListener('click', resetSlider);