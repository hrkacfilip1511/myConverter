let kmBtn = document.getElementById('btn1');
let euroBtn = document.getElementById('btn2');

kmBtn.addEventListener('click', () => {
    let input = document.getElementById('input1').value;
    document.getElementById('input2').value = input * 1.96;
})

euroBtn.addEventListener('click', () => {
    let input = document.getElementById('input1').value;
    document.getElementById('input2').value = input / 1.96;
})

let kgBtn = document.getElementById('btn3');
let lbsBtn = document.getElementById('btn4');

kgBtn.addEventListener('click', () => {
    let input = document.getElementById('input3').value;
    document.getElementById('input4').value = input / 2.204; 
})

lbsBtn.addEventListener('click', () => {
    let input = document.getElementById('input3').value;
    document.getElementById('input4').value = input * 2.204;
})